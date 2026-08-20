import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/agb",
    },
    sitemap: "https://blendisbarbershop.ch/sitemap.xml",
  };
}
