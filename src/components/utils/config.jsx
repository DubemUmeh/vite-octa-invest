const isLocalhost = window.location.hostname === "localhost";

// Add a DEV_MODE flag
export const DEV_MODE = import.meta.env.VITE_DEV_MODE === "true" || false;

export const API_BASE =
  import.meta.env.VITE_API_BASE ||
  (isLocalhost
    ? "http://127.0.0.1:8000"
    : "");