/**
 * Utility to resolve asset paths for GitHub Pages and any subpath hosting.
 * Handles both relative and absolute paths, ensuring that images and files
 * in the public/ folder are loaded correctly regardless of whether the site is
 * hosted at the domain root or a repository subpath (e.g. /website-Osqe/).
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';

  // Return as-is if already an external, data, or blob URL
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // import.meta.env.BASE_URL is provided by Vite (defaults to './' or repo base)
  const base = import.meta.env.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  return `${normalizedBase}${cleanPath}`;
}

