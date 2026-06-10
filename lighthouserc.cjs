module.exports = {
  ci: {
    collect: {
      startServerCommand:
        "npm run start -- --hostname 127.0.0.1 --port 3000",
      startServerReadyPattern: "Ready",
      url: [
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000/case-studies",
        "http://127.0.0.1:3000/case-studies/fullstack-observability",
        "http://127.0.0.1:3000/writing",
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--no-sandbox --disable-dev-shm-usage",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.3 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.9 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 7000 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 14000 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "total-blocking-time": ["warn", { maxNumericValue: 2200 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};
