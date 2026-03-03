import * as cheerio from "cheerio";

export async function getPreviewImage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    let image =
      $('meta[property="og:image"]').attr("content") ||
      $('meta[name="twitter:image"]').attr("content");

    if (!image) return "/fallback.jpg";

    // Fix relative URLs
    if (image.startsWith("/")) {
      const base = new URL(url).origin;
      image = base + image;
    }

    return image;
  } catch (error) {
    console.error(`Failed to fetch preview for ${url}`);
    return "/fallback.jpg";
  }
}