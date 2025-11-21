/**
 * Performance Monitoring Utilities
 * Track Core Web Vitals and custom metrics
 */

/**
 * Reports Web Vitals to analytics
 * @param {Object} metric - Web Vital metric
 */
export const reportWebVitals = (metric) => {
  // Log in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vital] ${metric.name}:`, metric.value, metric);
  }

  // Send to analytics in production
  if (import.meta.env.PROD) {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag("event", metric.name, {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        metric_id: metric.id,
        metric_value: metric.value,
        metric_delta: metric.delta,
      });
    }

    // Custom analytics endpoint (if needed)
    if (window.fetch) {
      fetch("/api/analytics/vitals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          metric: metric.name,
          value: metric.value,
          id: metric.id,
          url: window.location.pathname,
          timestamp: Date.now(),
        }),
      }).catch(() => {
        // Silently fail
      });
    }
  }
};

/**
 * Measures and reports Largest Contentful Paint (LCP)
 */
export const measureLCP = () => {
  if ("PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];

        reportWebVitals({
          name: "LCP",
          value: lastEntry.renderTime || lastEntry.loadTime,
          id: "lcp",
          delta: lastEntry.renderTime || lastEntry.loadTime,
        });
      });

      observer.observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {
      // Observer not supported
    }
  }
};

/**
 * Measures and reports First Input Delay (FID)
 */
export const measureFID = () => {
  if ("PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          reportWebVitals({
            name: "FID",
            value: entry.processingStart - entry.startTime,
            id: "fid",
            delta: entry.processingStart - entry.startTime,
          });
        });
      });

      observer.observe({ type: "first-input", buffered: true });
    } catch (e) {
      // Observer not supported
    }
  }
};

/**
 * Measures and reports Cumulative Layout Shift (CLS)
 */
export const measureCLS = () => {
  if ("PerformanceObserver" in window) {
    try {
      let clsValue = 0;
      let clsEntries = [];

      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            clsEntries.push(entry);
          }
        });

        reportWebVitals({
          name: "CLS",
          value: clsValue,
          id: "cls",
          delta: clsValue,
        });
      });

      observer.observe({ type: "layout-shift", buffered: true });
    } catch (e) {
      // Observer not supported
    }
  }
};

/**
 * Measures Time to First Byte (TTFB)
 */
export const measureTTFB = () => {
  if ("PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          reportWebVitals({
            name: "TTFB",
            value: entry.responseStart - entry.requestStart,
            id: "ttfb",
            delta: entry.responseStart - entry.requestStart,
          });
        });
      });

      observer.observe({ type: "navigation", buffered: true });
    } catch (e) {
      // Observer not supported
    }
  }
};

/**
 * Measures First Contentful Paint (FCP)
 */
export const measureFCP = () => {
  if ("PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === "first-contentful-paint") {
            reportWebVitals({
              name: "FCP",
              value: entry.startTime,
              id: "fcp",
              delta: entry.startTime,
            });
          }
        });
      });

      observer.observe({ type: "paint", buffered: true });
    } catch (e) {
      // Observer not supported
    }
  }
};

/**
 * Tracks page load performance
 */
export const trackPageLoad = () => {
  if ("performance" in window && "timing" in window.performance) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domReady =
          timing.domContentLoadedEventEnd - timing.navigationStart;
        const interactive = timing.domInteractive - timing.navigationStart;

        if (import.meta.env.DEV) {
          console.log("Page Performance:", {
            "Total Load Time": `${loadTime}ms`,
            "DOM Ready": `${domReady}ms`,
            Interactive: `${interactive}ms`,
          });
        }

        // Report to analytics
        if (window.gtag) {
          window.gtag("event", "timing_complete", {
            name: "page_load",
            value: loadTime,
            event_category: "Performance",
          });
        }
      }, 0);
    });
  }
};

/**
 * Tracks resource loading performance
 */
