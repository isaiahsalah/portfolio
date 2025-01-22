import fs from "fs";

const baseUrl = "https://isaiah.lat";

const routes = [
  "", // Página principal
  "about", // Ejemplo de otra ruta
  "contact", // Otra ruta
];

const generateSitemap = () => {
  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}/${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${route === "" ? 1.0 : 0.8}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  fs.writeFileSync("./public/sitemap.xml", sitemapContent.trim());
};

generateSitemap();
