<template>
  <!-- hero section  -->
  <section
    class="bg-[url('/assets/images/faqs.jpg')] bg-cover bg-left md:bg-top min-h-dvh py-20 w-full px-10 md:px-20 flex items-center"
    id="top"
  >
    <div class="md:max-w-[40%] text-white">
      <!-- text 1 -->
      <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">Explore Our FAQs: <br/> Get the Information You Need</h1>
      <p class="text-lg 4k:text-3xl">
        Find clear answers to the most common <br/> questions about our services and <br/> solutions.
      </p>
    </div>
  </section>
  <!-- body section  -->
<section class="bg-[#FFF] py-10 md:py-20 px-10 md:px-20">
    <div class="flex flex-col w-full gap-5">
      <div v-for="section in faqSections" :key="section.id" class="faq__list">
        <h2 class="faq__title">
          {{ section.title }} {{ section.subtitle }}
          <!-- <span class="faq__subtitle">{{ section.subtitle }}</span> -->
        </h2>
        
        <article
          v-for="(item, index) in section.faqs"
          :key="item.id"
          class="faq__item"
        >
          <button
            class="faq__question"
            :class="{ 'faq__question--active': openIndex === `${section.id}-${index}` }"
            @click="openIndex = openIndex === `${section.id}-${index}` ? null : `${section.id}-${index}`"
            type="button"
          >
            <span>{{ item.question }}</span>
            <span class="faq__icon">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                :class="{ 'faq__icon--open': openIndex === `${section.id}-${index}` }"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>

          <div
            class="faq__answer-wrapper"
            :style="{
              maxHeight: openIndex === `${section.id}-${index}` ? '200px' : '0'
            }"
          >
            <p class="faq__answer">{{ item.answer }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useSeo } from "~/composables/useSeo";
useSeo({
  title: "Envi-Comm Corporation FAQs",
  description:
    "Find clear answers to the most common questions about our services and solutions.",
  keywords:
    "FAQs",
  bodyClass: "overflow-x-hidden w-screen relative resources-page",
});

