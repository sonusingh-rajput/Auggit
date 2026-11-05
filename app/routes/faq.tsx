import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiDatabase, FiBox, FiCpu } from "react-icons/fi";
import { SiSap } from "react-icons/si";

// ========== SLaiCE COMPANY MANDATE FAQ DATA ==========
const companyMandateFaqs = [
  {
    "id": "01",
    "question": "How does SLaiCE help meet the Company Mandate for daily backups?",
    "answer": "SLaiCE is an SAP approved solution, available directly on the SAP Store, that operates entirely within your SAP landscape to move Indian company data to servers located in India. This satisfies the daily backup requirement without moving data outside your existing SAP environment or building anything custom."
  },
  {
    "id": "02",
    "question": "We already download our data to servers in India, do we still need SLaiCE?",
    "answer": "Downloading data as XLS, PDF, or another file type does not meet the requirement. The MCA 4th Mandate requires data to be available in the same form it was entered, with audit logs included. SLaiCE meets this by moving data in its original SAP format, with logs intact."
  },
  {
    "id": "03",
    "question": "We have not been audited or received a non-compliance notice, does this still apply to us?",
    "answer": "Yes, it still applies. Based on our experience working with officials, audits and notices are typically issued from the third year onward, and we expect organizations to start receiving intimations around September/October. Waiting until you receive a notice means you are already behind on compliance."
  },
  {
    "id": "04",
    "question": "We already use SAP DART to meet this mandate, do we still need SLaiCE?",
    "answer": "You will need SLaiCE once you migrate to SAP S/4HANA. SAP DART meets this requirement while you are on SAP ECC, but it is not available after you move to SAP S/4HANA. SLaiCE covers the same requirement across both ECC and S/4HANA, so compliance continues through and after migration."
  },
  {
    "id": "05",
    "question": "We have an in-house team and a custom-built tool for this, is that enough?",
    "answer": "It usually is not enough. In-house tools tend to miss correction entries and add load to your production system. They also need rework after an SAP S/4HANA migration and can create GDPR exposure for EU based organizations. SLaiCE avoids these issues and masks or scrambles data in transit."
  },
  {
    "id": "06",
    "question": "Can an in-house team just handle backups, audit logs, and data privacy compliance manually?",
    "answer": "It is possible, but it carries real tradeoffs. You need to account for team size, cost, and the risk of giving a small team direct access to financial data. Auditors also reject formats like PDF or Excel, since the mandate requires the original system format. SLaiCE runs in the background and avoids these tradeoffs entirely."
  },
  {
    "id": "07",
    "question": "How does SLaiCE operate, and will it add load to our production servers?",
    "answer": "SLaiCE will not meaningfully load your production servers. It is SAP approved, built entirely on SAP tools, and keeps your data inside your own network at all times. SLaiCE sits on top of SAP's SLT server, which is purpose built to extract data without affecting production performance."
  },
  {
    "id": "08",
    "question": "We have our own coding standards for custom objects, will SLaiCE meet them?",
    "answer": "Yes. SLaiCE is approved for SAP ECC, SAP S/4HANA on-premises, and SAP S/4HANA private cloud. Our team works directly with your technical team so SLaiCE passes your SAP ATC checks. The core patented logic itself cannot be altered, but we will work through any limitations with your team."
  },
  {
    "id": "09",
    "question": "Do we need to buy a separate SAP SLT license or extra infrastructure to run SLaiCE?",
    "answer": "No separate license is needed. SAP SLT is a free runtime license provided by SAP, and it can be installed standalone or on either the source or target system, so no additional hardware is required. We recommend installing it on the target system and review the full options with you during discovery."
  },
  {
    "id": "10",
    "question": "Do we need to pay for additional SAP licenses for a system based in India?",
    "answer": "It depends on your SAP version. On SAP ECC, no additional license is needed since it runs as a non-productive instance. On SAP S/4HANA RISE, it depends on your existing SAP contract, though some customers use a read-only system in an Indian SAP data center as a disaster recovery target instead."
  },
  {
    "id": "11",
    "question": "How would SLaiCE help us recover the India-hosted system if requested by the Ministry of Corporate Affairs or the Income Tax Department?",
    "answer": "Daily backups are stored in a secured location, with an automated email alert sent on successful completion, capturing the backup start time, completion time, and status. Audit logs, audit trails, and database redo logs are included in every backup, and our technical team can walk through restoring to a specific date."
  },
  {
    "id": "12",
    "question": "We are migrating from SAP ECC to SAP S/4HANA next year, do we need a new SLaiCE license?",
    "answer": "No, the same license carries forward. SLaiCE is built to work across SAP ECC, SAP S/4HANA on-premises, and SAP S/4HANA RISE private cloud. It also supports SAP's Selective Data Transition approach for both Brownfield and Bluefield migrations, so nothing needs to be repurchased when you move."
  },
  {
    "id": "13",
    "question": "We will be on SAP ECC for a few more years before migrating, will SLaiCE still work?",
    "answer": "Yes, SLaiCE is built for both SAP ECC and SAP S/4HANA from the start. When you do migrate, SLaiCE can support the move through SAP's Selective Data Transition approach, and you will not need to buy a new license, though resource costs for that work would be discussed separately."
  },
  {
    "id": "14",
    "question": "We have many custom tables and India-specific add-ons, how does SLaiCE handle these?",
    "answer": "SLaiCE operates at the table level and is built directly on SAP tools, so custom tables and add-ons are fully supported. During initial setup, we review and sign off on all custom tables and add-ons with your team before anything moves into production."
  },
  {
    "id": "15",
    "question": "If we also use SLaiCE for test system setup, will that interfere with the compliance mandate use case?",
    "answer": "No, the two use cases run independently. SLaiCE uses a separate profile for each purpose, so a test system setup, whether it uses only master data, a specific date range, or region specific data, does not interfere with the compliance backup process running in parallel."
  },
  {
    "id": "16",
    "question": "What type of control and data validation reports do you provide?",
    "answer": "We provide standard control and validation reports, including record counts between the source and target systems, as a baseline for every setup. If your auditors require additional or more specific reports, we work directly with them to build those as well."
  },
  {
    "id": "17",
    "question": "What is the support structure, and how is it provided?",
    "answer": "SLaiCE for company mandate use runs on an annual maintenance subscription. SAP releases updates quarterly, and you choose when to implement them. If an update ever affects SLaiCE, we get advance notice from SAP and release a fix, the same way any other SAP approved add-on would be maintained."
  },
  {
    "id": "18",
    "question": "What kind of monitoring and alerting is provided?",
    "answer": "SLaiCE is built using SAP tools and runs on SAP SLT, so standard SAP alerting and monitoring capabilities apply directly to it. There is no separate monitoring system to learn or maintain outside of what your SAP team already uses."
  },
  {
    "id": "19",
    "question": "What happens if the source and target systems fall out of sync due to an infrastructure or network failure? Do we have to restart from the beginning?",
    "answer": "Usually not. Depending on the type of failure, SLaiCE resumes from where it stopped rather than restarting from scratch, similar to resuming an interrupted download. This is possible because of how SLaiCE is built directly on top of SAP SLT."
  },
  {
    "id": "20",
    "question": "Would you manage the full infrastructure until we move to SAP S/4HANA?",
    "answer": "We can, through a small set of mid-tier infrastructure providers we already work with. This can be included in our scope as a managed service, or we can connect you directly with them, and they offer special pricing for SLaiCE customers either way."
  },
  {
    "id": "21",
    "question": "Our Indian subsidiary runs its own SAP S/4HANA Public Cloud (GROW), do we still need SLaiCE for daily backup compliance?",
    "answer": "No, as long as your SAP S/4HANA Public Cloud instance is hosted in an India data center, though early adopters should confirm this directly with SAP. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default."
  },
  {
    "id": "22",
    "question": "Our Indian subsidiary runs its own SAP S/4HANA Private Cloud (RISE), do we still need SLaiCE for daily backup compliance?",
    "answer": "No, as long as your SAP S/4HANA Private Cloud instance is hosted in an India data center, though early adopters should confirm this directly with SAP. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default."
  },
  {
    "id": "23",
    "question": "Our Indian subsidiary runs SAP S/4HANA on-premises or SAP ECC hosted in India, do we still need SLaiCE for daily backup compliance?",
    "answer": "No, you do not need SLaiCE in this case. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default, and our team can help set these up so your organization meets its regulatory and statutory requirements."
  }
];

