// Minimal Cloudflare Worker entry point for static site hosting
export default {
  fetch: async (request: Request) => {
    // Return 404 for any dynamic requests
    // Static files are served by Cloudflare Pages
    return new Response('Not Found', { status: 404 });
  },
} as ExportedHandler;
