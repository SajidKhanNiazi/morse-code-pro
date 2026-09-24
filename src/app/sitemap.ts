import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://morsecodeacademy.com";
  const routes = [
    "",
    "/translator",
    "/morse-code-alphabet",
    "/learn-morse-code",
    "/practice",
    "/morse-code-history",
    "/morse-code-quiz",
    "/faq",
    "/about",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/translator" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/translator" || route === "/learn-morse-code" ? 0.9 : 0.8,
  }));
}