// ========== SLaiCE SAP S/4HANA MIGRATION FAQ DATA ==========
const sapHanaMigrationFaqs = [
  {
    "id": "01",
    "question": "How does SLaiCE help with SAP S/4HANA Private Cloud migration?",
    "answer": "SLaiCE is an SAP approved solution, available on the SAP Store, that uses its patented feature to migrate only the data you actually want to move to S/4HANA, such as a specific time period. This reduces typical migration timelines from 16 to 18 months down to 6 to 8 months."
  },
  {
    "id": "02",
    "question": "What approach does SLaiCE recommend for S/4HANA migration?",
    "answer": "SLaiCE follows SAP's Selective Data Transfer (SDT) approach, moving only selected historical data while you adopt new SAP S/4HANA business processes. Because SLaiCE controls exactly what gets replicated, only the data you actually need moves across, cutting migration timelines from 16 to 18 months down to 6 to 8 months."
  },
  {
    "id": "03",
    "question": "How does SLaiCE manage the SDT migration approach in practice?",
    "answer": "SLaiCE continuously replicates data from your live SAP ECC production system to an intermediate shell system. On an agreed date, replication stops and that shell system is upgraded to S/4HANA using SAP's own migration tools. If the schedule changes due to an unexpected business event, it can be replanned without restarting."
  },
  {
    "id": "04",
    "question": "We have multiple companies and other org elements that need to migrate to S/4HANA, can SLaiCE handle this?",
    "answer": "Yes, SLaiCE lets you apply filters across multiple fields and SAP applications at once. It also identifies parent-child relationships between tables, so business and document consistency is preserved as data replicates across systems, all without moving any data outside your SAP landscape."
  },
  {
    "id": "05",
    "question": "How does SLaiCE operate, and will it load our production servers?",
    "answer": "SLaiCE will not meaningfully load your production servers. It is SAP approved, built entirely on SAP tools, and keeps data inside your own network at all times. SLaiCE sits on top of SAP's SLT server, which extracts data from ECC or S/4HANA without affecting production performance."
  },
  {
    "id": "06",
    "question": "Do we need to buy a separate SAP SLT license or extra infrastructure to run SLaiCE?",
    "answer": "No separate license is needed. SAP SLT is a free runtime license from SAP that can be installed standalone or on either the source or target system, so no additional hardware is required. We recommend installing it on the target system and review the full options during discovery."
  },
  {
    "id": "07",
    "question": "We want to keep our legacy data in a read-only SAP ECC system for legal and audit purposes, can SLaiCE help?",
    "answer": "Yes. Since SLaiCE is already installed for your migration, it can also build a lean, read-only SAP ECC system for that purpose. You can also use SLaiCE to create an SAP S/4HANA Dev or Quality environment loaded with selective test data, useful for custom code migration and user training."
  },
  {
    "id": "08",
    "question": "We have many custom tables and SAP approved add-ons, how does SLaiCE handle these?",
    "answer": "SLaiCE operates at the table level and is built directly on SAP tools, so custom tables and add-ons are fully supported. During initial setup, we review and sign off on all of these with your team before anything moves into production."
  },
  {
    "id": "09",
    "question": "If we also use SLaiCE for test system setup, will that interfere with the migration project?",
    "answer": "No, the two use cases run independently. SLaiCE uses a separate profile for each purpose, so a test system setup, whether it uses only master data, a specific date range, or region specific data, runs without interfering with the migration workstream in progress."
  },
  {
    "id": "10",
    "question": "What type of control and data validation reports do you provide?",
    "answer": "We provide standard control and validation reports, including record counts between the source and target systems, as a baseline for every setup. If your auditors require additional or more specific reports, we work directly with them to build those as well."
  },
  {
    "id": "11",
    "question": "What is the support structure during an SAP S/4HANA migration project?",
    "answer": "Our SLaiCE team works directly with your SAP team throughout the Selective Data Transition migration approach. Once migration is complete, SLaiCE is removed from your landscape, unless you identify another ongoing use case for it, such as test system refreshes or legacy data access."
  },
  {
    "id": "12",
    "question": "What kind of monitoring and alerting is provided?",
    "answer": "SLaiCE is built using SAP tools and runs on SAP SLT, so standard SAP alerting and monitoring capabilities apply directly to it. There is no separate monitoring system to learn or maintain outside of what your SAP team already uses."
  },
  {
    "id": "13",
    "question": "What happens if the source and target systems fall out of sync due to an infrastructure or network failure?",
    "answer": "Usually nothing drastic. Depending on the type of failure, SLaiCE resumes from where it stopped rather than restarting from scratch, similar to resuming an interrupted download. This is possible because of how SLaiCE is built directly on top of SAP SLT."
  }
];