const faqSections = ref([
  {
    id: 1,
    title: 'I. General Compliance & Starting Up',
    subtitle: '(Crossover with Business Services)',
    faqs: [
      {
        id: 1,
        question: 'When setting up a new business in the Philippines, do I need an Environmental Clearance Certificate (ECC)?',
        answer: 'Yes, if your business falls under the DENR’s list of Environmentally Critical Projects (ECPs) or is located within an Environmentally Critical Area (ECA), securing an ECC is a mandatory prerequisite for legal operation. Even general business setup (which other firms handle) is incomplete without this specialized permit if environmental impact is a factor.'
      },
      {
        id: 2,
        question: 'What is the key difference between general business consultation and environmental compliance consulting?',
        answer: 'General business consultation (like company incorporation or visa processing) focuses on macro regulatory compliance. Environmental compliance is a highly specialized niche dealing exclusively with DENR-EMB regulations, Environmental Impact Assessments (EIA), and specific pollution control permits. You need the general business setup and the specialist environmental clearance.'
      },
      {
        id: 3,
        question:
          'If a business consultant handles my SEC registration, can they also secure my ECC?',
        answer:
          'While many general consulting firms (which focus on registration) may offer to facilitate an ECC, only a dedicated Environmental Impact Assessment (EIA) Consultant with deep expertise in the Philippine EIS System (PEISS) can properly prepare the required technical reports, such as the Environmental Impact Statement (EIS) or IEE Checklist Report.'
      },
      {
        id: 4,
        question:
          'What is the first step for a new factory or infrastructure project regarding environmental law?',
        answer:
          'The absolute first step is a Project Categorization/Screening to determine if your project requires an Environmental Compliance Certificate (ECC) or a Certificate of Non-Coverage (CNC). Engaging a specialized consultant early prevents costly project redesigns later in the business setup process.'
      },
      {
        id: 5,
        question:
          'Is an Environmental Compliance Certificate (ECC) a one-time requirement?',
        answer:
          'No. While the initial ECC is issued before project implementation, post-ECC compliance requires continuous adherence to the Environmental Management Plan (EMP), regular submission of Compliance Monitoring Reports (CMRs), and securing other necessary permits (like Permit to Operate). Environmental compliance is an ongoing operational commitment.'
      },
    ]
  },
  {
  id: 2,
  title: 'II. ECC and CNC Acronyms',
  subtitle: '(Core Service Offerings)',
  faqs: [
    {
      id: 1,
      question: 'What exactly is an Environmental Compliance Certificate (ECC)?',
      answer: 'General business consultation (like company incorporation or visa processing) focuses on macro regulatory compliance. Environmental compliance is a highly specialized niche dealing exclusively with DENR-EMB regulations, Environmental Impact Assessments (EIA), and specific pollution control permits. You need the general business setup and the specialist environmental clearance.'
    },
    {
      id: 2,
      question: 'How do I determine if my project requires an ECC or a CNC?',
      answer: 'The requirement is based on the project type, size, and location (e.g., within an Environmentally Critical Area). Projects are categorized A (ECP), B (Non-ECP/ECA), and C/D (minimal impact). A dedicated environmental consultant uses the DENRs screening guidelines to accurately classify your project, which is critical to selecting the correct application path.'
    },
    {
      id: 3,
      question: 'What is a Certificate of Non-Coverage (CNC) and who needs it?',
      answer: 'A CNC is issued by the DENR-EMB to certify that a project or undertaking is not covered by the Philippine Environmental Impact Statement (EIS) System. It is typically required for smaller-scale projects that have minimal or negligible environmental impact, confirming they do not need the full Environmental Impact Assessment (EIA).'
    },
    {
      id: 4,
      question: 'How long does the ECC application process take in the Philippines?',
      answer: 'The statutory processing time for an ECC can take up to 20 working days from the filing of the complete and technically sound application. However, the overall timeline depends heavily on the complexity of the project and the time required to complete the mandatory EIA study and secure all necessary pre-requisite documents.'
    },
    {
      id: 5,
      question: 'What is the Environmental Impact Statement (EIS) and is it always required?',
      answer: 'The EIS is a comprehensive, multi-disciplinary report required for Environmentally Critical Projects (ECPs) when applying for an ECC. It details the projects potential environmental impacts, and the corresponding mitigation measures. It is not always required simpler projects may only need an Initial Environmental Examination (IEE) Checklist Report.'
    },
    {
      id: 6,
      question: 'General business consultation (like company incorporation or visa processing) focuses on macro regulatory compliance. Environmental compliance is a highly specialized niche dealing exclusively with DENR-EMB regulations, Environmental Impact Assessments (EIA), and specific pollution control permits. You need the general business setup and the specialist environmental clearance.'
    },
    {
      id: 7,
      question: 'Can an existing ECC be amended or transferred to a new owner?',
      answer: 'Yes, an existing ECC can be amended (for minor changes like change of ownership or non-technical amendments) or major amendments (for project expansion). This requires filing a formal request and specific documentation (like an updated SEC Registration or Deed of Sale) with the DENR-EMB.'
    }
  ]
  },
  {
  id: 3,
  title: 'III. Permitting & Licensing',
  subtitle: '(Specialized Compliance)',
  faqs: [
    {
      id: 1,
      question: 'What is a Permit to Operate (PTO) and how does it relate to the Clean Air Act?',
      answer: 'The Permit to Operate (PTO) is mandatory for any source of air pollution (e.g., generators, boilers, furnaces) under the Philippine Clean Air Act (R.A. 8749). It confirms that your Air Pollution Control Facility (APCF) meets all emission standards, and is processed separately from the general ECC.'
    },
    {
      id: 2,
      question: 'When do I need a Discharge Permit (DP) from the DENR?',
      answer: 'General business consultation (like company incorporation or visa processing) focuses on macro regulatory compliance. Environmental compliance is a highly specialized niche dealing exclusively with DENR-EMB regulations, Environmental Impact Assessments (EIA), and specific pollution control permits. You need the general business setup and the specialist environmental clearance.'
    },
    {
      id: 3,
      question: 'Is Hazardous Waste Generator Registration mandatory for all manufacturers?',
      answer: 'Yes, if your facility generates or handles hazardous waste (as defined by R.A. 6969, the Toxic Substances and Hazardous and Nuclear Wastes Control Act), you must be officially registered as a Hazardous Waste Generator with the DENR-EMB. This is a critical specialized permit often overlooked by general business consultants.'
    },
    {
      id: 4,
      question: 'What is the required frequency for securing a new Permit to Operate (PTO)?',
      answer: 'A PTO is generally valid for one year from the date of issuance. Timely renewal is crucial to avoid operational disruptions and penalties under the Clean Air Act.'
    },
    {
      id: 5,
      question: 'What is the Laguna Lake Development Authority (LLDA) Clearance and do I need it?',
      answer: 'If your project is located within the Laguna de Bay Region (including parts of Metro Manila, Rizal, Laguna, etc.), you will need an LLDA Clearance and LLDA Discharge Permit in addition to the DENR-EMB permits. The LLDA has specific, stricter regulatory jurisdiction over water quality in that area.'
    },
    {
      id: 6,
      question: 'What constitutes a "major amendment" to an ECC?',
      answer: 'A major amendment typically involves significant changes in the project that could increase the environmental impact, such as a substantial increase in production capacity, an expansion of the project area, or a shift in the production process. These changes require a comprehensive review, often involving an updated EPRMP (Environmental Performance Report and Management Plan).'
    }
  ]
  },
  {
  id: 4,
  title: 'IV. Reporting & Monitoring',
  subtitle: '(Post-Compliance)',
  faqs: [
    {
      id: 1,
      question: 'What is the purpose of the quarterly Self-Monitoring Report (SMR)?',
      answer: 'The SMR is a mandatory, quarterly report submitted to the DENR-EMB by the companys designated Pollution Control Officer (PCO). It details compliance with the Clean Air and Clean Water Acts, including air emission levels, wastewater quality, hazardous waste generation, and PCO activities.'
    },
    {
      id: 2,
      question: 'How often must a Compliance Monitoring Report (CMR) be submitted after an ECC is issued?',
      answer: 'The CMR is generally submitted semi-annually (every six months). It serves to document the project proponents compliance with the specific conditions outlined in the ECC and the implementation status of the approved Environmental Management Plan (EMP).'
    },
    {
      id: 3,
      question: 'Who is responsible for preparing and submitting the mandatory DENR reports (SMR/CMR)?',
      answer: 'The preparation and submission must be overseen by the companys designated and DENR-accredited Pollution Control Officer (PCO). Envi-Comm can assist in PCO designation and provide technical reporting support to ensure the reports are accurate and compliant, mitigating the risk of penalties.'
    },
    {
      id: 4,
      question: 'What happens during a DENR-EMB field inspection or audit?',
      answer: 'During an inspection, the EMB team verifies that the projects actual operations align with the approved ECC conditions and the latest SMR/CMR submissions. Inspectors will check pollution control facilities, waste storage, and internal documentation. Envi-Comm helps clients prepare for and manage these audits seamlessly.'
    }
  ]
  },
  {
  id: 5,
  title: 'V. Choosing a Specialist',
  subtitle: '(The Envi-Comm Advantage)',
  faqs: [
    {
      id: 1,
      question: 'How does choosing a dedicated environmental specialist save a business time and money?',
      answer: 'A specialist focuses exclusively on the highly technical, ever-changing DENR regulations, minimizing the risk of application errors or post-ECC non-compliance, which can lead to expensive fines or project stoppage. Unlike general consultancies, an environmental specialist avoids the learning curve and delivers accurate results faster.'
    },
    {
      id: 2,
      question: 'What are the credentials I should look for in an Environmental Compliance Consultant?',
      answer: 'The consultant must possess DENR-accredited professionals (e.g., licensed engineers, EIA Preparers), deep knowledge of the PEISS/DAO 2003-30, a strong track record specifically in securing ECC/CNC for your industry type, and proven experience in managing post-compliance requirements (SMR/CMR).'
    },
    {
      id: 3,
      question: 'Can Envi-Comm assist projects that already have an existing ECC but are facing compliance issues?',
      answer: 'Yes. Our expertise is not limited to new applications. We specialize in compliance recovery, addressing Notice of Violation (NOV) issues, preparing technical justifications for ECC amendments, and restructuring internal environmental management systems to align with the required EMP and prevent future penalties.'
    }
  ]
  },
  {
  id: 6,
  title: 'VI. Environmental Acts & Specific Regulations',
  subtitle: '(Deep Dive)',
  faqs: [
    {
      id: 1,
      question: 'What are the generator requirements under the Philippine Clean Air Act (R.A. 8749)?',
      answer: 'Under the Clean Air Act (R.A. 8749), facilities operating generators, boilers, or incinerators must secure a Permit to Operate (PTO) and adhere to the strict ambient air quality and source emission standards. A compliance specialist ensures your equipment’s stack testing and monitoring protocols satisfy the DENR’s technical mandates.'
    },
    {
      id: 2,
      question: 'What is the facility\'s role under the Ecological Solid Waste Management Act (R.A. 9003)?',
      answer: 'R.A. 9003 mandates businesses, especially those in manufacturing, to implement segregation at source and proper management of solid waste, moving away from simple disposal. Compliance includes mandatory segregation of compostable, recyclable, non-recyclable, and special wastes, ensuring the correct handling, storage, and recovery systems are in place.'
    },
    {
      id: 3,
      question: 'How does the Clean Water Act (R.A. 9275) affect a new industrial facility?',
      answer: 'R.A. 9275 requires new industrial facilities to obtain a Discharge Permit (DP) before releasing any wastewater. The law mandates that the effluent meets the national effluent standards (DAO 2016-08). This requires specialized engineering for Wastewater Treatment Facilities (WTF) design and regular sampling, a service beyond general business registration.'
    },
    {
      id: 4,
      question: 'What is the Priority Chemicals List (PCL) and how does R.A. 6969 regulate it?',
      answer: 'The Priority Chemicals List (PCL) identifies substances regulated under the Toxic Substances and Hazardous and Nuclear Wastes Control Act (R.A. 6969). If your operations use any PCL chemicals, you must register, secure a PCL Compliance Certificate, and submit a PCL Management Plan.'
    },
    {
      id: 5,
      question: 'Do small commercial businesses need to worry about the Toxic Substances Act (R.A. 6969)?',
      answer: 'Yes. Even small businesses generating hazardous waste (e.g., used oil, discarded batteries, empty chemical containers) are classified as Hazardous Waste Generators and must register with the DENR-EMB. Compliance under R.A. 6969 requires proper manifesting, storage, and disposal through accredited transporters and treaters.'
    }
  ]
  },
  {
  id: 7,
  title: 'VII. Pollution Control Officer (PCO) & Training',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What are the mandatory qualifications for a company\'s Pollution Control Officer (PCO)?',
      answer: 'A PCO must be a DENR-accredited professional, typically an engineer, chemist, or other technical graduate, who has completed the 40-hour PCO Training Course from an accredited institution. This accreditation is mandatory for facilities with an ECC or those generating significant pollution.'
    },
    {
      id: 2,
      question: 'Can the company owner or General Manager also serve as the PCO?',
      answer: 'While the Managing Head is jointly liable with the PCO for environmental violations, the PCO must be DENR-accredited. It is generally advisable to hire a dedicated, accredited PCO or utilize PCO technical services from a specialist consultant to ensure the roles demanding compliance and reporting duties are fulfilled professionally.'
    },
    {
      id: 3,
      question: 'What is the PCO\'s role in securing and maintaining the ECC?',
      answer: 'General business consultation (like company incorporation or visa processing) focuses on macro regulatory compliance. Environmental compliance is a highly specialized niche dealing exclusively with DENR-EMB regulations, Environmental Impact Assessments (EIA), and specific pollution control permits. You need the general business setup and the specialist environmental clearance.'
    },
    {
      id: 4,
      question: 'How often must a PCO training or re-accreditation be conducted?',
      answer: 'The PCO accreditation is valid for three (3) years. Renewal requires the PCO to attend an accredited PCO training refresher course and submit an updated application to the DENR-EMB, confirming ongoing professional development in environmental law.'
    },
    {
      id: 5,
      question: 'Can Envi-Comm provide external PCO services to businesses?',
      answer: 'Yes. For companies that cannot justify a full-time in-house PCO, or need specialized expertise, Envi-Comm offers DENR-accredited PCO support and technical services, ensuring your facility remains compliant with all regulatory reporting and monitoring requirements without the administrative overhead.'
    }
  ]
  },
  {
  id: 8,
  title: 'VIII. Consequences of Non-Compliance & Remediation',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What is a Notice of Violation (NOV) and what should I do if I receive one?',
      answer: 'A Notice of Violation (NOV) is a formal warning from the DENR-EMB or LLDA citing a failure to comply with an environmental law or a condition of your ECC/Permit. Immediate action is required to avoid penalties. You must consult a compliance specialist to prepare a technical explanation and a Corrective Action Plan within the given timeline.'
    },
    {
      id: 2,
      question: 'What are the typical fines or penalties for violating ECC conditions?',
      answer: 'Penalties under P.D. 1586 (EIS System) can range from administrative fines of up to PHP 50,000 per violation day to the issuance of a Cease and Desist Order (CDO), forcing a temporary or permanent shutdown of operations. Specialized compliance consulting is an investment against these costly risks.'
    },
    {
      id: 3,
      question: 'My ECC application was disapproved. What are the next steps?',
      answer: 'Disapproval requires addressing the specific technical deficiencies noted by the EMB review committee. This typically involves revising the EIS/IEE Report, conducting further baseline studies (e.g., air/water sampling), and reapplying. Envi-Comm specializes in technical gap analysis and report remediation for resubmission.'
    },
    {
      id: 4,
      question: 'Can a company appeal a Cease and Desist Order (CDO)?',
      answer: 'Yes, a company can file a Motion for Reconsideration of a CDO. This appeal must be supported by compelling technical evidence, a detailed corrective action plan, and proof of immediate compliance efforts. Successful appeals rely heavily on the technical documentation prepared by environmental experts.'
    }
  ]
  },
  {
  id: 9,
  title: 'IX. Technical Reports & Assessments',
  subtitle: '(Deep Dive)',
  faqs: [
    {
      id: 1,
      question: 'What is the difference between an IEE Checklist and an Environmental Impact Statement (EIS)?',
      answer: 'An IEE (Initial Environmental Examination) Checklist is a simplified report for projects with moderate environmental impact (Category B). The EIS (Environmental Impact Statement) is a comprehensive, full-scale scientific assessment required for Environmentally Critical Projects (ECPs, Category A). Choosing the correct report is key to a smooth ECC application.'
    },
    {
      id: 2,
      question: 'What is an Environmental Risk Assessment (ERA) and when is it required?',
      answer: 'An ERA is a study that evaluates the likelihood and severity of potential catastrophic environmental accidents (e.g., chemical spills, fire, explosion) and their consequences. It is a mandatory component of the EIS Report for projects handling large quantities of hazardous materials or those in high-risk locations.'
    },
    {
      id: 3,
      question: 'What specific baseline studies are required for an ECC application?',
      answer: 'Baseline studies vary by project but often include ambient air quality monitoring, water quality sampling (surface and groundwater), noise level monitoring, and socio-economic surveys. These data establish the pre-project condition against which all future impacts will be measured.'
    },
    {
      id: 4,
      question: 'What is the Project Description (PD) and why is its accuracy crucial?',
      answer: 'The Project Description (PD) is the initial document that precisely defines the nature, scale, and location of the proposed project. Its accuracy is crucial because the EMB uses it for the initial Project Screening to determine if an ECC or CNC is required, setting the entire regulatory pathway.'
    },
    {
      id: 5,
      question: 'How does the EIA process ensure social acceptability of a project?',
      answer: 'The EIA process mandates Social Acceptability through required steps like public scoping, public consultations, and stakeholder interviews. This ensures the concerns of affected communities are integrated into the final Environmental Management Plan (EMP).'
    }
  ]
  },
  {
  id: 10,
  title: 'X. Specific Project Applications & LGU Coordination',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'Does a warehouse or logistics hub require an ECC?',
      answer: 'General business consultation (like company incorporation or visa processing) focuses on macro regulatory compliance. Environmental compliance is a highly specialized niche dealing exclusively with DENR-EMB regulations, Environmental Impact Assessments (EIA), and specific pollution control permits. You need the general business setup and the specialist environmental clearance.'
    },
    {
      id: 2,
      question: 'Is Local Government Unit (LGU) endorsement required for an ECC application?',
      answer: 'Yes. While the ECC is a national permit, the DENR-EMB requires proof of LGU endorsement or certification that the project is allowed under the local land use plan (e.g., the Zoning Ordinance). This coordination step is essential for the application\'s completeness.'
    },
    {
      id: 3,
      question: 'What is the process for securing an Environmental Performance Report and Management Plan (EPRMP)?',
      answer: 'An EPRMP is the required document for projects that are already operating without an ECC but should have one (Category A-3/B-3). It involves a full audit of past operations, an assessment of cumulative impacts, and a proposal for a comprehensive remediation and management plan to regularize the facility.'
    },
    {
      id: 4,
      question: 'Does an expansion of an existing factory require a new ECC application?',
      answer: 'It depends on the size of the expansion. A major expansion (e.g., increasing production capacity above a certain threshold) requires an ECC Amendment, which often involves a detailed EPRMP to justify the change. Minor expansions may only require a simple amendment request.'
    },
    {
      id: 5,
      question: 'Beyond the DENR, what other environmental agencies may govern a project?',
      answer: 'Projects are frequently governed by other specialized agencies, including the Laguna Lake Development Authority (LLDA) for projects within the Laguna de Bay region, the National Water Resources Board (NWRB) for water permits, and potentially the Mines and Geosciences Bureau (MGB) for resource-extractive activities. Envi-Comm manages compliance across all these regulatory bodies.'
    }
  ]
  },
  {
  id: 11,
  title: 'XI. Climate Change & Specific DAO Requirements',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What are the requirements for securing a Pre-Register Status under DAO 2013-22 (Greenhouse Gas Reporting)?',
      answer: 'DAO 2013-22 mandates large emitters to secure Pre-Register Status from the EMB prior to submitting their annual Greenhouse Gas (GHG) Inventory Report. This requires technical calculation of Scope 1 and 2 emissions and classification based on the mandated threshold (e.g., 200,000 metric tons $\text{CO}_2$ equivalent).'
    },
    {
      id: 2,
      question: 'How does the EMB classify Environmentally Critical Projects (ECPs) under DAO 2003-30?',
      answer: 'The DENR DAO 2003-30 strictly defines ECPs based on criteria like the project’s nature (e.g., heavy industries, resource extraction), its location (e.g., near protected areas), and size/production capacity. Our specialization ensures accurate project categorization from the initial screening stage.'
    },
    {
      id: 3,
      question: 'What specific technical data is required for the Water Quality Management Area (WQMA) monitoring?',
      answer: 'For projects located within a WQMA, reporting often requires specialized technical data beyond the standard SMR. This includes detailed effluent composition, flow rates, and continuous monitoring data to ensure compliance with the specific WQMA regulations established by the DENR-EMB.'
    },
    {
      id: 4,
      question: 'What is the requirement for having a registered Environmental Unit (EU) in a facility?',
      answer: 'For large-scale projects, the ECC may require the establishment of an in-house Environmental Unit (EU) with dedicated personnel and budget to manage the approved Environmental Management Plan (EMP). This goes beyond the single PCO requirement and necessitates full organizational integration of environmental mandates.'
    },
    {
      id: 5,
      question: 'How does DENR regulate projects within National Integrated Protected Areas System (NIPAS) areas?',
      answer: 'Projects within or near NIPAS areas (under R.A. 7586) face extremely strict review. An ECC application in these areas requires additional clearances from the Protected Area Management Board (PAMB), significantly increasing the complexity and technical requirements of the EIS.'
    }
  ]
  },
  {
  id: 12,
  title: 'XII. Water Pollution Control Technology & Permits',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What is a Sewage Treatment Plant (STP) and when is it required?',
      answer: 'General business consultation (like company incorporation or visa processing) focuses on macro regulatory compliance. Environmental compliance is a highly specialized niche dealing exclusively with DENR-EMB regulations, Environmental Impact Assessments (EIA), and specific pollution control permits. You need the general business setup and the specialist environmental clearance.'
    },
    {
      id: 2,
      question: 'Is a separate Wastewater Treatment Facility (WTF) registration required by the DENR?',
      answer: 'Yes. Before operating, any WTF must be registered with the DENR-EMB. This process includes submitting engineering plans, technical specifications, and process flow charts for approval, which requires specialized environmental engineering expertise.'
    },
    {
      id: 3,
      question: 'How are the wastewater effluent standards set by DENR DAO 2016-08 applied to different industries?',
      answer: 'DAO 2016-08 sets the revised effluent standards. These standards are universal but the required parameters for monitoring (e.g., $\text{BOD}_5$, $\text{TSS}$, heavy metals) are tailored based on the industry classification (e.g., food, chemical, or general wastewater).'
    },
    {
      id: 4,
      question: 'What is the proper procedure for sludge disposal from a Wastewater Treatment Facility?',
      answer: 'Sludge generated by a WTF is often classified as a hazardous waste (R.A. 6969). It must be properly tested, stored in dedicated storage areas, and disposed of only through an accredited hazardous waste treater and transporter, with full compliance manifesting.'
    },
    {
      id: 5,
      question: 'What is the penalty for exceeding the allowed effluent discharge limits?',
      answer: 'Exceeding the effluent limits stipulated in your Discharge Permit (DP) or the Clean Water Act can result in penalties, calculated based on the degree of exceedance and the volume of discharge, often leading to fines calculated in pesos per kilogram (PHP/kg) of pollution load.'
    }
  ]
  },
  {
  id: 13,
  title: 'XIII. Air Pollution Control Technology & Regulations',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What are the requirements for securing an Authority to Construct (ATC) for an air pollution source?',
      answer: 'An Authority to Construct (ATC) is a mandatory prerequisite for constructing any Air Pollution Source Installation (APSI), such as boilers or incinerators, under the Clean Air Act. The application requires detailed engineering plans, design calculations, and assurance that the system will meet emission standards.'
    },
    {
      id: 2,
      question: 'What technical testing is required to renew a Permit to Operate (PTO) for a generator set?',
      answer: 'Renewal of a PTO requires current technical data, specifically an Annual Source Emission Test conducted by a DENR-accredited third-party laboratory. This confirms the generator\'s actual emissions (e.g., $\text{NO}_x$, $\text{SO}_2$, $\text{Opacity}$) are within the allowed limits.'
    },
    {
      id: 3,
      question: 'When is Continuous Emission Monitoring Systems (CEMS) mandatory?',
      answer: 'CEMS are mandatory for large-scale, high-emitting facilities, such as power plants or cement factories, as defined by DAO 2007-22. This system provides real-time data on stack emissions, requiring specialized calibration and reporting protocols managed by environmental experts.'
    },
    {
      id: 4,
      question: 'What types of Air Pollution Control Devices (APCDs) are commonly required?',
      answer: 'Common APCDs include scrubbers (for gases/acid mists), baghouses or electrostatic precipitators (for particulate matter), and activated carbon filters (for organic vapors). The specific device depends entirely on the type of pollutant generated by the industrial process.'
    },
    {
      id: 5,
      question: 'What is the proper procedure for testing stack emission sources?',
      answer: 'Stack emission testing must follow DENR-approved methodology (e.g., EPA Methods) and be performed by a DENR-accredited testing firm. The PCO must witness the testing, and the certified report is submitted to the EMB as part of the PTO renewal and SMR requirements.'
    }
  ]
  },
  {
  id: 14,
  title: 'XIV. Site-Specific Project Requirements & Audits',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What are the specific environmental compliance needs for a tourism development project?',
      answer: 'Tourism projects (e.g., resorts, theme parks) face strict scrutiny regarding coastal management (if applicable), wastewater management (sewage), solid waste management, and adherence to the social and cultural sensitivity conditions imposed in the ECC.'
    },
    {
      id: 2,
      question: 'Do agricultural projects require an ECC or CNC?',
      answer: 'Large-scale agricultural projects, such as certain aquaculture farms, piggeries, or poultry farms above specific capacities, are categorized under the DENR rules and require either a CNC or an ECC due to potential impacts on water quality and air quality (odor/emissions).'
    },
    {
      id: 3,
      question: 'How is a Closure and Abandonment Plan prepared for a project nearing end-of-life?',
      answer: 'A Closure and Abandonment Plan must be pre-approved by the DENR-EMB and details the steps the project will take to decommission the site, manage final waste, and rehabilitate the land to its pre-project or agreed-upon condition. This plan is crucial for projects requiring an EGF.'
    },
    {
      id: 4,
      question: 'What are the requirements for an Environmental Performance Report and Management Plan (EPRMP) update?',
      answer: 'The EPRMP must be updated periodically or whenever there is a major change in the operational parameters of the facility. The update focuses on the project’s performance against its EMP over the period, justifying the need for any amendments to the original ECC.'
    },
    {
      id: 5,
      question: 'How does an EIA Consultant handle transboundary pollution issues?',
      answer: 'If a project\'s potential impact (e.g., dust, noise, water runoff) affects an adjacent Local Government Unit (LGU) or a different province, the EIA Consultant must incorporate specific mitigation measures and coordinate with both LGUs to address potential transboundary pollution concerns during the consultation phase.'
    }
  ]
  },
  {
  id: 15,
  title: 'XV. Environmental Due Diligence & Advanced Services',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What is Phase I Environmental Site Assessment (ESA) and when is it needed?',
      answer: 'A Phase I ESA is a non-intrusive assessment required during property acquisition, merger, or financing of commercial land. It investigates the property’s historical use and potential for contamination, protecting the buyer/investor from future environmental liabilities under R.A. 6969.'
    },
    {
      id: 2,
      question: 'What are the typical findings that warrant a Phase II Environmental Site Assessment?',
      answer: 'A Phase II ESA is triggered by "recognized environmental conditions" (RECs) found during Phase I. It involves intrusive testing, such as soil, groundwater, and soil gas sampling, to confirm the presence and extent of contamination.'
    },
    {
      id: 3,
      question: 'How does an Environmental Due Diligence (EDD) audit protect a potential investor?',
      answer: 'An EDD audit assesses a target company\'s current and past compliance status with all national and local environmental laws (DENR, LLDA, LGU). This critical step prevents an investor from inheriting hidden environmental liabilities, fines, or remediation costs.'
    },
    {
      id: 4,
      question: 'Does Envi-Comm assist with securing ISO 14001 certification?',
      answer: 'Yes. While ISO 14001 is a voluntary international standard for Environmental Management Systems (EMS), our deep regulatory expertise complements the certification process by ensuring the internal EMS is fully aligned not only with ISO standards but also with mandatory Philippine DENR compliance frameworks.'
    },
    {
      id: 5,
      question: 'What is the significance of the Environmental Performance Rating (EPR) given by the EMB?',
      answer: 'The EPR is a formal assessment of a company\'s environmental performance, factoring in permit compliance, audit history, and the state of its pollution control devices. A high EPR signifies excellent compliance management and can positively influence future regulatory processes and public perception.'
    }
  ]
  },
  {
  id: 16,
  title: 'XVI. Noise, Vibration, and Odor Control',
  subtitle: '(Specific Nuisance Regulations)',
  faqs: [
    {
      id: 1,
      question: 'What are the mandated noise pollution standards for commercial and industrial zones?',
      answer: 'The DENR sets strict Noise Standards (DAO 2000-81) based on the zone classification (e.g., residential, commercial, industrial). Industrial facilities must conduct regular noise monitoring and implement effective mitigation measures to ensure decibel levels do not exceed the specific standards at the property boundary.'
    },
    {
      id: 2,
      question: 'Is a facility required to monitor and control ground vibration caused by its operations?',
      answer: 'Yes. Projects involving heavy machinery, blasting, or deep foundation work must incorporate a Vibration Management Plan into their ECC. Monitoring ground vibration levels, especially near residential or sensitive structures, is a mandatory aspect of compliance to prevent structural damage and community nuisance.'
    },
    {
      id: 3,
      question: 'What are the DENR guidelines regarding odor pollution from industrial activities?',
      answer: 'The DENR addresses odor pollution through DAO 2014-02 and various local ordinances. Facilities must submit a detailed Odor Management Plan, which specifies the sources, control technologies (e.g., scrubbers, bio-filters), and frequency of odor monitoring to prevent nuisance and non-compliance penalties.'
    },
    {
      id: 4,
      question: 'How does the EMB measure and enforce ambient air quality for particulate matter (PM10 and PM2.5)?',
      answer: 'The Clean Air Act mandates monitoring for ambient levels of Particulate Matter (PM), particularly the smaller $\text{PM}_{2.5}$ fraction. Facilities must design their emission controls to meet both the source emission standards and to ensure the overall ambient air quality in their vicinity remains compliant.'
    },
    {
      id: 5,
      question: 'When is the use of incineration technology prohibited under Philippine environmental law?',
      answer: 'The Clean Air Act (R.A. 8749) generally prohibits the use of incinerators for waste disposal. Any facility wishing to use thermal treatment must demonstrate that the technology is a non-burn alternative (e.g., plasma gasification or pyrolysis) and must still secure an Authority to Construct (ATC) and Permit to Operate (PTO).'
    }
  ]
  },
  {
  id: 17,
  title: 'XVII. Chemical Management & Storage',
  subtitle: '(R.A. 6969 Deep Dive)',
  faqs: [
    {
      id: 1,
      question: 'What specific documentation is required for the transport of hazardous waste?',
      answer: 'The transport of Hazardous Waste (R.A. 6969) requires strict documentation, including a DENR-approved Hazardous Waste Manifest signed by the generator, the accredited transporter, and the final treater/disposer. This manifest is vital for tracking the waste\'s chain of custody and confirming legal disposal.'
    },
    {
      id: 2,
      question: 'How often must a Hazardous Waste Generator\'s registration be renewed?',
      answer: 'A Hazardous Waste Generator\'s registration is typically valid for a specific period and requires timely renewal submission to the EMB. Compliance includes updating the list of generated wastes, quantities, and chosen treatment facilities to maintain active status.'
    },
    {
      id: 3,
      question: 'What is the requirement for secondary containment in chemical storage areas?',
      answer: 'All areas used for storing chemicals, especially liquid hazardous wastes, must have secondary containment (e.g., berms, dikes, or spill pallets) capable of containing at least 110% of the volume of the largest container, preventing ground contamination in the event of a spill.'
    },
    {
      id: 4,
      question: 'What is the Chemical Control Order (CCO) program and who does it affect?',
      answer: 'CCOs are DENR regulations specifically targeting highly toxic or ozone-depleting substances (e.g., Mercury, Cyanide, Asbestos). Companies that import, manufacture, or use these substances must secure a separate CCO Registration and comply with stringent monitoring and reporting protocols.'
    },
    {
      id: 5,
      question: 'How do facilities report accidental release or spills of hazardous materials?',
      answer: 'Any accidental release, spill, or exposure involving hazardous materials must be immediately reported to the DENR-EMB regional office and local authorities. A detailed written Incident Report outlining the cause, magnitude, and corrective actions taken must follow promptly.'
    }
  ]
  },
  {
  id: 18,
  title: 'XVIII. Inter-Agency Permitting',
  subtitle: '(DENR/LLDA/NWRB Overlap)',
  faqs: [
    {
      id: 1,
      question: 'When is a Water Use Permit (WUP) from the NWRB required alongside DENR permits?',
      answer: 'A Water Use Permit (WUP) from the National Water Resources Board (NWRB) is required if your project extracts groundwater or surface water (e.g., from a river or deep well) above a certain volume threshold. This is separate from the DENR’s Discharge Permit (DP), which governs effluent quality.'
    },
    {
      id: 2,
      question: 'Can a project located within the Laguna de Bay Region bypass DENR-EMB if it secures LLDA clearance?',
      answer: 'No. A project within the LLDA’s jurisdiction must comply with both the LLDA’s specific clearances and discharge permits and the national requirements of the DENR-EMB (e.g., ECC). The LLDA often enforces stricter standards on wastewater and solid waste.'
    },
    {
      id: 3,
      question: 'What is the process for consolidating multiple DENR permits (e.g., ECC, DP, PTO) for renewal?',
      answer: 'While the application for each permit is separate, a compliance specialist helps manage the overlapping data requirements (e.g., flow rates, chemical usage) and synchronize renewal schedules to ensure the facility maintains continuous compliance status across all regulated aspects.'
    },
    {
      id: 4,
      question: 'How do projects coordinate permits between the MGB (Mines and Geosciences Bureau) and the EMB?',
      answer: 'Mining and quarrying projects require permits from the MGB (e.g., Mineral Production Sharing Agreement) and the EMB (ECC). The EIA Study is a critical document that must satisfy the requirements of both agencies, often requiring specialist geological and environmental expertise.'
    },
    {
      id: 5,
      question: 'What additional requirements are necessary for compliance with the Pollution Adjudication Board (PAB)?',
      answer: 'The Pollution Adjudication Board (PAB) handles contested violations and non-compliance cases. Expert consulting is needed to prepare and present technical defense documents and detailed compliance evidence to the PAB during hearings and mediation.'
    }
  ]
  },
  {
  id: 19,
  title: 'XIX. Forestry & Coastal Resource Management',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'When is a Tree Cutting Permit (TCP) required from the DENR’s Forest Management Bureau (FMB)?',
      answer: 'A TCP is mandatory for the cutting, gathering, or transport of naturally growing trees within your project site, regardless of land tenure. This clearance is separate from the ECC and requires a formal application, inventory, and payment of corresponding fees.'
    },
    {
      id: 2,
      question: 'What environmental considerations are specific to projects along coastlines or foreshore areas?',
      answer: 'Coastal projects require specialized assessment for impact on mangroves, coral reefs, and marine protected areas. Obtaining a Foreshore Lease Agreement may also be necessary, and the EIA must address coastal erosion, marine habitat disturbance, and discharge into the coastal environment.'
    },
    {
      id: 3,
      question: 'What is the requirement for compensatory reforestation for tree cutting permits?',
      answer: 'If a TCP is approved, the proponent is often required to implement a compensatory reforestation program, planting a mandated number of seedlings for every tree cut, using species approved by the FMB in designated areas.'
    },
    {
      id: 4,
      question: 'Does an ECC cover the requirement for a building’s rainwater harvesting system?',
      answer: 'The ECC may include a specific condition for the installation of a Rainwater Harvesting System if it is a local ordinance or if the project’s water demands are high. This ensures the project contributes to water conservation and addresses flooding concerns.'
    },
    {
      id: 5,
      question: 'How is a project’s impact on cultural heritage sites assessed in the EIA process?',
      answer: 'The EIA requires screening for impacts on socio-cultural resources, including historical or archaeological sites. If potential impacts exist, the National Museum of the Philippines or NHCP must be consulted, and mitigation plans (e.g., "Chance Find" protocols) must be incorporated into the EMP.'
    }
  ]
  },
  {
  id: 20,
  title: 'XX. Advanced Auditing, Liability, and Legal Support',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What is the difference between a Compliance Audit and an Environmental Due Diligence (EDD) Audit?',
      answer: 'A Compliance Audit assesses a facility’s current adherence to existing permits (ECC, DP, PTO). An EDD audit is broader, usually done for a transaction (M&A), covering past and present operations to identify unquantified, hidden environmental liabilities for the purchaser/investor.'
    },
    {
      id: 2,
      question: 'Who holds the ultimate liability for environmental non-compliance in a corporation?',
      answer: 'Under Philippine law, environmental liability extends beyond the PCO to the President, General Manager, or responsible highest-ranking corporate officers. This legal exposure necessitates robust, documented compliance systems and proactive auditing by external specialists.'
    },
    {
      id: 3,
      question: 'What steps are taken to manage and reduce residual environmental risk after a project is decommissioned?',
      answer: 'Even after project closure, residual risk remains. Mitigation involves securing a final Certificate of Non-Coverage/Completion from the DENR, ensuring all waste streams are permanently eliminated, and providing guarantees against future liability related to site contamination.'
    },
    {
      id: 4,
      question: 'How can Envi-Comm help prepare a facility for a successful ISO 14001 surveillance audit?',
      answer: 'Our specialization provides the technical regulatory foundation for your ISO 14001 EMS. We ensure the legal compliance register is current, the PCO documentation is audit-ready, and the environmental aspects and impacts assessment is robustly linked to mandatory DENR requirements.'
    },
    {
      id: 5,
      question: 'If a facility inherits an environmental violation during acquisition, what legal defense is available?',
      answer: 'If a violation is discovered during Environmental Due Diligence (EDD), the buyer can use the EDD report as evidence to support a Good Faith Defense or mitigate inherited penalties, provided the buyer acts immediately to implement a corrective action plan certified by an environmental specialist.'
    }
  ]
  },
  {
  id: 21,
  title: 'XXI. Environmental Impact Statement (EIS) and EIA Process',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What is the EIS Scoping process, and why is it critical to the ECC application?',
      answer: 'Scoping is the mandatory first stage of the EIS preparation where the proponent, the DENR-EMB, and stakeholders agree on the scope of the EIA study. It defines the specific environmental issues, extent of data collection, and methods to be used. Failure to properly scope leads to an incomplete study and immediate rejection of the ECC application.'
    },
    {
      id: 2,
      question: 'How does the EIA Review Committee evaluate the technical soundness of an EIS?',
      answer: 'The EIA Review Committee (composed of independent, accredited experts) evaluates the EIS based on three criteria: Technical Soundness (accuracy of data and mitigation effectiveness), Integration of Environmental Concerns in project planning, and Social Acceptability (public participation). They look for robust, verifiable, scientific data.'
    },
    {
      id: 3,
      question: 'What is the Proponent\'s accountability statement in the EIS, and what does it legally entail?',
      answer: 'The Accountability Statement is a notarized declaration signed by the project proponent and the EIA Preparer (your consultant) attesting to the truth, accuracy, and completeness of all information in the EIS. Legally, it makes the proponent liable for any falsification or misrepresentation of data.'
    },
    {
      id: 4,
      question: 'What specific types of socioeconomic data must be included in an EIS?',
      answer: 'An EIS must include baseline socioeconomic data on the Affected Communities, covering demographics, livelihood sources, health, education, cultural practices, and community perception of the project. This data is crucial for formulating the Social Development Plan (SDP) and assessing project acceptability.'
    },
    {
      id: 5,
      question: 'Can an EIS be processed simultaneously with other business registration requirements?',
      answer: 'Yes, the ECC/EIS process, which is highly specialized, runs parallel to general business registration (SEC/DTI, LGU Permits). While general consultants handle the latter, a dedicated environmental consultant is essential to manage the simultaneous preparation of the technical EIS report required by the EMB.'
    }
  ]
  },
  {
  id: 22,
  title: 'XXII. Wastewater Discharge Permit (DP) Compliance',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What is the Load-Based Fee, and how is it calculated for the Discharge Permit?',
      answer: 'The Load-Based Fee is a charge implemented under the Clean Water Act (R.A. 9275) based on the volume and pollutant load (e.g., $\text{BOD}_5$, $\text{TSS}$) of the effluent discharged by a facility. It is calculated using the formula $\text{L}n \times \text{R}$, where $\text{L}n$ is the net pollution load and $\text{R}$ is the rate per kilogram. It incentivizes pollution reduction.'
    },
    {
      id: 2,
      question: 'What is the mandatory frequency for effluent monitoring required for a Discharge Permit?',
      answer: 'The Discharge Permit (DP) typically mandates quarterly effluent monitoring. The sampling and analysis must be conducted by a DENR-accredited third-party laboratory to ensure objectivity. The results are critical data points for the submission of the quarterly SMR.'
    },
    {
      id: 3,
      question: 'What is an Engineer\'s Report, and why is it required for a new Discharge Permit?',
      answer: 'The Engineer\'s Report is a key technical requirement for a new DP. It is prepared and sealed by a registered Chemical or Sanitary Engineer and details the entire wastewater management system, including the design, capacity, treatment process, and efficiency of the Wastewater Treatment Facility (WTF).'
    },
    {
      id: 4,
      question: 'How does a facility demonstrate compliance with the Clean Water Act\'s "No-Discharge" condition?',
      answer: 'If a facility operates a closed-loop system or utilizes a third-party desludging/hauling service with no discharge to a water body, it must submit an Affidavit of No Discharge and proof of contract/disposal receipts during DP renewal or audit to maintain compliance status.'
    },
    {
      id: 5,
      question: 'What specific parameters of the receiving body of water must be analyzed for a DP application?',
      answer: 'The DP application requires the identification and official classification of the receiving body of water (e.g., Class C river, Class SB coastal water). Depending on this classification, the permit will enforce a corresponding stricter set of effluent standards to protect the water quality.'
    }
  ]
  },
  {
  id: 23,
  title: 'XXIII. SMR and CMR (Quarterly and Semi-Annual Reports)',
  subtitle: '',
  faqs: [
    {
      id: 1,
      question: 'What is the fundamental difference in the scope and frequency between the SMR and CMR?',
      answer: 'The Self-Monitoring Report (SMR) is a quarterly report focused on compliance with specific sectoral laws (Air, Water, Waste, Toxic Substances). The Compliance Monitoring Report (CMR) is a semi-annual report (Module 5 of the SMR) focused on compliance with the general conditions of the ECC and the status of the Environmental Management Plan (EMP).'
    },
    {
      id: 2,
      question: 'What are the key modules within the SMR that must be completed by a manufacturing facility?',
      answer: 'A typical manufacturing facility must complete: Module 1 (General Info), Module 2 (R.A. 6969 for Hazardous Waste), Module 3 (R.A. 9275 for Water), Module 4 (R.A. 8749 for Air), and Module 5 (CMR for ECC conditions). Only applicable modules are submitted.'
    },
    {
      id: 3,
      question: 'What is the PCO\'s responsibility regarding the laboratory results included in the SMR?',
      answer: 'The Pollution Control Officer (PCO) is responsible for ensuring the integrity, validity, and promptness of all laboratory results (air emissions, water effluent) submitted with the SMR. The PCO must sign and certify these results, making them a crucial part of the compliance process.'
    },
    {
      id: 4,
      question: 'How does the DENR use the SMR/CMR submissions for regulatory enforcement?',
      answer: 'The SMR/CMR is the primary compliance tool for the DENR. They use the submitted data (pollution levels, waste volumes) to trigger field validation inspections, assess potential non-compliance, and calculate Load-Based Fees. Inaccurate or late reporting can trigger a Notice of Violation (NOV).'
    },
    {
      id: 5,
      question: 'Is online submission of SMR and CMR mandatory in the Philippines?',
      answer: 'Yes, the DENR-EMB generally mandates the use of its Online Permitting and Monitoring System (OPMS) for the submission of SMR and CMR. This digitized system enhances monitoring efficiency but requires the PCO and consultant to be proficient in the digital platform.'
    }
    ]
  },
  {
  id: 25,
  title: 'XXIV. TSD and TRC',
  subtitle: '(Hazardous Waste Management)',
  faqs: [
    {
      id: 1,
      question: 'What are the requirements for a facility to be accredited as a Treatment, Storage, and Disposal (TSD) Facility?',
      answer: 'A TSD Facility requires a separate TSD Facility Permit from the EMB (often valid for only one year), an ECC for the TSD operation itself, a Contingency/Emergency Plan, proof of Financial Guarantee (EGF/surety bond), and detailed plans for each process (e.g., solidification, thermal treatment).'
    },
    {
      id: 2,
      question: 'What is the purpose of the Transporter Registration Certificate (TRC)?',
      answer: 'The TRC is issued to companies that transport hazardous waste on behalf of generators. It certifies that the transporter\'s vehicles, drivers, emergency plans, and financial guarantees comply with R.A. 6969 standards, ensuring safe movement from the generator to the TSD facility.'
    },
    {
      id: 3,
      question: 'What is the Hazardous Waste Manifest System, and how does it relate to the TSD and TRC?',
      answer: 'The Manifest System is the legal document (often electronic) that tracks hazardous waste from "cradle-to-grave." The generator initiates it, the TRC-accredited transporter signs and carries it, and the TSD Facility signs upon receipt. It ensures accountability at every stage of the waste chain.'
    },
    {
      id: 4,
      question: 'What is the required personnel training for employees involved in hazardous waste handling and transport?',
      answer: 'All personnel involved in the generation, storage, or transport of hazardous waste must undergo mandatory training on topics like waste identification, labeling, safety data sheets, Personal Protective Equipment (PPE) use, and Emergency and Contingency Planning (often a minimum of 8 hours).'
    },
    {
      id: 5,
      question: 'Can a company store hazardous waste on-site indefinitely while waiting for a TSD facility?',
      answer: 'No. R.A. 6969 imposes strict storage limitations (typically 90 days, varying by waste type and volume) on the generator. Beyond this period, the waste must be manifested and transported to an accredited TSD facility. Non-compliance with storage limits is a serious violation.'
    }
  ]
  }
])

const openIndex = ref(null)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
  .faq {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.faq__title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.faq__subtitle {
  display: block;
  font-size: 1.75rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-top: 0.2rem;
}

.faq__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq__item {
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.faq__question {
  width: 100%;
  padding: 1.1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  gap: 1rem;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 600;
  color: #2c7a3f; /* green text like screenshot */
  background: transparent;
  border: none;
  cursor: pointer;
}

.faq__question--active {
  background-color: #f5faf6;
}

.faq__icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.faq__icon svg {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
  color: #2c7a3f;
}

.faq__icon--open {
  transform: rotate(180deg);
}

.faq__answer-wrapper {
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.faq__answer {
  padding: 0 1.25rem 1rem;
  font-size: 0.95rem;
  color: #555;
}

/* small screens */
@media (max-width: 600px) {
  .faq__title {
    font-size: 1.4rem;
  }

  .faq__question {
    font-size: 0.95rem;
    padding: 0.9rem 1rem;
  }
}
</style>
