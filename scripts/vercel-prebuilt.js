import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const vercelOutputDir = path.join(projectRoot, ".vercel", "output");
const vercelStaticDir = path.join(vercelOutputDir, "static");

// Helper to copy directory recursively
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  
  fs.readdirSync(from).forEach((element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

async function preparePrebuilt() {
  console.log("Preparing Vercel prebuilt directory...");
  
  // Clean old output
  if (fs.existsSync(vercelOutputDir)) {
    fs.rmSync(vercelOutputDir, { recursive: true, force: true });
  }
  
  // Create output static directory
  fs.mkdirSync(vercelStaticDir, { recursive: true });
  
  // Copy dist content
  if (!fs.existsSync(distDir)) {
    console.error("Error: dist/ directory not found! Run npm run build first.");
    process.exit(1);
  }
  
  console.log("Copying built assets to Vercel output...");
  copyFolderSync(distDir, vercelStaticDir);
  
  // Create config.json for Vercel
  const config = {
    version: 3,
    cleanUrls: true,
    trailingSlash: false,
    routes: []
  };

  // Load and compile redirects, rewrites, and headers from vercel.json if available
  const vercelJsonPath = path.join(projectRoot, "vercel.json");
  if (fs.existsSync(vercelJsonPath)) {
    try {
      const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, "utf8"));
      const routes = [];

      // Helper to convert vercel.json sources and destinations into Build Output API RegExp format
      const convertSource = (src) => {
        // Convert glob patterns to simple regexes
        let regex = src
          .replace(/\./g, "\\.") // Escape dots
          .replace(/:path\*/g, "(.*)") // Match path wildcard
          .replace(/:slug/g, "([^/]+)") // Match slug wildcard
          .replace(/:date/g, "([^/]+)"); // Match date wildcard
        return `^${regex}$`;
      };

      const convertDest = (dst) => {
        // Convert :path* or :slug to RegExp backreferences ($1, $2, etc.)
        return dst
          .replace(/:path\*/g, "$1")
          .replace(/:slug/g, "$1")
          .replace(/:date/g, "$1");
      };

      // 1. Process redirects
      if (vercelJson.redirects) {
        vercelJson.redirects.forEach((r) => {
          const route = {
            src: convertSource(r.source),
            status: r.permanent ? 308 : 307,
            headers: {
              Location: convertDest(r.destination)
            }
          };
          if (r.has) route.has = r.has;
          if (r.missing) route.missing = r.missing;
          routes.push(route);
        });
      }

      // 2. Process custom headers
      if (vercelJson.headers) {
        vercelJson.headers.forEach((h) => {
          const headerMap = {};
          h.headers.forEach((headerItem) => {
            headerMap[headerItem.key] = headerItem.value;
          });
          
          const route = {
            src: convertSource(h.source),
            headers: headerMap
          };
          if (h.has) route.has = h.has;
          if (h.missing) route.missing = h.missing;
          routes.push(route);
        });
      }

      // 3. Insert filesystem checkpoint
      routes.push({ handle: "filesystem" });

      // 4. Process rewrites (which act as fallbacks if not found on the filesystem)
      if (vercelJson.rewrites) {
        vercelJson.rewrites.forEach((rw) => {
          const route = {
            src: convertSource(rw.source),
            dest: convertDest(rw.destination)
          };
          if (rw.has) route.has = rw.has;
          if (rw.missing) route.missing = rw.missing;
          routes.push(route);
        });
      }

      config.routes = routes;
      console.log(`Successfully compiled vercel.json into ${routes.length} Vercel Build Output API routes.`);
    } catch (e) {
      console.warn("Warning: Could not compile vercel.json:", e.message);
      config.routes = [
        { handle: "filesystem" },
        { src: "^/(.*)$", dest: "/index.html" }
      ];
    }
  } else {
    console.warn("Warning: vercel.json not found in public/ directory. Using default SPA fallback.");
    config.routes = [
      { handle: "filesystem" },
      { src: "^/(.*)$", dest: "/index.html" }
    ];
  }
  
  fs.writeFileSync(
    path.join(vercelOutputDir, "config.json"),
    JSON.stringify(config, null, 2)
  );

  // Clean any leftover dev server origins (http://127.0.0.1:8000) from all prebuilt HTML files
  cleanLocalhostFromHtml(distDir);
  cleanLocalhostFromHtml(vercelStaticDir);
  
  console.log("Vercel prebuilt output ready!");
}

// Helper to recursively strip dev server origins (http://127.0.0.1:8000) from HTML files
function cleanLocalhostFromHtml(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      cleanLocalhostFromHtml(filePath);
    } else if (file.endsWith(".html")) {
      let content = fs.readFileSync(filePath, "utf8");
      if (/http:\/\/(127\.0\.0\.1|localhost):\d+/g.test(content)) {
        content = content.replace(/http:\/\/(127\.0\.0\.1|localhost):\d+/g, "");
        fs.writeFileSync(filePath, content, "utf8");
      }
    }
  });
}

preparePrebuilt().catch((err) => {
  console.error("Failed to prepare Vercel prebuilt output:", err);
  process.exit(1);
});