// ========== eDMS FAQ DATA ==========
const edmsFaqData = [
  {
    id: "01",
    question: "What is Auggit eDMS?",
    answer:
      "Auggit eDMS is a platform for managing organizational documents with structure and control. It helps teams store, classify, review and access documents reliably on one common platform.",
  },
  {
    id: "02",
    question: "Where is the data stored?",
    answer:
      "Auggit eDMS is hosted on AWS cloud infrastructure, providing enterprise-grade security, reliability and availability. All documents and data stored in the platform are encrypted both in transit and at rest.",
  },
  {
    id: "03",
    question: "Who owns the data stored in Auggit eDMS?",
    answer:
      "All documents and data stored within Auggit eDMS remain the property of the customer organization. Auggit eDMS only provides the platform infrastructure for storing and managing these records.",
  },
  {
    id: "04",
    question: "Can Auggit eDMS support multi-entity or multi-department organizations?",
    answer:
      "Yes. Auggit eDMS is designed to support organizations operating across multiple entities, departments or business units, while maintaining controlled access and structured documentation across the organization.",
  },
  {
    id: "05",
    question: "Can Auggit eDMS integrate with other enterprise systems?",
    answer:
      "Yes. Auggit eDMS supports integration with enterprise systems such as ERP platforms, accounting software and other business applications through APIs and configurable integration layers.",
  },
  {
    id: "06",
    question: "How scalable is the platform?",
    answer:
      "Auggit eDMS is designed to support organizations of different sizes and can scale as document volumes and users increase. The platform architecture allows businesses to expand usage without restructuring their document systems.",
  },
  {
    id: "07",
    question: "How long does it typically take to implement Auggit eDMS?",
    answer:
      "For standard deployments, the platform can typically be activated within a few business days, depending on the organization's structure and integration requirements.",
  },
  {
    id: "08",
    question: "Can the platform be customised for specific business processes?",
    answer:
      "Yes. Auggit eDMS provides configurable workflows, tagging structures and integration options that allow organizations to align the platform with their internal processes and documentation requirements.",
  },
  {
    id: "09",
    question: "How does Auggit eDMS ensure data reliability and backup?",
    answer:
      "Auggit eDMS performs regular backups of client data to ensure business continuity and prevent data loss in case of unexpected events.",
  },
  {
    id: "10",
    question: "What kind of support is available after implementation?",
    answer:
      "Auggit eDMS provides ongoing technical support after deployment. Users can raise support tickets directly through the platform or contact the support team for assistance.",
  },
  {
    id: "11",
    question: "Does Auggit eDMS support access controls for different user roles?",
    answer:
      "Yes. The platform uses role-based access control to ensure that users can only access documents relevant to their responsibilities.",
  },
  {
    id: "12",
    question: "Can Auggit eDMS support organizations operating in regulated environments?",
    answer:
      "Yes. Auggit eDMS is designed to help organizations maintain structured documentation and operational records, supporting compliance, audit processes and regulatory requirements.",
  },
];

// ========== AUTOMATION SUITE FAQ DATA ==========

const vendorOnboardingFaqs = [
  {
    id: "01",
    question: "What is Auggit Vendor Onboarding?",
    answer: "Auggit Vendor Onboarding automates the collection, verification, and processing of vendor registration information and supporting documents. It helps procurement and finance teams manage onboarding through a structured workflow instead of relying entirely on emails, spreadsheets, and manual checks, and it supports more consistent vendor master data."
  },
  {
    id: "02",
    question: "Which vendor documents can Auggit Vendor Onboarding validate?",
    answer: "Auggit Vendor Onboarding can validate PAN, GST registration, TAN, MSME/Udyam documentation, bank details, and other required compliance documents. The documents validated depend on the vendor category and the business rules configured for your organization, so validation requirements can be set differently for each vendor category."
  },
  {
    id: "03",
    question: "How does Auggit simplify vendor registration?",
    answer: "Auggit simplifies vendor registration through a structured onboarding process. Vendors submit their required information and documents in one flow, and Auggit supports document extraction, completeness checks, validation, exception handling, and routing for internal approvals, so procurement teams no longer collect and verify these details manually through emails and spreadsheets."
  },
  {
    id: "04",
    question: "Can Auggit identify duplicate vendor records?",
    answer: "Yes, Auggit identifies duplicate vendor records by comparing PAN, GSTIN, bank details, vendor names, and other configured identifiers. Fuzzy matching also flags records that look similar but are not exact matches, which helps teams catch possible duplicates before they enter the vendor master data."
  },
  {
    id: "05",
    question: "Can Auggit integrate vendor onboarding with SAP?",
    answer: "Yes, Auggit integrates vendor onboarding workflows with SAP, including scenarios that involve SAP Business Partner master-data creation. The integration method and the extent of automation depend on the customer's SAP environment and the implementation design, which are agreed with the Auggit team during implementation planning."
  },
  {
    id: "06",
    question: "Can Auggit automate vendor approvals?",
    answer: "Yes, Auggit can automate vendor approvals. Vendor records are routed through defined approval workflows based on business rules, vendor category, document completeness, or internal authorization requirements. Manual review can be retained for exceptions and sensitive decisions, so automation speeds up routine approvals without removing human control."
  },
  {
    id: "07",
    question: "How does Auggit reduce vendor onboarding errors?",
    answer: "Auggit reduces vendor onboarding errors through automated data capture, mandatory-field checks, document validation, duplicate detection, and standardized approval workflows. Together these controls remove avoidable manual entry mistakes and improve the consistency of vendor master data, because every vendor record passes the same checks before it is approved."
  },
  {
    id: "08",
    question: "Can Auggit manage vendor document updates and renewals?",
    answer: "Yes, Auggit can organize vendor documentation and support follow-up workflows for documents that need renewal or periodic review. This works once the relevant expiry dates, business rules, and notification requirements are configured, so teams are prompted to request updated documents from vendors when a renewal is due."
  }
];

