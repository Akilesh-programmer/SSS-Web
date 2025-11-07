const env = process.env.VITE_APP_ENV;

if (env !== "production") {
  process.exit(1);
}
