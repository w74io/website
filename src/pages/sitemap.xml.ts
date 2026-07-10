import type { APIRoute } from "astro";

/** Generated at build time so URLs always match the deploy's primary domain. */
export const GET: APIRoute = ({ site }) => {
  const pages = ["/", "/request"];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