const apAutomationFaqs = [
  {
    id: "01",
    question: "What is Auggit AP Process Automation?",
    answer: "Auggit AP Process Automation streamlines supplier invoice processing through AI-enabled data extraction, three-way matching of purchase order, goods receipt note, and invoice, discrepancy identification, and automated approval workflows. It reduces manual effort, improves accuracy and compliance, and supports invoice posting to SAP or other ERP systems based on the configured integration."
  },
  {
    id: "02",
    question: "Can AUGGIT automatically extract data from supplier invoices?",
    answer: "Yes. AUGGIT can use OCR and intelligent document extraction techniques to capture relevant invoice information, such as supplier details, invoice number, invoice date, tax information, purchase order reference, and invoice amount. Extraction quality depends on document structure, readability, and the configured processing method."
  },
  {
    id: "03",
    question: "Can Auggit match invoices with purchase orders and goods receipts?",
    answer: "Yes, Auggit matches supplier invoices against purchase orders, goods receipt notes, and other supporting documents. This identifies discrepancies in quantities, amounts, references, or missing documentation before the invoice moves further through the configured workflow, so errors are caught early and the finance team spends its time on exceptions."
  },
  {
    id: "04",
    question: "What is three-way matching in invoice automation?",
    answer: "Three-way matching in invoice automation compares three key records: the purchase order, the goods receipt, and the supplier invoice. Auggit automates this comparison and flags discrepancies, such as differing quantities or amounts, for review before the invoice is processed further, so only invoices that agree across all three records proceed."
  },
  {
    id: "05",
    question: "Can AUGGIT process invoices in SAP?",
    answer: "AUGGIT can support invoice-processing workflows integrated with SAP. Depending on the implementation, these may involve relevant procurement and invoice verification processes, including MIGO-related goods movement records and MIRO-related invoice verification. The exact posting and validation scope depends on the integration design and authorization rules."
  },
  {
    id: "06",
    question: "Can Auggit identify missing supporting documents for an invoice?",
    answer: "Yes, Auggit checks whether the required supporting documents are available and linked to an invoice or transaction. Depending on the configured rules, it flags missing purchase orders, goods receipt records, quality certificates, or other required documents, so the team can follow up before the invoice moves forward."
  },
  {
    id: "07",
    question: "Can Auggit automate invoice approvals and payment workflows?",
    answer: "Auggit automates invoice approval routing based on configured business rules, approval hierarchies, and exception conditions, and it supports integration with downstream finance processes. Actual payment execution remains subject to the organization's own controls, approvals, and connected financial systems, so payment authority stays with the organization."
  },
  {
    id: "08",
    question: "What happens when a supplier invoice has incorrect or missing information in Auggit?",
    answer: "When a supplier invoice has incorrect or missing information, Auggit flags the discrepancy, incomplete data, or failed document match as an exception for the relevant team to review. This prevents the record from progressing automatically when it does not meet the configured validation criteria."
  },
  {
    id: "09",
    question: "Can Auggit support debit notes and quality certificates?",
    answer: "Yes, Auggit supports debit notes and quality certificates within its transaction-linking and verification workflows. Where applicable, they are tagged against the supplier, purchase order, invoice, or goods receipt record, which improves traceability and lets teams see every document connected to a procurement transaction."
  }
];

const gatePassFaqs = [
  {
    id: "01",
    question: "What is Auggit Gate Pass Management?",
    answer: "Auggit Gate Pass Management digitizes and streamlines the recording, approval, and tracking of materials entering or leaving an organization's premises. It gives security, stores, and operations teams better visibility over material movements and reduces the organization's dependence on paper-based processes for gate passes."
  },
  {
    id: "02",
    question: "Does Auggit Gate Pass Management support returnable and non-returnable gate passes?",
    answer: "Yes, Auggit Gate Pass Management supports both returnable and non-returnable gate passes. Returnable passes track materials that are expected to come back, while non-returnable passes record material movements where no return is expected, so each type of outward movement follows the workflow that suits it."
  },
  {
    id: "03",
    question: "Can Auggit track materials sent outside the factory?",
    answer: "Yes, Auggit records material details, movement references, approvals, and expected return information as applicable. This helps organizations track materials sent outside the factory for repairs, testing, subcontracting, samples, or other authorized external activities, with a clear record of what left, who approved it, and when it is expected back."
  },
  {
    id: "04",
    question: "Can Auggit Gate Pass Management integrate with SAP?",
    answer: "Yes, Auggit Gate Pass Management already integrates with SAP to exchange relevant gate pass and material movement information, including suitable Materials Management and inventory-related workflows. The precise integration scope depends on the configured process and the customer's SAP environment, and it is defined with the Auggit team during implementation."
  },
  {
    id: "05",
    question: "Can Auggit automate gate pass approvals?",
    answer: "Yes, Auggit can automate gate pass approvals. Approval workflows are configured by material type, movement purpose, department, authorization level, or other business rules. This standardizes how approvals are handled, so each gate pass follows the same approval path, and it reduces dependence on paper-based processes."
  },
  {
    id: "06",
    question: "Can Auggit track overdue returnable materials?",
    answer: "Yes, Auggit tracks returnable materials against expected return dates and configured statuses. Notifications or follow-up workflows can be implemented so teams can identify overdue items quickly and chase their return, giving stores and operations teams a clear view of which materials that were sent out have not yet come back."
  },
  {
    id: "07",
    question: "Can Auggit manage samples and materials sent for testing or repairs?",
    answer: "Yes, Auggit manages samples and materials sent for testing or repairs through gate pass workflows. It records the material description, quantity, destination, purpose, responsible person, and expected return information as required, so each outward movement is documented and can be followed up until the material returns."
  }
];

