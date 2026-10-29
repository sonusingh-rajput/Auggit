import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("solutions", "routes/solutions.tsx"),
  route("partner-with-us", "routes/partner-with-us.tsx"),
  route("faq", "routes/faq.tsx"),
  route("usecase", "routes/usecase.tsx"),
  route("usecase/:slug", "routes/usecase.$slug.tsx"),
  
  // Product Routes
  route("product/edms", "routes/product-edms.tsx"),
  route("product/slaice", "routes/product-slaice.tsx"),
  route("product/automation-suite", "routes/AutomationSuite.tsx"),
  route("product/automation-suite/edms-demo", "routes/edms-demo.tsx"),
  route("request-demo", "routes/edms-demo.tsx", { id: "routes/edms-demo-alias" }),
  route("product/automation-suite/vendor-onboarding", "routes/vendor-onboarding.tsx"),
  route("product/automation-suite/ap-automation", "routes/ap-automation.tsx"),
  route("product/automation-suite/gate-pass", "routes/gate-pass.tsx"),
  route("product/automation-suite/weighbridge", "routes/weighbridge.tsx"),
  route("product/automation-suite/automatic-data-entry", "routes/automatic-data-entry.tsx"),
  route("product/automation-suite/book-poc", "routes/book-poc.tsx"),
  route("book-poc", "routes/book-poc.tsx", { id: "routes/book-poc-alias" }),

  // Resources Routes
  route("casestudy", "routes/case-studies.tsx"),
  route("casestudy/:slug", "routes/case-studies.$slug.tsx"),
  route("research", "routes/research-articles.tsx"),
  route("research/:slug", "routes/research-articles.$slug.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;