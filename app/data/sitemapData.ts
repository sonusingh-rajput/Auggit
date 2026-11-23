import { blogs } from "./blogs";
import { researchArticles } from "./researchArticles";
import { caseStudiesData } from "~/routes/case-studies";
import { useCasesData } from "~/routes/usecase";

export interface SitemapPageItem {
  title: string;
  path: string;
  description?: string;
  badge?: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: string;
}

export interface SitemapCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  pages: SitemapPageItem[];
}

export function getSitemapCategories(): SitemapCategory[] {
  // 1. Core Company & Platform Pages
  const companyPages: SitemapPageItem[] = [
    {
      title: "Home — Enterprise SAP Compliance & Automation",
      path: "/",
      description: "Celebrating 10 years of enterprise excellence in SAP compliance, selective data slicing, and workflow automation.",
      badge: "Core",
      priority: "1.0",
      changefreq: "weekly",
    },
    {
      title: "About Us & Leadership",
      path: "/about",
      description: "Our 10-year journey, enterprise leadership, values, and mission to revolutionize Indian data residency and compliance.",
      badge: "Company",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      title: "Enterprise Services & SAP Consulting",
      path: "/services",
      description: "Specialized SAP integration, memory control for RISE with SAP, and migration advisory services.",
      badge: "Services",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      title: "Industry Solutions",
      path: "/solutions",
      description: "Tailored compliance, SCM automation, and data governance solutions across heavy manufacturing, retail, and aviation.",
      badge: "Solutions",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      title: "Partner With Us — Resellers & SIs",
      path: "/partner-with-us",
      description: "Partner ecosystem for enterprise system integrators, chartered accountants, and value-added resellers.",
      badge: "Partners",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      title: "Compliance & Product FAQs",
      path: "/faq",
      description: "Detailed answers to enterprise inquiries across SLaiCE, eDMS, Automation Suite, security, and MCA Section 128.",
      badge: "FAQ",
      priority: "0.8",
      changefreq: "weekly",
    },
    {
      title: "Contact Us & Regional Offices",
      path: "/contact",
      description: "Connect with our solution architects, technical support, and enterprise sales teams in Chennai and across India.",
      badge: "Contact",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      title: "Request a Demo / Book POC",
      path: "/book-poc",
      description: "Schedule an interactive demo or request a risk-free Proof of Concept tailored to your ERP landscape.",
      badge: "Action",
      priority: "0.9",
      changefreq: "weekly",
    },
  ];

  // 2. Products & Automation Suite Pages
  const productPages: SitemapPageItem[] = [
    {
      title: "SLaiCE — Selective Legacy & Compliance Extraction (Built on SAP)",
      path: "/product/slaice",
      description: "Surgical, parameter-driven SAP data slicing for Section 128 compliance, carve-outs, and lean S/4HANA transitions.",
      badge: "Flagship",
      priority: "0.95",
      changefreq: "weekly",
    },
    {
      title: "Cloud eDMS Platform",
      path: "/product/edms",
      description: "Sub-second indexed document vault, cryptographic version-locking, and MCA Section 128 audit trail readiness.",
      badge: "Core",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      title: "Auggit Automation Suite Overview",
      path: "/product/automation-suite",
      description: "End-to-end supply chain workflow automation connecting physical operations with core ERP backbones.",
      badge: "Suite",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      title: "Vendor Onboarding Tool",
      path: "/product/automation-suite/vendor-onboarding",
      description: "Self-service supplier portal, automated statutory KYC verification, and ERP vendor master generation.",
      badge: "Automation",
      priority: "0.85",
      changefreq: "weekly",
    },
    {
      title: "Accounts Payable (AP) Automation",
      path: "/product/automation-suite/ap-automation",
      description: "Automated 3-way matching (PO, GRN, Invoice), MIRO-MIGO reconciliation, and exception-based routing.",
      badge: "Automation",
      priority: "0.85",
      changefreq: "weekly",
    },
    {
      title: "Gate Pass Management System",
      path: "/product/automation-suite/gate-pass",
      description: "Digital gate entry for trucks and consignments with OCR license plate recognition and CCTV snapshot audit.",
      badge: "Automation",
      priority: "0.85",
      changefreq: "weekly",
    },
    {
      title: "Weighbridge Hardware Integration",
      path: "/product/automation-suite/weighbridge",
      description: "Tamper-proof digital weight capture directly from scale hardware, preventing manual operator leakage.",
      badge: "Automation",
      priority: "0.85",
      changefreq: "weekly",
    },
    {
      title: "Automatic Data Entry (ADE)",
      path: "/product/automation-suite/automatic-data-entry",
      description: "AI & OCR powered document ingestion transforming PDF invoices into structured Tally and ERP vouchers.",
      badge: "Automation",
      priority: "0.85",
      changefreq: "weekly",
    },
    {
      title: "Interactive eDMS Demo Walkthrough",
      path: "/product/automation-suite/edms-demo",
      description: "Experience hands-on simulation of high-volume document search, tagging, and ERP reconciliation.",
      badge: "Interactive",
      priority: "0.8",
      changefreq: "monthly",
    },
  ];

  // 3. Customer Case Studies (Automatically dynamically generated from caseStudiesData)
  const caseStudyPages: SitemapPageItem[] = [
    {
      title: "Case Studies Directory — Proven Client Results",
      path: "/casestudy",
      description: "Explore verified enterprise case studies across manufacturing, aviation, automotive, and international trade.",
      badge: "Hub",
      priority: "0.9",
      changefreq: "weekly",
    },
    ...caseStudiesData.map((cs) => ({
      title: cs.title,
      path: `/casestudy/${cs.slug}`,
      description: cs.summary,
      badge: cs.metric || cs.industry,
      priority: "0.85",
      changefreq: "weekly" as const,
    })),
  ];

  // 4. Research Articles (Automatically dynamically generated from researchArticles)
  const researchPages: SitemapPageItem[] = [
    {
      title: "Research Articles Hub — Insights for the Connected Enterprise",
      path: "/research",
      description: "Perspectives and in-depth engineering analyses on connecting SAP with surrounding business operations.",
      badge: "Hub",
      priority: "0.9",
      changefreq: "weekly",
    },
    ...researchArticles.map((ra) => ({
      title: ra.title,
      path: `/research/${ra.slug}`,
      description: ra.summary,
      badge: ra.category,
      priority: "0.8",
      changefreq: "monthly" as const,
    })),
  ];

  // 5. Blogs & Perspectives (Automatically dynamically generated from blogs)
  const blogPages: SitemapPageItem[] = [
    {
      title: "Enterprise Blog & Knowledge Base",
      path: "/blog",
      description: "Expert guides on document management, Indian data residency, MCA Section 128 audits, and eDMS evaluation.",
      badge: "Hub",
      priority: "0.9",
      changefreq: "weekly",
    },
    ...blogs.map((b) => ({
      title: b.title,
      path: `/blog/${b.slug}`,
      description: b.summary,
      badge: b.category,
      priority: "0.8",
      changefreq: "weekly" as const,
    })),
  ];

  // 6. Selective Slicing Use Cases (Automatically dynamically generated from useCasesData)
  const useCasePages: SitemapPageItem[] = [
    {
      title: "Use Cases Hub — Enterprise Data Slicing",
      path: "/usecase",
      description: "Technical architectures and business workflows powered by selective data slicing and automated ingestion.",
      badge: "Hub",
      priority: "0.85",
      changefreq: "weekly",
    },
    ...useCasesData.map((uc) => ({
      title: uc.title,
      path: `/usecase/${uc.slug}`,
      description: uc.summary,
      badge: uc.impact || uc.category,
      priority: "0.8",
      changefreq: "monthly" as const,
    })),
  ];

  return [
    {
      id: "company",
      title: "Platform & Company",
      description: "Primary enterprise portals, company overview, services, leadership, and contact points.",
      iconName: "FiHome",
      badge: `${companyPages.length} Pages`,
      pages: companyPages,
    },
    {
      id: "products",
      title: "Products & Automation Suite",
      description: "Proprietary software tools: SLaiCE, eDMS Platform, and the modular Automation Suite.",
      iconName: "FiLayers",
      badge: `${productPages.length} Products`,
      pages: productPages,
    },
    {
      id: "casestudy",
      title: "Enterprise Case Studies",
      description: "Real-world ROI, compliance milestones, and operational speed achieved with Auggit and SLaiCE.",
      iconName: "FiAward",
      badge: `${caseStudyPages.length} Case Studies`,
      pages: caseStudyPages,
    },
    {
      id: "research",
      title: "Research & Technical Whitepapers",
      description: "Engineering research on SAP last-mile connectivity, landscape migration, and audit compliance.",
      iconName: "FiBookOpen",
      badge: `${researchPages.length} Articles`,
      pages: researchPages,
    },
    {
      id: "blog",
      title: "Knowledge Base & Blogs",
      description: "In-depth guides on statutory compliance, paperless operations, and enterprise audit readiness.",
      iconName: "FiFileText",
      badge: `${blogPages.length} Blogs`,
      pages: blogPages,
    },
    {
      id: "usecase",
      title: "Operational Use Cases",
      description: "Specific implementation blueprints for Section 128 compliance, AP automation, and S/4HANA carve-outs.",
      iconName: "FiCompass",
      badge: `${useCasePages.length} Use Cases`,
      pages: useCasePages,
    },
  ];
}

/**
 * Returns a flat array of all URLs across the entire site.
 * Used for XML sitemap generation and overall page counts.
 */
export function getAllSitemapUrls(): SitemapPageItem[] {
  const categories = getSitemapCategories();
  const allUrls: SitemapPageItem[] = [];
  const visitedPaths = new Set<string>();

  for (const cat of categories) {
    for (const page of cat.pages) {
      if (!visitedPaths.has(page.path)) {
        visitedPaths.add(page.path);
        allUrls.push(page);
      }
    }
  }

  return allUrls;
}