const adeFaqs = [
  {
    id: "01",
    question: "What is Auggit ADE?",
    answer: "Auggit ADE, short for Automatic Data Entry, automates the transfer of relevant business information from documents into Tally. It reduces repetitive manual entry and helps accounting teams process supported transactions more efficiently, with the extent of automation depending on the transaction types and workflow configured during implementation."
  },
  {
    id: "02",
    question: "Can Auggit ADE automate accounting entries from documents?",
    answer: "Yes, Auggit ADE automates accounting entries from supported documents. Depending on the configured workflow, it extracts information from the document, validates the relevant fields, and transfers the data into Tally. The transaction types covered and the level of automation depend on the implementation."
  },
  {
    id: "03",
    question: "Which documents can Auggit ADE use for automated Tally entry?",
    answer: "Auggit ADE can use supplier invoices, bills, and other accounting-related records as source documents for automated Tally entry, depending on the supported workflow. Document formats, field mappings, and the required Tally transaction types are defined during implementation, so the setup matches how each organization records its transactions."
  },
  {
    id: "04",
    question: "Does Auggit ADE eliminate all manual accounting work?",
    answer: "No, Auggit ADE reduces repetitive data-entry work but does not eliminate every manual accounting activity. Exceptions, missing information, accounting decisions, and transactions that need additional authorization may still require human review, so accountants shift their time from typing entries to reviewing exceptions."
  },
  {
    id: "05",
    question: "How does Auggit ADE improve data accuracy?",
    answer: "Auggit ADE improves data accuracy through automated extraction, field mapping, validation, and configured checks, which reduce common typing and transcription errors. Appropriate verification and exception handling remain important for maintaining reliable accounting records, so Auggit ADE supports, rather than replaces, the accounting team's review."
  }
];

const dscFaqs = [
  {
    id: "01",
    question: "What are Auggit Digital Signature Services?",
    answer: "Auggit Digital Signature Services help organizations incorporate digital signing into suitable document workflows. They reduce the need for physical signatures and paper-based document circulation, so documents that require authorization can be signed and moved through approval without being printed, signed by hand, and passed between people."
  },
  {
    id: "02",
    question: "Can Auggit incorporate digital signatures into business document workflows?",
    answer: "Yes, Auggit incorporates digital signing into supported workflows for documents that require authorization or signing. The exact process depends on the document type, signer requirements, and the selected signature mechanism, which are agreed when the workflow is designed so that signing fits the way each organization approves its documents."
  },
  {
    id: "03",
    question: "Can digital signatures in Auggit reduce paper-based approvals?",
    answer: "Yes, digital signatures in Auggit reduce paper-based approvals where the relevant signing method is accepted. They cut down printing, physical circulation, and manual document handling, so approvals that previously moved on paper can be completed digitally within the document workflow instead of being passed from desk to desk."
  },
  {
    id: "04",
    question: "Are all digital signatures legally valid?",
    answer: "No, digital signatures are not automatically legally valid. Legal validity depends on the applicable jurisdiction, signature type, certificate or trust requirements, and document category. Organizations using Auggit Digital Signature Services should confirm that the selected signing method meets their legal and regulatory requirements before relying on it."
  }
];

const weighmentFaqs = [
  {
    id: "01",
    question: "What is Auggit Weighment Integration?",
    answer: "Auggit Weighment Integration connects compatible weighing-scale systems with relevant business applications to capture weight information electronically. It makes the captured weight data available for supported operational workflows, such as inward and outward material movements, without relying on manual entry into registers or business applications."
  },
  {
    id: "02",
    question: "Can Auggit integrate weighing scales with ERP systems?",
    answer: "Yes, Auggit integrates weighing scales with ERP or other business systems. Whether a specific scale can be integrated depends on equipment compatibility, connectivity, interface requirements, and the intended workflow, which are assessed during implementation so that weight readings reach the business application accurately."
  },
  {
    id: "03",
    question: "Can Auggit link weighing data to inward and outward material movements?",
    answer: "Yes, where configured, Auggit links weight information to the relevant material movement, vehicle, supplier, delivery, or transaction references. This ties each weighment to the movement it belongs to, which improves traceability across inward and outward material flows and makes it easier to reconcile what was received or dispatched."
  },
  {
    id: "04",
    question: "How does Auggit Weighment Integration reduce manual errors?",
    answer: "Auggit Weighment Integration reduces manual errors by capturing compatible scale readings electronically, so weight values no longer need to be re-entered into registers or business applications. Validation and exception handling can further improve data consistency, since exceptions can be flagged for review instead of being passed on unchecked."
  }
];

const ocrAndMatchingFaqs = [
  {
    id: "01",
    question: "What is OCR in business process automation?",
    answer: "OCR, or Optical Character Recognition, in business process automation converts text from scanned documents and images into machine-readable text. It automates information capture from invoices, purchase orders, vendor forms, compliance records, and other business documents, so teams no longer retype document details into business systems."
  },
  {
    id: "02",
    question: "What is intelligent document extraction, and how is it different from OCR?",
    answer: "OCR recognizes text in a document, while intelligent document extraction identifies and organizes relevant information into business fields. For example, OCR may recognize text on an invoice, while extraction identifies the invoice number, supplier name, tax amount, and total value."
  },
  {
    id: "03",
    question: "Can Auggit extract information from different document formats?",
    answer: "Yes, Auggit can process suitable document formats, including scanned images and PDFs, to extract information. Other formats can be supported depending on the specific workflow and integration requirements, which are confirmed during the discovery stage, so organizations should share their common document types early in the project."
  },
  {
    id: "04",
    question: "What is question mapping in document automation?",
    answer: "Question mapping associates defined business questions or data requirements with the relevant information in a document. For example, a workflow may need to identify a vendor's GST number, invoice date, purchase order number, or bank account details. Mapping helps structure the extracted answers for validation and subsequent processing."
  },
  {
    id: "05",
    question: "Can Auggit identify specific information from complex documents?",
    answer: "Yes, Auggit can identify selected fields and information from complex business documents, depending on the document type and the configured extraction capabilities. Validation rules and human review are used when information is missing, unclear, or inconsistent, so uncertain extractions are checked instead of being passed on as correct."
  },
  {
    id: "06",
    question: "How does document matching work in AUGGIT?",
    answer: "Document matching compares extracted document information with expected values or records from connected business systems. For example, an invoice's purchase order number and amount can be compared with the corresponding internal transaction. Matching rules help identify related records and flag discrepancies."
  },
  {
    id: "07",
    question: "Can Auggit automatically tag and categorize documents?",
    answer: "Yes, Auggit automatically classifies and tags documents using extracted information, document types, predefined rules, and relevant transaction references. This improves document search, retrieval, traceability, and workflow routing, because every tagged document is linked to its document type and the transaction it belongs to."
  },
  {
    id: "08",
    question: "What happens if Auggit cannot match a document automatically?",
    answer: "If Auggit cannot match a document automatically because required information is missing, inconsistent, or below the configured matching threshold, the document is routed for manual verification or exception handling. This avoids treating uncertain matches as confirmed and keeps unverified documents from moving forward in the workflow."
  },
  {
    id: "09",
    question: "Can Auggit match documents received through email with internal records?",
    answer: "Yes, where email ingestion is configured, Auggit processes documents received through email and matches the extracted information against internal business records. The precise workflow depends on the email source, document format, and integration setup, which are defined during implementation to suit each organization's mailbox and document types."
  },
  {
    id: "10",
    question: "Can Auggit process scanned documents and PDFs?",
    answer: "Yes, Auggit processes suitable scanned documents and PDF files through its digitization and extraction workflows. The quality of the source documents influences the results, so clear, legible scans and well-structured PDFs produce more reliable extraction than faded or low-resolution copies, which may need manual verification."
  },
  {
    id: "11",
    question: "Can Auggit link digitized documents to eDMS?",
    answer: "Yes, digitized documents can be organized and linked to relevant records through Auggit eDMS document management workflows, depending on the implemented solution. This makes digitized documents easier to retrieve and manage, because each scanned or extracted document is stored with the transaction or record it supports."
  },
  {
    id: "12",
    question: "Can Auggit digitize large volumes of business documents?",
    answer: "Auggit can support document digitization projects that involve large volumes of business records, such as invoices, vendor documents, procurement files, and other operational records. Processing capacity, delivery timelines, and indexing requirements should be agreed upon for each project, so organizations can plan the scale of digitization before work begins."
  }
];

