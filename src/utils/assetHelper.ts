/**
 * Utility helper to resolve asset URLs correctly across preview and deployment environments.
 */
export function getAssetUrl(path: string): string {
  // If already full URL or data URI, return as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Ensure single leading slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return cleanPath;
}
