import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: "https://isaiah.lat" });
  const writeStream = createWriteStream(
    resolve(__dirname, "public/sitemap.xml")
  );

  links.forEach((link) => stream.write(link));
  stream.end();

  const sitemap = await streamToPromise(stream).then((data) => data.toString());
  writeStream.write(sitemap);
  console.log("Sitemap generado exitosamente.");
}

generateSitemap().catch((error) => {
  console.error("Error al generar el sitemap:", error);
});