const erpIntegrationFaqs = [
  {
    id: "01",
    question: "Which enterprise systems can Auggit integrate with?",
    answer: "Auggit integrates with enterprise systems including SAP, Oracle, Zoho, and Tally. Other applications can be considered based on their interfaces, APIs, data formats, and business requirements, so organizations using a different ERP or business application can ask Auggit to assess integration feasibility during an initial discovery discussion."
  },
  {
    id: "02",
    question: "Does Auggit require changes to our existing ERP?",
    answer: "Auggit is designed to work alongside existing enterprise systems, so it does not replace your ERP. The extent of configuration or technical changes needed depends on the required integration, the available interfaces, the business process, and security requirements, and it is confirmed during the technical assessment before implementation begins."
  },
  {
    id: "03",
    question: "Can Auggit automate workflows across multiple systems?",
    answer: "Yes, Auggit can automate workflows across multiple systems where the necessary integrations are available. For example, a document can be captured, validated, linked to a transaction, routed for approval, and passed to a connected ERP workflow, which connects document processing and business workflows across different systems without manual hand-offs."
  },
  {
    id: "04",
    question: "How long does Auggit implementation take?",
    answer: "The standard Auggit implementation timeline is 4-6 weeks. The exact timeline depends on the product selected, document volumes, process complexity, ERP integration requirements, validation rules, and approval workflows, and a defined schedule is established after the initial discovery and technical assessment."
  },
  {
    id: "05",
    question: "Can Auggit be customized for our organization's workflows?",
    answer: "Yes, Auggit can be configured for suitable business rules, document categories, field mappings, validations, approval hierarchies, and integration requirements. Any additional customization beyond configuration depends on the agreed implementation scope, which is defined with the organization before work starts so expectations on effort and timeline are clear."
  },
  {
    id: "06",
    question: "How does Auggit handle errors and exceptions?",
    answer: "Auggit workflows include validation checks, exception identification, and human review for cases that cannot be processed automatically. Records that fail the configured validation criteria do not progress automatically but are routed to the relevant team, which helps organizations maintain control over critical business transactions."
  },
  {
    id: "07",
    question: "Is Auggit suitable for organizations with multiple plants or locations?",
    answer: "Auggit can be evaluated for multi-location environments where processes, document requirements, and ERP workflows need to be coordinated across plants. The deployment design depends on the organization's structure, system landscape, and access requirements, and it is assessed during the initial discovery discussion before an implementation approach is proposed."
  },
  {
    id: "08",
    question: "How can we evaluate whether Auggit is suitable for our business?",
    answer: "The recommended way to evaluate whether Auggit suits your business is to identify a process with high manual effort, recurring errors, document-matching challenges, or limited visibility. An initial discovery discussion then establishes the scope, integration feasibility, expected benefits, and the suitable Auggit product for that process."
  }
];

