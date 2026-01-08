// app/service-worker-register.tsx
// Service Worker registration for offline support and performance

"use client";

import { useEffect } from "react";

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js", { scope: "/" })
          .then((registration) => {
            console.log("Service Worker registered:", registration);

            // Check for updates periodically (every 6 hours)
            setInterval(() => {
              registration.update();
            }, 6 * 60 * 60 * 1000);
          })
          .catch((error) => {
            console.log("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  return null;
}
