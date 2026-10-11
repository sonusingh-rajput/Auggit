import type { Faq } from "./blogFaqs";

/** SLaiCE Q&A: Company Mandate and Daily Backup Compliance. */
export const slaiceMandateFaqs: Faq[] = [
  {
    "q": "How does SLaiCE help meet the Company Mandate for daily backups?",
    "a": "SLaiCE is an SAP approved solution, available directly on the SAP Store, that operates entirely within your SAP landscape to move Indian company data to servers located in India. This satisfies the daily backup requirement without moving data outside your existing SAP environment or building anything custom."
  },
  {
    "q": "We already download our data to servers in India, do we still need SLaiCE?",
    "a": "Downloading data as XLS, PDF, or another file type does not meet the requirement. The MCA 4th Mandate requires data to be available in the same form it was entered, with audit logs included. SLaiCE meets this by moving data in its original SAP format, with logs intact."
  },
  {
    "q": "We have not been audited or received a non-compliance notice, does this still apply to us?",
    "a": "Yes, it still applies. Based on our experience working with officials, audits and notices are typically issued from the third year onward, and we expect organizations to start receiving intimations around September/October. Waiting until you receive a notice means you are already behind on compliance."
  },
  {
    "q": "We already use SAP DART to meet this mandate, do we still need SLaiCE?",
    "a": "You will need SLaiCE once you migrate to SAP S/4HANA. SAP DART meets this requirement while you are on SAP ECC, but it is not available after you move to SAP S/4HANA. SLaiCE covers the same requirement across both ECC and S/4HANA, so compliance continues through and after migration."
  },
  {
    "q": "We have an in-house team and a custom-built tool for this, is that enough?",
    "a": "It usually is not enough. In-house tools tend to miss correction entries and add load to your production system. They also need rework after an SAP S/4HANA migration and can create GDPR exposure for EU based organizations. SLaiCE avoids these issues and masks or scrambles data in transit."
  },
  {
    "q": "Can an in-house team just handle backups, audit logs, and data privacy compliance manually?",
    "a": "It is possible, but it carries real tradeoffs. You need to account for team size, cost, and the risk of giving a small team direct access to financial data. Auditors also reject formats like PDF or Excel, since the mandate requires the original system format. SLaiCE runs in the background and avoids these tradeoffs entirely."
  },
  {
    "q": "How does SLaiCE operate, and will it add load to our production servers?",
    "a": "SLaiCE will not meaningfully load your production servers. It is SAP approved, built entirely on SAP tools, and keeps your data inside your own network at all times. SLaiCE sits on top of SAP's SLT server, which is purpose built to extract data without affecting production performance."
  },
  {
    "q": "We have our own coding standards for custom objects, will SLaiCE meet them?",
    "a": "Yes. SLaiCE is approved for SAP ECC, SAP S/4HANA on-premises, and SAP S/4HANA private cloud. Our team works directly with your technical team so SLaiCE passes your SAP ATC checks. The core patented logic itself cannot be altered, but we will work through any limitations with your team."
  },
  {
    "q": "Do we need to buy a separate SAP SLT license or extra infrastructure to run SLaiCE?",
    "a": "No separate license is needed. SAP SLT is a free runtime license provided by SAP, and it can be installed standalone or on either the source or target system, so no additional hardware is required. We recommend installing it on the target system and review the full options with you during discovery."
  },
  {
    "q": "Do we need to pay for additional SAP licenses for a system based in India?",
    "a": "It depends on your SAP version. On SAP ECC, no additional license is needed since it runs as a non-productive instance. On SAP S/4HANA RISE, it depends on your existing SAP contract, though some customers use a read-only system in an Indian SAP data center as a disaster recovery target instead."
  },
  {
    "q": "How would SLaiCE help us recover the India-hosted system if requested by the Ministry of Corporate Affairs or the Income Tax Department?",
    "a": "Daily backups are stored in a secured location, with an automated email alert sent on successful completion, capturing the backup start time, completion time, and status. Audit logs, audit trails, and database redo logs are included in every backup, and our technical team can walk through restoring to a specific date."
  },
  {
    "q": "We are migrating from SAP ECC to SAP S/4HANA next year, do we need a new SLaiCE license?",
    "a": "No, the same license carries forward. SLaiCE is built to work across SAP ECC, SAP S/4HANA on-premises, and SAP S/4HANA RISE private cloud. It also supports SAP's Selective Data Transition approach for both Brownfield and Bluefield migrations, so nothing needs to be repurchased when you move."
  },
  {
    "q": "We will be on SAP ECC for a few more years before migrating, will SLaiCE still work?",
    "a": "Yes, SLaiCE is built for both SAP ECC and SAP S/4HANA from the start. When you do migrate, SLaiCE can support the move through SAP's Selective Data Transition approach, and you will not need to buy a new license, though resource costs for that work would be discussed separately."
  },
  {
    "q": "We have many custom tables and India-specific add-ons, how does SLaiCE handle these?",
    "a": "SLaiCE operates at the table level and is built directly on SAP tools, so custom tables and add-ons are fully supported. During initial setup, we review and sign off on all custom tables and add-ons with your team before anything moves into production."
  },
  {
    "q": "If we also use SLaiCE for test system setup, will that interfere with the compliance mandate use case?",
    "a": "No, the two use cases run independently. SLaiCE uses a separate profile for each purpose, so a test system setup, whether it uses only master data, a specific date range, or region specific data, does not interfere with the compliance backup process running in parallel."
  },
  {
    "q": "What type of control and data validation reports do you provide?",
    "a": "We provide standard control and validation reports, including record counts between the source and target systems, as a baseline for every setup. If your auditors require additional or more specific reports, we work directly with them to build those as well."
  },
  {
    "q": "What is the support structure, and how is it provided?",
    "a": "SLaiCE for company mandate use runs on an annual maintenance subscription. SAP releases updates quarterly, and you choose when to implement them. If an update ever affects SLaiCE, we get advance notice from SAP and release a fix, the same way any other SAP approved add-on would be maintained."
  },
  {
    "q": "What kind of monitoring and alerting is provided?",
    "a": "SLaiCE is built using SAP tools and runs on SAP SLT, so standard SAP alerting and monitoring capabilities apply directly to it. There is no separate monitoring system to learn or maintain outside of what your SAP team already uses."
  },
  {
    "q": "What happens if the source and target systems fall out of sync due to an infrastructure or network failure? Do we have to restart from the beginning?",
    "a": "Usually not. Depending on the type of failure, SLaiCE resumes from where it stopped rather than restarting from scratch, similar to resuming an interrupted download. This is possible because of how SLaiCE is built directly on top of SAP SLT."
  },
  {
    "q": "Would you manage the full infrastructure until we move to SAP S/4HANA?",
    "a": "We can, through a small set of mid-tier infrastructure providers we already work with. This can be included in our scope as a managed service, or we can connect you directly with them, and they offer special pricing for SLaiCE customers either way."
  },
  {
    "q": "Our Indian subsidiary runs its own SAP S/4HANA Public Cloud (GROW), do we still need SLaiCE for daily backup compliance?",
    "a": "No, as long as your SAP S/4HANA Public Cloud instance is hosted in an India data center, though early adopters should confirm this directly with SAP. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default."
  },
  {
    "q": "Our Indian subsidiary runs its own SAP S/4HANA Private Cloud (RISE), do we still need SLaiCE for daily backup compliance?",
    "a": "No, as long as your SAP S/4HANA Private Cloud instance is hosted in an India data center, though early adopters should confirm this directly with SAP. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default."
  },
  {
    "q": "Our Indian subsidiary runs SAP S/4HANA on-premises or SAP ECC hosted in India, do we still need SLaiCE for daily backup compliance?",
    "a": "No, you do not need SLaiCE in this case. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default, and our team can help set these up so your organization meets its regulatory and statutory requirements."
  }
];