const businessBenefitsFaqs = [
  {
    id: "01",
    question: "What are the main benefits of implementing Auggit?",
    answer: "Implementing Auggit helps organizations reduce repetitive manual work, improve document traceability, standardize business processes, strengthen data validation, and improve visibility into operational workflows. By improving efficiency and reducing process-related costs, Auggit can deliver a measurable return on investment, though actual benefits depend on the process selected and the implementation."
  },
  {
    id: "02",
    question: "How does Auggit help reduce operational costs?",
    answer: "Auggit reduces operational costs by automating repetitive activities such as data entry, document checks, transaction matching, and follow-ups, which cuts manual effort and rework. The financial impact can be assessed using an organization's existing processing volumes, employee effort, error rates, and cycle times before implementation begins."
  },
  {
    id: "03",
    question: "Can Auggit improve audit readiness?",
    answer: "Yes, Auggit improves audit readiness by maintaining organized documents, transaction references, and workflow records. The extent of audit support depends on the configured logging, access controls, retention rules, and the organization's compliance requirements, so audit needs should be defined during implementation to ensure the right records are captured."
  },
  {
    id: "04",
    question: "How does Auggit handle sensitive business documents?",
    answer: "Auggit handles sensitive business documents through access controls, permissions, data handling procedures, and retention requirements established according to the organization's policies and the selected deployment configuration. Specific security certifications and compliance commitments should be confirmed with Auggit before implementation, so organizations can verify that their security requirements are met."
  },
  {
    id: "05",
    question: "Is Auggit suitable for small and large enterprises?",
    answer: "Yes, organizations of different sizes can evaluate Auggit based on their transaction volumes, process complexity, system landscape, and automation needs. Product selection and implementation scope are aligned with each organization's requirements, so a smaller business can start with one process while a larger enterprise can plan a broader rollout."
  },
  {
    id: "06",
    question: "How is Auggit Automation Suite priced?",
    answer: "Auggit Automation Suite pricing depends on the product selected, business process scope, document or transaction volumes, integration requirements, customization, and implementation effort. Organizations can request a tailored proposal after an initial requirements discussion. The commercials have two parts: a one-time implementation cost and a monthly subscription cost."
  },
  {
    id: "07",
    question: "Does Auggit provide implementation and integration services?",
    answer: "Yes, Auggit provides implementation and integration services alongside its solutions. Depending on the agreed scope, these cover process assessment, configuration, document workflow design, integration planning, implementation, and deployment support, so organizations receive help with both choosing the right automation and putting it into everyday use."
  },
  {
    id: "08",
    question: "How can we get a demo of Auggit?",
    answer: "To get a demo of Auggit, contact the Auggit team at sales@auggit.com. The team discusses your current business processes, identifies suitable automation opportunities, and arranges a demonstration focused on your requirements, so the demo shows how Auggit would work for your own documents and workflows."
  }
];
// ========== AUTOMATION SUITE FAQ DATA ==========
export const automationSuiteFaqs = [
  {
    id: "01",
    question: "What is the AUGGIT Automation Suite?",
    answer:
      "AUGGIT Automation Suite is a collection of business process automation solutions designed to reduce manual work, digitize documents, automate data entry, and streamline operational workflows. It helps organizations connect documents, business processes, and enterprise systems to improve efficiency, accuracy, and visibility.",
  },
  {
    id: "02",
    question: "What business processes can AUGGIT automate?",
    answer:
      "AUGGIT can help automate document management, vendor onboarding, accounts payable (AP) Automation, supplier invoice processing, Goods Receipt Note ( MIRO/ MIGO), Material Movement, gate pass management, data entry automation into Tally, document digitization, digital signatures, and weighing-scale integration. The specific scope depends on the products and workflows implemented.",
  },
  {
    id: "03",
    question: "Which industries can benefit from Auggit Automation Suite?",
    answer:
      "Auggit Automation Suite benefits manufacturing, engineering, automotive, pharmaceuticals, FMCG, chemicals, and other document-intensive industries. Organizations that handle large volumes of invoices, purchase orders, compliance documents, vendor records, and material movements gain the most, because Auggit automates the manual document handling and checking those processes depend on.",
  },
  {
    id: "04",
    question: "Does Auggit replace our existing ERP system?",
    answer:
      "No, Auggit does not replace your existing ERP system. It complements the ERP by automating the processes around it, such as digitizing documents, validating information, and managing approvals. Auggit then transfers the relevant data to supported systems, including SAP, Oracle, Zoho, and Tally.",
  },
  {
    id: "05",
    question: "Can Auggit integrate with SAP, Oracle, Zoho, and Tally?",
    answer:
      "Yes, Auggit integrates with SAP, Oracle, Zoho, and Tally, and with many other ERP systems. Depending on the use case, the integration enables data exchange, automated data entry, document linking, and workflow automation. The exact scope depends on the ERP environment and the process being automated.",
  },
  {
    id: "06",
    question: "How does AUGGIT reduce manual work?",
    answer:
      "AUGGIT reduces repetitive activities such as entering invoice data, checking vendor documents, searching for missing records, matching documents, preparing gate passes, and transferring information between systems. Automation rules and approval of workflows help teams focus on exceptions and decisions rather than repetitive tasks.",
  },
  {
    id: "07",
    question: "Can Auggit automate our existing business processes?",
    answer:
      "Yes, Auggit can automate existing business processes. It is configured around your current workflows, document types, validation rules, and approval requirements, so teams keep familiar steps. The implementation scope is set by the current process, the integration requirements, and the automation objectives agreed at the start of the project.",
  },
  {
    id: "08",
    question: "Can organizations implement individual Auggit products or the complete suite?",
    answer:
      "Yes, organizations can implement individual Auggit products or the complete suite. A business can start with one solution for a specific requirement, or combine several products into a broader automation initiative. This lets teams address their highest-priority processes first and expand the automation over time.",
  },
];

// ========== REUSABLE FAQ ITEM COMPONENT ==========
interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  toggle: () => void;
  product: string;
}

