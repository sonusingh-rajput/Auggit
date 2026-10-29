/** SLaiCE product FAQs. Shared by /faq and /product/slaice. */
export const slaiceFaqData: { id: string; question: string; answer: string }[] = [{
  id: "01",
  question: "What is SLaiCE?",
  answer:
    "SLaiCE is an SAP – approved product which allows organizations to selectively replicate systems using defined data subsets, apply optional data masking, and preserve system integrity, without moving data outside the SAP landscape.",
},
{
  id: "02",
  question: "How does SLaiCE work?",
  answer:
    "SLaiCE is built on SLT (SAP Landscape Transformation) replication platform, and it uses native SLT functionality and tools. As an add-on, SLaiCE runs entirely within the existing SAP landscape, without storing / processing data outside the SAP landscape. The process begins in the source system, where SLaiCE identifies the required data to be replicated, based on predefined rules such as date ranges, business objects, or organizational structures. Once configured, SLaiCE securely replicates the selected data to one or more target systems. The replication follows SAP all replication processes and security/authorization controls.",
},
{
  id: "03",
  question: "What technology does SLaiCE use?",
  answer:
    "Built entirely on SAP-native technologies, SLaiCE leverages SLT replication services, SAP Data Services and other SAP-provided solutions to ensure seamless integration and performance.",
},
{
  id: "04",
  question: "What platforms does SLaiCE work on?",
  answer:
    "SLaiCE works on SAP - ECC, SAP S/4 HANA on premise and SAP S/4 HANA private cloud.",
},
{
  id: "05",
  question: "Does SLaiCE support data masking or scrambling?",
  answer:
    "Yes, SLaiCE supports data masking and scrambling. Sensitive data can be masked at the time of extraction from the source to the target system. When provided by the clients, masking rules can be configured based on business requirements, data objects and field-level sensitivity. Additionally, when data is already encrypted or masked in the source system, SLaiCE can replicate the same masked data to the target system.",
},
{
  id: "06",
  question: "Does SLaiCE support custom or add-on tables?",
  answer:
    "Yes, SLaiCE supports custom and partner add-on tables. Custom tables/ partner add-on can be: Selected for data slicing, Masked if required, Included in dependency-aware replication scenarios. No additional development is required to include custom tables / partner add-on.",
},
{
  id: "07",
  question: "What is the execution process of SLaiCE?",
  answer:
    "SLaiCE follows a source-system–driven execution model. All SLaiCE activities are initiated and executed from the source SAP system. From there, data is selectively extracted to one or more target systems. SLaiCE runs entirely within the customer's SAP landscape, using SAP-native mechanisms to control data selection.",
},
{
  id: "08",
  question: "How does SLaiCE transform data?",
  answer:
    "SLaiCE is built on SLT framework to enable secure and reliable data replication between SAP systems. By configuring SLT with precise filters and business parameters, SLaiCE ensures that only the required datasets are selected and replicated, rather than copying the entire SAP database. This selective replication approach supports compliance and reduces operational complexity.",
},
{
  id: "09",
  question: "Where does SLaiCE store the extracted data?",
  answer:
    "No data is extracted or stored outside the SAP landscape. All data extracted from the source system is replicated onto the target system, staying within the customer's SAP landscape. In addition, any data that is already encrypted in the source system remains encrypted during replication. SLaiCE transfers the data in its secured form to the target system, maintaining data confidentiality and integrity across landscape.",
},
{
  id: "10",
  question: "Can SLaiCE process unstructured data?",
  answer:
    "SLaiCE does not independently scan or classify structured or unstructured data. Instead, it integrates with existing SAP or third-party data discovery and classification tools within the customer's landscape. It then replicates data in accordance with the classifications and masking policies defined by those tools.",
},
{
  id: "11",
  question: "How does SLaiCE ensure data security during replication?",
  answer:
    "SLaiCE operating entirely within the SAP landscape, hence inheriting the security features configured for that landscape. As an SAP add-on, SLaiCE inherits SAP's built-in security capabilities, including secure authentication mechanisms and standard SAP encryption protocols for data handling.",
},
{
  id: "12",
  question: "How does SLaiCE ensure data breach preparedness and protection?",
  answer:
    "SLaiCE operates entirely within the existing SAP landscape and inherits SAP's established security framework and controls. SLaiCE ensures sensitive data remains protected throughout the slicing and extraction process, minimizing breach risk and maintaining secure data handling.",
},
];
