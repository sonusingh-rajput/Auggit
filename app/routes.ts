import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("faq", "routes/faq.tsx"),
  route("usecase", "routes/usecase.tsx"),
  route("usecase/:slug", "routes/usecase.$slug.tsx"),
  route("product/automation-suite", "routes/product-edms.tsx"),
  route("product/slaice", "routes/product-slaice.tsx"),
  route("casestudy", "routes/case-studies.tsx"),
  route("casestudy/:slug", "routes/case-studies.$slug.tsx"),
  route("research", "routes/research-articles.tsx"),
  route("research/:slug", "routes/research-articles.$slug.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;