export const trackResourceTiming = () => {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const resources = performance.getEntriesByType("resource");

        // Categorize resources
        const byType = {};
        resources.forEach((resource) => {
          const type = resource.initiatorType;
          if (!byType[type]) {
            byType[type] = { count: 0, totalSize: 0, totalDuration: 0 };
          }
          byType[type].count++;
          byType[type].totalSize += resource.transferSize || 0;
          byType[type].totalDuration += resource.duration;
        });

        if (import.meta.env.DEV) {
          console.log("Resource Timing:", byType);
        }

        // Find slow resources (>1s)
        const slowResources = resources.filter((r) => r.duration > 1000);
        if (slowResources.length > 0 && import.meta.env.DEV) {
          console.warn(
            "Slow Resources (>1s):",
            slowResources.map((r) => ({
              name: r.name,
              duration: `${r.duration.toFixed(2)}ms`,
              type: r.initiatorType,
            }))
          );
        }
      }, 0);
    });
  }
};

/**
 * Monitors memory usage (Chrome only)
 */
export const monitorMemory = () => {
  if ("memory" in performance) {
    const checkMemory = () => {
      const memory = performance.memory;
      const usedMB = (memory.usedJSHeapSize / 1048576).toFixed(2);
      const totalMB = (memory.totalJSHeapSize / 1048576).toFixed(2);
      const limitMB = (memory.jsHeapSizeLimit / 1048576).toFixed(2);

      if (import.meta.env.DEV) {
        console.log(`Memory: ${usedMB}MB / ${totalMB}MB (Limit: ${limitMB}MB)`);
      }

      // Warn if approaching limit
      if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.9) {
        console.warn("Memory usage is high (>90% of limit)");
      }
    };

    // Check every 30 seconds in development
    if (import.meta.env.DEV) {
      setInterval(checkMemory, 30000);
    }
  }
};

/**
 * Tracks custom metrics
 */
export const trackCustomMetric = (name, value, unit = "ms") => {
  if (import.meta.env.DEV) {
    console.log(`[Custom Metric] ${name}: ${value}${unit}`);
  }

  if (window.gtag) {
    window.gtag("event", "custom_metric", {
      metric_name: name,
      value: value,
      unit: unit,
    });
  }
};

/**
 * Performance budget checker
 */
export const checkPerformanceBudget = () => {
  const budgets = {
    LCP: 2500, // ms
    FID: 100, // ms
    CLS: 0.1, // score
    FCP: 1800, // ms
    TTFB: 600, // ms
  };

  window.addEventListener("load", () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType("navigation")[0];
      const paint = performance.getEntriesByType("paint");

      const metrics = {
        TTFB: navigation?.responseStart - navigation?.requestStart,
        FCP: paint.find((p) => p.name === "first-contentful-paint")?.startTime,
      };

      Object.entries(metrics).forEach(([metric, value]) => {
        if (value && budgets[metric] && value > budgets[metric]) {
          console.warn(
            `⚠️ Performance Budget Exceeded: ${metric} = ${value.toFixed(
              2
            )}ms (budget: ${budgets[metric]}ms)`
          );
        }
      });
    }, 0);
  });
};

/**
 * Initialize all performance monitoring
 */
export const initPerformanceMonitoring = () => {
  if (typeof window === "undefined") {
    return;
  }

  measureLCP();
  measureFID();
  measureCLS();
  measureTTFB();
  measureFCP();
  trackPageLoad();
  trackResourceTiming();

  if (import.meta.env.DEV) {
    monitorMemory();
    checkPerformanceBudget();
  }
};

// Auto-initialize in production
if (import.meta.env.PROD && typeof window !== "undefined") {
  initPerformanceMonitoring();
}

export default {
  reportWebVitals,
  measureLCP,
  measureFID,
  measureCLS,
  measureTTFB,
  measureFCP,
  trackPageLoad,
  trackResourceTiming,
  monitorMemory,
  trackCustomMetric,
  checkPerformanceBudget,
  initPerformanceMonitoring,
};
