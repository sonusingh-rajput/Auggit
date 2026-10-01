export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; headers: string[]; rows: string[][] };

export type ArticleSection = {
  heading?: string;
  blocks: ArticleBlock[];
};

export type ResearchArticle = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  sections: ArticleSection[];
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "last-mile-connectivity-sap-enterprise-processes",
    title: "Last Mile Connectivity for SAP Driven Enterprise Processes",
    category: "Automation Suite",
    summary:
      "SAP provides the transactional backbone for critical enterprise processes. Last mile connectivity brings the surrounding operational activities into the same connected journey.",
    readTime: "5 min read",
    sections: [
      {
        blocks: [
          {
            type: "p",
            text: "SAP provides the transactional backbone for critical enterprise processes. The broader business journey also involves supplier interactions, facility operations, weighment, material receipt, invoice verification and approvals. Last mile connectivity brings these operational activities into the same connected journey.",
          },
          {
            type: "p",
            text: "Auggit Automation Suite enables this connection by integrating the processes, information and actions surrounding a transaction with SAP.",
          },
        ],
      },
      {
        heading: "SAP at the core of a broader business journey",
        blocks: [
          {
            type: "p",
            text: "SAP provides the transactional foundation for procurement, material receipt and finance. This foundation is supported by business events that take place across the physical and operational environment.",
          },
          {
            type: "p",
            text: "Supplier information is collected before a vendor is created. Security verifies vehicles at the gate. Weighbridges establish the actual quantity received. Finance reviews invoices against purchase and receipt information.",
          },
          {
            type: "p",
            text: "Connecting these activities with SAP gives teams the operational context behind each transaction, including the events, records, approvals and exceptions that support it.",
          },
        ],
      },
      {
        heading: "Why operational handoffs need stronger connections",
        blocks: [
          {
            type: "p",
            text: "The need for connectivity usually appears at the handoffs between systems and teams. A supplier may send information by email. Gate staff may maintain a separate register. A weighment reading may be recorded independently. Stores confirm receipt, while finance later brings together the purchase order, receipt and invoice needed for verification.",
          },
          { type: "p", text: "Typical signs of a disconnected process include:" },
          {
            type: "list",
            items: [
              "The same supplier or transaction information is entered more than once",
              "Gate and weighment activities cannot be viewed with the related purchase order",
              "Supporting records are spread across emails, folders and applications",
              "Approvals and exceptions depend on manual follow-ups",
              "Users can see individual stages but not the status of the complete transaction",
            ],
          },
          {
            type: "p",
            text: "Each step may still be completed, but the organization spends time reconnecting information that should have remained connected from the beginning.",
          },
        ],
      },
      {
        heading: "How Auggit Automation Suite enables last mile connectivity",
        blocks: [
          {
            type: "p",
            text: "Auggit Automation Suite is designed to complement SAP across this operational space. It integrates vendor onboarding, gate pass management, weighbridge activity, material receipt, supplier invoice processing and approval workflows with the relevant SAP processes through one coordinated platform.",
          },
          {
            type: "p",
            text: "The suite does not treat these as isolated applications. Information created in one process becomes useful context for the next:",
          },
          {
            type: "list",
            items: [
              "Validated supplier information supports controlled vendor creation",
              "SAP purchase order details support gate and material verification",
              "Vehicle and material movements are digitally recorded against the relevant reference",
              "Gross and tare weights are captured and the net quantity is connected to material receipt",
              "Goods receipt information supports supplier invoice verification",
              "Two-way or three-way matching identifies differences before further processing",
              "Approvals and exceptions move through configurable workflows with a visible status",
            ],
          },
          {
            type: "p",
            text: "This creates process continuity between SAP and the people performing day-to-day operational work.",
          },
        ],
      },
      {
        heading: "One transaction should carry its context from start to finish",
        blocks: [
          {
            type: "p",
            text: "The real value of integration is not simply moving data between two systems. It is ensuring that the context of a transaction remains available as the transaction moves across departments.",
          },
          {
            type: "p",
            text: "The purchase order used at the gate should support material verification. The weighment record should support the received quantity. The goods receipt should support invoice matching. The approval should remain part of the same history.",
          },
          {
            type: "p",
            text: "With Auggit Automation Suite, users can work with a connected transaction trail instead of reconstructing the journey through separate searches and follow-ups. Procurement, security, stores, finance and approvers see the information relevant to their role while working with the same underlying business context.",
          },
        ],
      },
      {
        heading: "What connected execution changes for the business",
        blocks: [
          {
            type: "p",
            text: "By connecting operational activity with SAP, Auggit Automation Suite helps enterprises achieve:",
          },
          {
            type: "list",
            items: [
              "Greater visibility from supplier onboarding to settlement readiness",
              "Less repeated data entry and manual reconciliation",
              "Faster gate, weighment and material-receipt processing",
              "Earlier identification of mismatches and missing information",
              "Clearer ownership of approvals and exceptions",
              "A connected transaction history for compliance and audit requirements",
            ],
          },
          {
            type: "p",
            text: "The improvement comes from connecting the complete journey, not merely digitizing one activity at a time.",
          },
        ],
      },
      {
        heading: "Connecting SAP with the complete operational journey",
        blocks: [
          {
            type: "p",
            text: "The last mile of enterprise automation is not a single step. It is the chain of real-world activities that surrounds every SAP transaction. When that chain is fragmented, visibility and control weaken at every handoff.",
          },
          {
            type: "p",
            text: "Auggit Automation Suite connects this operational journey while SAP continues to serve as the core transactional system. By bringing supplier processes, physical movement, goods receipt, invoice verification and approvals together, Auggit helps enterprises move from separate activities to one controlled, traceable and connected way of working.",
          },
        ],
      },
    ],
  },
  {
    slug: "purchase-to-payment-connected-procure-to-pay",
    title: "From Purchase to Payment: A Connected Procure-to-Pay Journey",
    category: "Automation Suite",
    summary:
      "One purchase. Multiple teams. A chain of information, checks and approvals. Auggit Automation Suite connects every stage with SAP for one continuous view from onboarding to settlement readiness.",
    readTime: "6 min read",
    sections: [
      {
        blocks: [
          { type: "p", text: "One purchase. Multiple teams. A chain of information, checks and approvals." },
          {
            type: "p",
            text: "Before a supplier invoice is ready for payment, the transaction has already moved through supplier onboarding, purchase-order processing, gate entry, weighment and goods receipt. Auggit Automation Suite connects these stages with SAP, giving the organization one continuous view of the purchase from onboarding to settlement readiness.",
          },
        ],
      },
      {
        heading: "A purchase creates many moving parts",
        blocks: [
          {
            type: "p",
            text: "Before a supplier invoice can be processed, the supplier must be correctly onboarded, the purchase must be approved, the material must arrive and the received quantity must be confirmed. Where weighment applies, gross and tare weights must establish the net quantity. Finance must then compare the invoice with the relevant purchase and receipt information before approval.",
          },
          {
            type: "p",
            text: "The process crosses departmental boundaries, but the business still expects one answer: what is the current status of this purchase? When every team manages only its own stage, obtaining that answer becomes unnecessarily difficult.",
          },
        ],
      },
      {
        heading: "Disconnected handoffs hide the complete transaction",
        blocks: [
          {
            type: "p",
            text: "A procurement transaction can include supplier declarations, tax and banking information, the purchase order, gate-entry details, weighment records, the goods receipt note, the supplier invoice, discrepancy information and approvals. These are not unrelated records. Together, they explain what was ordered, what arrived, what was invoiced and what was approved.",
          },
          { type: "p", text: "When the connection between them is lost, teams spend time:" },
          {
            type: "list",
            items: [
              "Re-entering supplier and transaction information",
              "Searching different systems, emails and folders for context",
              "Manually bringing purchase, receipt and invoice records together",
              "Following up separately on pending approvals and discrepancies",
              "Reconstructing the transaction history during reviews or audits",
            ],
          },
          {
            type: "p",
            text: "The delay is often not caused by the transaction itself. It is caused by the effort required to understand and reconnect it.",
          },
        ],
      },
      {
        heading: "Auggit Automation Suite creates a connected procure-to-pay journey",
        blocks: [
          {
            type: "p",
            text: "Auggit Automation Suite connects the processes that sit across the procure-to-pay lifecycle and integrates them with SAP. Instead of automating each stage in isolation, the suite allows information generated at one point to support the next action.",
          },
          { type: "p", text: "The connected journey can include:" },
          {
            type: "list",
            items: [
              "Vendor onboarding with controlled collection and validation of supplier information",
              "Purchase order information from SAP as the reference for subsequent activities",
              "Digital gate entry and inward material-movement tracking",
              "Integrated weighment with automatic net-weight calculation where applicable",
              "Confirmation of received quantity and goods receipt in SAP",
              "Supplier invoice intake with AI-enabled data capture",
              "Two-way or three-way matching using the applicable purchase and receipt information",
              "Structured resolution of discrepancies and configurable approval workflows",
              "A validated transaction ready to proceed according to the agreed payment terms",
            ],
          },
          {
            type: "p",
            text: "Auggit maintains the relationship between these stages so that the purchase does not lose its context as it moves from one team to another.",
          },
        ],
      },
      {
        heading: "The transaction should be able to tell its own story",
        blocks: [
          {
            type: "p",
            text: "A user reviewing a purchase should not have to ask several teams to understand what happened. The supplier information, purchase order, gate activity, weighment, receipt, invoice, matching result and approval status should remain connected through a common transaction context.",
          },
          {
            type: "p",
            text: "Auggit Automation Suite creates this connected digital trail. Users can access the relevant information and supporting records without rebuilding the sequence manually. This improves day-to-day visibility and makes the transaction easier to review when an approval, exception, compliance check or audit requires the complete history.",
          },
        ],
      },
      {
        heading: "Matching is where the connected journey becomes a control",
        blocks: [
          {
            type: "p",
            text: "Invoice matching becomes more effective when the earlier stages of the purchase are already connected. Auggit can perform the applicable verification based on the organization's process:",
          },
          {
            type: "list",
            items: [
              "Two-way matching compares the purchase order with the supplier invoice.",
              "Three-way matching compares the purchase order, goods receipt note and supplier invoice.",
            ],
          },
          {
            type: "p",
            text: "Differences in quantity, price, material, receipt information or invoice value can be identified before the invoice moves further. Finance receives the supporting context with the transaction instead of collecting it after a mismatch is found.",
          },
        ],
      },
      {
        heading: "Exceptions should move through a process, not an inbox",
        blocks: [
          {
            type: "p",
            text: "A mismatch does not always mean that a transaction is invalid. It may require clarification, correction or approval. The problem begins when the exception is discussed through scattered emails and no one has a clear view of ownership or status.",
          },
          {
            type: "p",
            text: "The Automation Suite routes exceptions through a structured workflow. The relevant information stays with the issue, the responsible user can take action and the transaction can return to verification once the discrepancy is addressed. Verified invoices can then proceed through the required approval workflow with a complete action history.",
          },
        ],
      },
      {
        heading: "The business impact extends beyond faster invoice processing",
        blocks: [
          { type: "p", text: "A connected procure-to-pay journey can deliver:" },
          {
            type: "list",
            items: [
              "Faster supplier onboarding and transaction processing",
              "Shared visibility across procurement, security, stores and finance",
              "Reduced manual entry, comparison and follow-up",
              "Earlier identification and controlled resolution of discrepancies",
              "Better approval accountability and spend control",
              "A complete and accessible transaction history",
              "Stronger compliance and audit readiness",
            ],
          },
          {
            type: "p",
            text: "The value lies in knowing that each step is connected to what came before it and is ready to support what happens next.",
          },
        ],
      },
      {
        heading: "From a series of tasks to one business journey",
        blocks: [
          {
            type: "p",
            text: "Procure-to-pay should not feel like a relay in which every team receives incomplete information and passes a new set of records forward. The purchase should remain identifiable and traceable throughout its lifecycle.",
          },
          {
            type: "p",
            text: "Auggit Automation Suite brings this continuity to the process. By connecting vendor onboarding, gate and material movement, weighment, goods receipt, supplier invoicing, matching, exceptions and approvals with SAP, it transforms one purchase from a collection of handoffs into one visible, controlled and audit-ready journey.",
          },
        ],
      },
    ],
  },
  {
    slug: "sap-s4hana-migration-selective-data-transition",
    title: "SAP S/4HANA Migration Using Selective Data Transition (SDT): What Businesses Need to Know",
    category: "SLaiCE",
    summary:
      "SDT changes the migration discussion from \"How do we move our ECC system?\" to \"What should our S/4HANA system contain?\" Here is what buyers need to know.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Why are companies considering SDT for S/4HANA migration?",
        blocks: [
          {
            type: "p",
            text: "ECC may contain years of transactions, inactive company codes and obsolete master data. Moving everything increases migration complexity and testing effort. The ability to retain relevant historical data while removing obsolete data is one of the benefits of SDT.",
          },
          {
            type: "p",
            text: "For buyers, SDT changes the migration discussion from \"How do we move our ECC system?\" to \"What should our S/4HANA system contain?\"",
          },
        ],
      },
      {
        heading: "Brownfield vs. Greenfield vs. SDT: Which approach is right?",
        blocks: [
          {
            type: "table",
            headers: ["Approach", "Definition"],
            rows: [
              ["Brownfield", "Organizations retain their existing system, data and processes while adapting them for S/4HANA"],
              ["Greenfield / New Implementation", "Organizations redesign processes and build a new S/4HANA environment"],
              ["Selective Data Transition", "Organizations retain valuable historical data while selectively transforming the landscape"],
            ],
          },
        ],
      },
      {
        heading: "How much historical data should be migrated?",
        blocks: [
          { type: "p", text: "This is one of the most important decisions in an SDT project. A company can choose:" },
          {
            type: "list",
            items: [
              "Specific company codes",
              "Specific fiscal years",
              "Open transactions",
              "Selected historical transactions",
              "Data required for reporting, audit or statutory purposes",
            ],
          },
          {
            type: "p",
            text: "SLaiCE provides the flexibility to select data based on time slices, organizational units or a combination of both. Ex: migrating two years of data for selected company codes.",
          },
        ],
      },
      {
        heading: "What does an SDT migration involve?",
        blocks: [
          {
            type: "p",
            text: "A successful SDT project is more than extracting selected tables and loading them into S/4HANA.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Assess the ECC landscape: Identify data, company codes and dependencies",
              "Define the migration scope: Determine what should move and what should remain in the legacy environment",
              "Prepare the target S/4HANA environment: Identify approaches such as Shell Conversion (a copy of the existing system is converted without master and transaction data) and Mix & Match (a new S/4HANA installation is combined with selected existing configuration and developments)",
              "Define selection and transformation rules: The migration needs rules governing which data moves, how it is transformed and how relationships between business objects are preserved",
              "Execute migration cycles and reconcile: Migration should be followed by validation, data reconciliation and testing",
              "Plan cutover: During the actual migration phase, changes must not be made to source or target data",
            ],
          },
        ],
      },
      {
        heading: "Team SLaiCE will help you navigate the considerations of SDT",
        blocks: [
          { type: "p", text: "Talk to us or send us a DM to understand the flexibility SDT provides:" },
          {
            type: "list",
            items: [
              "Selecting the right data scope",
              "Retaining relationships between business objects",
              "Relevant historical data",
              "Accurate transformation rules",
              "Data reconciliation",
              "Understanding custom developments",
              "Adequate testing",
            ],
          },
          {
            type: "p",
            text: "The objective is not \"less data\" but \"right data with the right relationships in the right context.\"",
          },
        ],
      },
      {
        heading: "What should buyers ask before selecting an SDT solution?",
        blocks: [
          { type: "p", text: "Before selecting a migration tool or partner, ask:" },
          {
            type: "list",
            ordered: true,
            items: [
              "Can data be selected by company code, org unit or time period?",
              "Can historical as well as open transaction data be migrated?",
              "Will relationships between business objects be preserved?",
              "How are transformation rules defined and validated?",
              "How is migrated data reconciled with ECC?",
              "How are migration evidence and audit requirements addressed?",
              "Can the solution support multiple migration cycles and testing?",
            ],
          },
          {
            type: "p",
            text: "These questions are often more important than simply asking how quickly data can be moved.",
          },
        ],
      },
      {
        heading: "The Conclusion",
        blocks: [
          {
            type: "p",
            text: "Selective Data Transition is not a compromise between brownfield and greenfield. It is a way to make SAP ECC to SAP S/4HANA migration purposeful. Preserve what the business needs, transform what needs to change and avoid unnecessary legacy data in the new environment.",
          },
          {
            type: "p",
            text: "For organizations with complex ECC landscapes, multiple company codes, historical data requirements or a need to selectively transform their SAP environment, SDT can provide flexibility that a conventional migration approach cannot. The key is to make data selection, transformation, reconciliation and business continuity a part of the migration strategy from the beginning.",
          },
          {
            type: "p",
            text: "For organizations evaluating technology to support this migration, SLaiCE is best positioned as the selective SAP data transition tool. SLaiCE is SAP approved and listed on the SAP Store.",
          },
        ],
      },
    ],
  },
  {
    slug: "india-company-mandate-companies-act-income-tax-act",
    title: "India Company Mandate: What Multinational Corporations Need to Know About the Companies Act, 2013 and the Income Tax Act, 2025",
    category: "SLaiCE",
    summary:
      "For companies whose SAP books are hosted outside India, downloading a copy of the data to an Indian server is not enough. Here is what Section 128 and the Income Tax Act, 2025 require.",
    readTime: "6 min read",
    sections: [
      {
        blocks: [
          {
            type: "p",
            text: "For a company using SAP and its books of account and financial records hosted outside India, downloading a copy of the data to an Indian server is not enough. The compliance requirement is broader. Electronic records need to remain accessible in India, audit trails must be maintained and backups must be stored on servers physically located in India.",
          },
          {
            type: "p",
            text: "This is the India Company Mandate and it is a requirement governed by Section 128 of the Companies Act, 2013 and the electronic record requirement under the Income Tax Act, 2025 and Income Tax Rules, 2026.",
          },
        ],
      },
      {
        heading: "What does Section 128 of the Companies Act require?",
        blocks: [
          {
            type: "p",
            text: "Section 128 of the Companies Act, 2013 requires companies to maintain books of account that provide a true and fair view of the company's affairs.",
          },
          {
            type: "p",
            text: "For electronic records, Rule 3 of the Companies (Accounts) Rules, 2014 adds important requirements. Electronic books and relevant records must remain accessible in India at all times. Companies using accounting software must also use software capable of recording an audit trail of transactions and changes, including the date of changes, with the audit trail not being capable of being disabled.",
          },
          {
            type: "p",
            text: "The rules also require electronic records to be retained in their original format, remain complete and unaltered and have an appropriate system for storage and retrieval. Daily backups must be maintained on servers physically located in India.",
          },
        ],
      },
      {
        heading: "Does keeping a PDF or Excel export in India meet the requirement?",
        blocks: [
          {
            type: "p",
            text: "No. A periodic export of SAP data into Excel or PDF may create a copy but it does not reproduce the electronic books and audit trail in the required form.",
          },
        ],
      },
      {
        heading: "What changed with the Income Tax Act, 2025?",
        blocks: [
          {
            type: "p",
            text: "The Income Tax Act, 2025 replaced the Income Tax Act, 1961 from 1 April 2026. Section 62 addresses the maintenance of books of account and documents required to enable the Assessing Officer to compute taxable income.",
          },
          {
            type: "p",
            text: "More importantly, for businesses maintaining electronic books, Rule 46(8) of the Income Tax Rules, 2026 requires specified electronic books and documents to remain accessible in India at all times and their backup to be maintained daily on servers physically located in India.",
          },
          {
            type: "p",
            text: "This is an important consideration for multinational organizations whose Indian entities use global SAP environments. The primary SAP system may remain outside India, but the Indian company's data needs to meet India based accessibility and backup requirements.",
          },
        ],
      },
      {
        heading: "Why are SAP systems distinct?",
        blocks: [
          { type: "p", text: "A global SAP system may contain data from multiple:" },
          {
            type: "list",
            items: ["Company codes", "Countries", "Ledgers", "Business units", "Custom tables", "Master data relationships"],
          },
          {
            type: "p",
            text: "Copying selected files to India can create a significant gap between having data and having a usable representation of the company's books and records.",
          },
          {
            type: "p",
            text: "A transaction may be posted and subsequently corrected weeks or months later. Capturing the original transaction without appropriately preserving the subsequent correction and audit history can undermine the completeness of the record.",
          },
        ],
      },
      {
        heading: "Can SAP DART address the India Company Mandate?",
        blocks: [
          {
            type: "p",
            text: "SAP DART is relevant for tax related data extraction and archiving requirements, but organizations should assess if it addresses all the requirements of India data residency and daily backup, especially, when moving from ECC to S/4HANA.",
          },
        ],
      },
      {
        heading: "What about an in-house solution?",
        blocks: [
          {
            type: "p",
            text: "An organization can build its own solution to replicate or extract SAP data to India, however, the cost involves:",
          },
          {
            type: "list",
            items: [
              "SAP development and Basis resources",
              "Infrastructure setup in India",
              "Monitoring and support",
              "Audit trail preservation",
              "Reconciliation",
              "Data privacy controls",
            ],
          },
        ],
      },
      {
        heading: "Does SLaiCE require data to leave the Company's SAP system?",
        blocks: [
          {
            type: "p",
            text: "No. SLaiCE operates within the SAP landscape and the data does not leave the customer's network.",
          },
          {
            type: "p",
            text: "SLaiCE operates on top of SAP SLT, which is designed to replicate data between SAP systems. This helps replicate the required SAP data into the India based environment while maintaining the relevant audit and database logs.",
          },
        ],
      },
      {
        heading: "What should SAP buyers ask before choosing a solution?",
        blocks: [
          { type: "p", text: "Before implementing an India Company Mandate solution, ask:" },
          {
            type: "list",
            ordered: true,
            items: [
              "Is the data accessible in India at all times?",
              "Are daily backups stored on servers physically located in India?",
              "Are audit trails and change logs preserved?",
              "Can the records be reproduced in the required form (not Excel or PDF)?",
              "Can the solution handle custom tables and SAP add-ons?",
              "Will it continue to work after SAP ECC to SAP S/4HANA migration?",
              "How are network or infrastructure failures handled?",
              "Can the data for a specific period be recovered when required?",
              "Can auditors obtain the evidence they need?",
            ],
          },
          {
            type: "p",
            text: "These questions move the discussion from \"Where is our backup?\" to the more important question: \"Can we demonstrate compliance?\"",
          },
        ],
      },
      {
        heading: "The Conclusion",
        blocks: [
          {
            type: "p",
            text: "For Indian companies using SAP, India data residency is an auditability and recoverability question. Section 128 of the Companies Act, 2013 establishes the foundation for maintaining company books and records, while the electronic record requirements under the Companies (Accounts) Rules include accessibility in India, audit trails and daily backup within India. The Income Tax Act, 2025 and Rule 46(8) add an important compliance dimension for electronic books.",
          },
          {
            type: "p",
            text: "For organizations operating global SAP landscapes, SLaiCE provides an approach to keeping the required Indian company data within an SAP environment based in India while maintaining auditability. It is designed to work across SAP ECC, SAP S/4HANA on-premise and SAP S/4HANA Private Cloud. SLaiCE is SAP approved and listed on the SAP Store.",
          },
        ],
      },
    ],
  },
];
