import { getAllSitemapUrls } from "~/data/sitemapData";

export async function loader({ request }: { request: Request }) {
  const urls = getAllSitemapUrls();
  const urlObj = new URL(request.url);
  const domain = `${urlObj.protocol}//${urlObj.host}`;

  const xmlEntries = urls
    .map(
      (item) => `  <url>
    <loc>${domain}${item.path}</loc>
    <changefreq>${item.changefreq || "weekly"}</changefreq>
    <priority>${item.priority || "0.7"}</priority>
  </url>`
    )
    .join("\n");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
