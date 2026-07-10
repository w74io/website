import type { APIRoute } from "astro";

/** Generated at build time so the sitemap URL matches the deploy's primary domain. */
export const GET: APIRoute = ({ site }) => {
  const body = `User-agent: *
Allow: /
Disallow: /request/thanks

Sitemap: ${new URL("/sitemap.xml", site)}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
