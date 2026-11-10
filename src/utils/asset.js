// Builds a URL for a file in /public that also works if the site is ever
// served from a sub-path (Vite's BASE_URL is "/" by default).
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
