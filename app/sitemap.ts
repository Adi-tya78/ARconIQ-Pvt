import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const siteUrl = "https://arconiqs.co.in"

const routes = [
  "/",
  "/about",
  "/services/ai-model-training",
  "/services/business-projects",
  "/services/content-moderation",
  "/services/customer-support",
  "/services/data-handling",
  "/services/email-management",
  "/legal/cookie-policy",
  "/legal/data-processing-agreement",
  "/legal/disclaimer",
  "/legal/privacy-policy",
  "/legal/terms-of-service",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services/") ? 0.8 : 0.5,
  }))
}