const FaqItem = ({ item, isOpen, toggle, product }: FaqItemProps) => {
  const isSlaice = product === "slaice";
  const isAutomation = product === "automation";
  const accentColor = isSlaice
    ? "from-[#41a0c8] to-[#1267a7]"
    : isAutomation
      ? "from-[#1267a7] to-[#062039]"
      : "from-[#062039] to-[#1267a7]";

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${isOpen
        ? "bg-white/95 shadow-xl shadow-[#41a0c8]/10 border border-[#9eddf7]"
        : "bg-white/80 hover:bg-white shadow-md shadow-slate-200/50 border border-[#e3e3e3] hover:border-[#9eddf7]"
        }`}
      initial={false}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Accent bar indicator */}
      <motion.div
        className={`absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b ${accentColor}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-5 px-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="flex items-start gap-5 text-sm sm:text-base">
          <span className={`text-xl font-extrabold bg-gradient-to-r ${accentColor} bg-clip-text text-transparent min-w-[3rem]`}>
            {item.id}
          </span>
          <span className="font-semibold text-[#062039] group-hover:text-[#41a0c8] transition-colors pt-0.5">
            {item.question}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen
            ? `bg-gradient-to-r ${accentColor} text-white shadow-md shadow-[#41a0c8]/30`
            : "bg-slate-100 text-slate-500 group-hover:bg-[#9eddf7]/40 group-hover:text-[#41a0c8]"
            }`}
        >
          <FiChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-6 pr-6 sm:pl-[5.2rem] text-[#353535] text-sm leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ========== MAIN FAQ ALL COMPONENT ==========
type AutomationSubTab =
  | "vendor-onboarding"
  | "ap-invoice"
  | "gate-pass"
  | "data-entry"
  | "digital-signature"
  | "weighment"
  | "ocr-matching"
  | "erp-integration"
  | "business-benefits";

const automationTabsList = [
  { id: "vendor-onboarding", label: "Vendor Onboarding" },
  { id: "ap-invoice", label: "Accounts Payable (AP) and Supplier Invoice" },
  { id: "gate-pass", label: "Gate Pass Management" },
  { id: "data-entry", label: "Automatic Data Entry" },
  { id: "digital-signature", label: "Digital Signature Services" },
  { id: "weighment", label: "Weighment Integration" },
  { id: "ocr-matching", label: "OCR, Intelligent Document Matching and Question Mapping" },
  { id: "erp-integration", label: "ERP Integration and Implementation" },
  { id: "business-benefits", label: "Business Benefits, Security and Commercials" },
] as const;

export default function FaqAll() {
  const [activeTab, setActiveTab] = useState<"automation" | "edms" | "slaice">("automation");
  const [automationSubTab, setAutomationSubTab] = useState<AutomationSubTab>("vendor-onboarding");
  const [slaiceSubTab, setSlaiceSubTab] = useState<"mandate" | "migration">("mandate");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentData =
    activeTab === "automation"
      ? automationSubTab === "vendor-onboarding"
        ? vendorOnboardingFaqs
        : automationSubTab === "ap-invoice"
          ? apAutomationFaqs
          : automationSubTab === "gate-pass"
            ? gatePassFaqs
            : automationSubTab === "data-entry"
              ? adeFaqs
              : automationSubTab === "digital-signature"
                ? dscFaqs
                : automationSubTab === "weighment"
                  ? weighmentFaqs
                  : automationSubTab === "ocr-matching"
                    ? ocrAndMatchingFaqs
                    : automationSubTab === "erp-integration"
                      ? erpIntegrationFaqs
                      : businessBenefitsFaqs
      : activeTab === "edms"
        ? edmsFaqData
        : slaiceSubTab === "mandate"
          ? companyMandateFaqs
          : sapHanaMigrationFaqs;

  const productLabel =
    activeTab === "automation"
      ? automationTabsList.find((t) => t.id === automationSubTab)?.label ?? "Automation Suite"
      : activeTab === "edms"
        ? "eDMS"
        : slaiceSubTab === "mandate"
          ? "SLaiCE (Company Mandate)"
          : "SLaiCE (SAP S/4HANA Migration)";

  // Dynamic JSON-LD Schema for rich snippet indexing
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: currentData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 overflow-hidden">
      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Animated Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#9eddf7]/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#ffeda0]/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9eddf7]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm">
            <FiDatabase className="w-4 h-4 text-[#f7c037]" />
            Knowledge & Support
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#062039] tracking-tight">
            Frequently Asked <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mt-3 text-[#353535] text-sm sm:text-base max-w-2xl mx-auto">
            Explore detailed architectural and functional answers about our enterprise data and document solutions.
          </p>
        </div>

        {/* Primary Tabs (Automation Suite vs eDMS vs SLaiCE) */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex flex-wrap justify-center p-1.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e3e3e3] shadow-lg shadow-slate-200/50 gap-1">
            <button
              onClick={() => {
                setActiveTab("automation");
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === "automation"
                ? "bg-[#1267a7] text-white shadow-md shadow-[#1267a7]/30"
                : "text-[#353535] hover:text-[#062039] hover:bg-slate-100"
                }`}
            >
              <FiCpu className="w-4 h-4" />
              Automation Suite
            </button>
            <button
              onClick={() => {
                setActiveTab("edms");
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === "edms"
                ? "bg-[#062039] text-white shadow-md shadow-[#062039]/30"
                : "text-[#353535] hover:text-[#062039] hover:bg-slate-100"
                }`}
            >
              <FiBox className="w-4 h-4" />
              eDMS
            </button>
            <button
              onClick={() => {
                setActiveTab("slaice");
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === "slaice"
                ? "bg-[#41a0c8] text-white shadow-md shadow-[#41a0c8]/30"
                : "text-[#353535] hover:text-[#062039] hover:bg-slate-100"
                }`}
            >
              <SiSap className="w-4 h-4" />
              SLaiCE
            </button>
          </div>
        </div>

        {/* Secondary Sub-Buttons for Automation Suite */}
        {activeTab === "automation" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 max-w-4xl mx-auto"
          >
            {automationTabsList.map((tab) => {
              const isSelected = automationSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setAutomationSubTab(tab.id as AutomationSubTab);
                    setOpenIndex(null);
                  }}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-[#1267a7] text-white border-[#1267a7] shadow-md shadow-[#1267a7]/25"
                      : "bg-white text-[#062039] border-[#e3e3e3] hover:border-[#1267a7] hover:bg-[#f1f2f2]/60"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Secondary Sub-Buttons for SLaiCE (Company Mandate vs SAP HANA Migration) */}
        {activeTab === "slaice" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <button
              onClick={() => {
                setSlaiceSubTab("mandate");
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${slaiceSubTab === "mandate"
                ? "bg-[#41a0c8] text-white border-[#41a0c8] shadow-md shadow-[#41a0c8]/25"
                : "bg-white text-[#062039] border-[#e3e3e3] hover:border-[#41a0c8] hover:bg-[#f1f2f2]/60"
                }`}
            >
              Company Mandate
            </button>
            <button
              onClick={() => {
                setSlaiceSubTab("migration");
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${slaiceSubTab === "migration"
                ? "bg-[#41a0c8] text-white border-[#41a0c8] shadow-md shadow-[#41a0c8]/25"
                : "bg-white text-[#062039] border-[#e3e3e3] hover:border-[#41a0c8] hover:bg-[#f1f2f2]/60"
                }`}
            >
              SAP HANA Migration
            </button>
          </motion.div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {currentData.map((item, index) => (
            <FaqItem
              key={`${activeTab}-${activeTab === "automation" ? automationSubTab : slaiceSubTab}-${item.id}`}
              item={item}
              isOpen={openIndex === index}
              toggle={() => toggleItem(index)}
              product={activeTab}
            />
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#e3e3e3] shadow-lg shadow-slate-200/50"
        >
          <p className="text-[#353535] text-sm font-medium">
            Still have questions about <span className="font-bold text-[#062039]">{productLabel}</span>?{" "}
            <a href="/contact" className="text-[#41a0c8] font-bold hover:underline hover:text-[#1267a7] transition-colors">
              Contact our engineering team →
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
