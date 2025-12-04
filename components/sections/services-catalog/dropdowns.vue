<template>
  <div class="accordion-container">
    <div 
      v-for="(item, index) in accordionItems" 
      :key="index" 
      class="accordion-item pb-4"
    >
      <button 
        class="accordion-header" 
        @click="toggle(index)"
        :class="{ active: openIndex === index }"
      >
        <span class="accordion-title">{{ item.title }}</span>
        <span class="accordion-icon" :class="{ rotated: openIndex === index }">
          ▼
        </span>
      </button>
      
      <div 
        class="accordion-content" 
        :class="{ open: openIndex === index }"
      >
        <div class="accordion-body">
          <div 
            v-for="(subItem, subIndex) in item.items" 
            :key="subIndex" 
            class="sub-item"
          >
            <div class="sub-item-header">
              <h3 class="sub-item-title">{{ subItem.title }}</h3>
              <input type="checkbox" class="sub-item-checkbox">
            </div>
            <p class="sub-item-description">{{ subItem.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openIndex: null,
      accordionItems: [
        {
          title: 'Applications & Permits',
          items: [
            {
              title: 'Environmental Compliance Certificate',
              description: 'The Environmental Compliance Certificate is essential for environmentally critical projects, enabling them to progress to the next planning stage.'
            },
            {
              title: 'Certificate of Non-Coverage',
              description: 'Project proponents for undertakings deemed not environmentally critical need a CNC from DENR to proceed with their plans.'
            },
            {
              title: 'Discharge Permit',
              description: 'Entities discharging wastewater into water bodies require a DENR Discharge Permit to ensure compliance with environmental standards and prevent pollution.'
            },
            {
              title: 'Haz Waste Generator\'s ID',
              description: 'A DENR HWID is for entities generating hazardous waste, ensuring proper tracking, management, and compliance with environmental laws for safe disposal.'
            },
            {
              title: 'Permit to Operate',
              description: 'A DENR Permit to Operate is required for businesses using equipment that emits air pollutants, ensuring compliance with the Clean Air Act.'
            },
            {
              title: 'Pollution Control Officer (PCO)',
              description: 'DENR-accredited PCO, a professional managing your establishment\'s environmental compliance and pollution control programs responsibly.'
            },
            {
              title: 'Treatment, Storage and Disposal Facility (TSD) Application',
              description: 'A DENR TSD Application is for facilities that treat, store, or dispose of hazardous wastes, ensuring safe, environmentally sound management and compliance.'
            },
            {
              title: 'Small Quantity Importation (SQI) Clearance',
              description: 'A DENR Small Quantity Importation Clearance permits importing limited amounts of chemical substances not yet on the Philippine Inventory, for specific, controlled uses.'
            },
            {
              title: 'Transporter Registration Certificate (TRC)',
              description: 'The Transporter Registration Certificate application is for permitting the transport of hazardous wastes or chemicals, ensuring safe and regulated movement.'
            },
            {
              title: 'Permit to Transport (PTT)',
              description: 'The Permit to Transport allows hazardous waste generators and transporters to legally move hazardous wastes to accredited TSD facilities.'
            },
            {
              title: 'Chemical Control Order (CCO)',
              description: 'The Chemical Control Order regulates or prohibits specific chemicals posing serious risks to public health and the environment.'
            },
            {
              title: 'Importation Clearance (IC) Application',
              description: 'The Importation Clearance is required for controlled chemicals or wastes, ensuring compliance with environmental laws before entry into the Philippines.'
            },
            {
              title: 'Ozone Depleting Substances (ODS) Dealers & Resellers Registration Application',
              description: 'This DENR application registers Dealers & Resellers of ODS, ensuring controlled trade and phase-out in line with environmental protocols.'
            },
            {
              title: 'Philippine Inventory of Chemicals & Chemical Substance (PICCS) Certificate',
              description: 'A DENR PICCS Certificate confirms a chemical substance is listed on the Philippine Inventory, allowing its legal import, manufacture, or use.'
            },
            {
              title: 'Pre-Manufacturing & Pre-Importation Notification (PMPIN)',
              description: 'The DENR PMPIN is for new chemical substances, ensuring environmental and health risk assessment before local production or entry.'
            },
            {
              title: 'Priority Chemicals List (PCL) Compliance Certificate',
              description: 'The PCL Compliance Certificate is for chemicals on the Priority Chemicals List, ensuring safe management, handling, and disposal according to regulations.'
            },
            {
              title: 'Mines & Geosciences Bureau (MGB) Clearance',
              description: 'The DENR MGB Clearance is for projects involving mineral resources or geological hazards, ensuring compliance with mining and geosciences regulations.'
            },
            {
              title: 'Mineral Processing Permit (MPP)',
              description: 'The DENR MPP authorizes mineral processing operations, ensuring compliance with environmental and mining regulations for sustainable resource utilization.'
            },
            {
              title: 'Certificate of Non-Overlap (CNO)',
              description: 'DENR Certificate of Non-Overlap confirms a proposed project area does not infringe on ancestral domains or protected areas.'
            },
            {
              title: 'Forest Land Use Agreement (FLAg)',
              description: 'The DENR Forest Land Use Agreement allows temporary use of forestlands for specific purposes, ensuring sustainable management and conservation practices.'
            },
            {
              title: 'Special Land Use Permit (SLUP)',
              description: 'DENR Special Land Use Permit allows temporary, specific use of forest lands or public domains for activities like ecotourism, without transferring ownership.'
            },
            {
              title: 'Special Use Agreement in Protected Areas (SAPA)',
              description: 'The Special Use Agreement in Protected Areas, from DENR permits sustainable, non-destructive use of specific zones within protected areas for compatible activities.'
            },
            {
              title: 'Tree Cutting Permit (TCP)',
              description: 'The DENR Tree Cutting Permit is required for legally cutting trees, ensuring sustainable forest management and preventing unauthorized deforestation.'
            },
            {
              title: 'Area Clearance (AC)',
              description: 'The DENR Area Clearance is for projects requiring land use conversion or occupancy in forestlands/protected areas, ensuring environmental compatibility.'
            },
            {
              title: 'Foreshore Lease Agreement (FLA)',
              description: 'The DENR Foreshore Lease Agreement grants temporary use of foreshore lands and reclaimed areas for specific, approved purposes.'
            },
            {
              title: 'Forest Land Grazing Management Agreement (FLGMA)',
              description: 'The DENR FLGMA allows qualified individuals/entities to manage and utilize specific forest lands for grazing purposes under sustainable practices.'
            },
            {
              title: 'Integrated Forest Management Agreement (IFMA)',
              description: 'An IFMA from DENR allows private entities to manage, develop, and utilize forest resources sustainably within a defined area for a specific period.'
            },
            {
              title: 'Miscellaneous Lease Agreement (MLA)',
              description: 'The DENR Miscellaneous Lease Agreement grants temporary occupancy and use of public lands not covered by specific laws, for various purposes.'
            },
            {
              title: 'Socialized Industrial Forest Management Agreement (SIFMA)',
              description: 'The DENR Socialized Industrial Forest Management Agreement empowers communities to develop and manage specific forestlands for sustainable livelihoods and production.'
            },
            {
              title: 'Land Use Classification (LUC)',
              description: 'The DENR Land Use Classification determines appropriate activities for specific land areas, guiding sustainable development and environmental protection.'
            },
            {
              title: 'Gratuitous Special Use Permit (GSUP)',
              description: 'The Gratuitous Special Use Permit from DENR allows free, temporary use of forestlands or protected areas for non-commercial, public interest activities.'
            },
            {
              title: 'Environmental Technology Verification (ETV)',
              description: 'The DENR Environmental Technology Verification independently verifies the performance of environmental technologies, promoting reliable and effective solutions for pollution control.'
            },
            {
              title: 'National Water Resource Board (NWRB) Clearance',
              description: 'The NWRB Clearance (or Water Permit) is for obtaining rights to appropriate and use water from any source, ensuring sustainable water resource management.'
            },
            {
              title: 'Protected Area Management Board (PAMB) Clearance',
              description: 'The DENR PAMB Clearance is required for activities within Protected Areas, ensuring consistency with conservation plans and sustainable resource use.'
            },
            {
              title: 'Philippine Reclamation Authority (PRA) Clearance',
              description: 'The DENR PRA Clearance is for reclamation projects, signifying environmental compliance and allowing development to proceed in coastal or submerged areas.'
            }
          ]
        },
      {
  title: 'Monitoring & Reporting',
  items: [
    {
      title: 'Compliance Monitoring and Verification Report',
      description: 'The act of collecting, analyzing, and reviewing information to ensure that organizations are complying with their compliance obligations in regards to environmental effects.'
    },
    {
      title: 'Compliance Monitoring Report',
      description: 'A written description of the findings of an investigation, like on-site monitoring, citing each requirement found in non-compliance.'
    },
    {
      title: 'Engineers Report for Permit to Operate Application',
      description: 'A document that provides a full analysis of assessing damages and providing objective reports.'
    },
    {
      title: 'Environmental Monitoring Report',
      description: 'A document that summarizes the results of measuring and assessing the environmental impacts of a project or activity.'
    },
    {
      title: 'Self-Monitoring Report',
      description: 'A report submitted by establishments to DENR- EMB to provide information and updates on the environmental compliance and overall environmental performance of the establishments.'
    }
  ]
},
        {
  title: 'Mapping & Planning',
  items: [
    {
      title: 'Comprehensive Development and Management Plan',
      description: 'This plan focuses on balancing environmental, social, and economic factors to minimize negative impacts and ensure long-term sustainability in development activities.'
    },
    {
      title: 'Environmental Management Plan',
      description: 'A strategic document that outlines the measures and actions necessary to manage and mitigate the environmental impacts of a project.'
    },
    {
      title: 'Environmental Monitoring Plan',
      description: 'A structured framework designed to systematically collect, analyze, and interpret data related to environmental conditions over the life of a project.'
    },
    {
      title: 'Indicative Management Plan',
      description: 'A strategic document that outlines the framework and key components for managing a project, often within the context of environmental and sustainable development.'
    },
    {
      title: 'Feasibility Study',
      description: 'An assessment of the practicality and potential success of a proposed project or plan.'
    },
    {
      title: 'Cistern Tank Design',
      description: 'Involves multiple steps to ensure it effectively collects, stores, and delivers water for various uses.'
    },
    {
      title: 'Material Recovery Facility Design',
      description: 'Involves several key considerations to efficiently sort, process, and prepare recyclable materials for sale to end-user manufacturers.'
    },
    {
      title: 'Hazardous Waste Storage Facility Design',
      description: 'Careful planning to ensure safety, compliance with regulations, and environmental protection.'
    },
    {
      title: 'Topographical Plans',
      description: 'Detailed maps that depict the physical features and terrain characteristics of a specific area of land.'
    },
    {
      title: 'Architectural Plans',
      description: 'Blueprints or construction drawings that communicate the design intent and specifications for a building or structure.[web:24]'
    },
    {
      title: 'Site Development Plan',
      description: 'A comprehensive document that outlines the proposed development of a specific piece of land or site.[web:27]'
    },
    {
      title: 'Floor Plans',
      description: 'Two-dimensional diagrams that depict the layout and spatial arrangement of a building’s interior spaces, including rooms, walls, doors, windows, and other architectural features.[web:32]'
    },
    {
      title: 'Elevations',
      description: 'Two-dimensional representations of the exterior or interior faces of a building or structure as seen from different viewpoints.[web:35][web:38]'
    },
    {
      title: 'Equipment Specification',
      description: 'A written document or manual that provides technical details such as capacity and safety numbers to ensure that the equipment will meet program needs and local code requirements.'
    },
    {
      title: 'Cost Estimates',
      description: 'The process of forecasting the cost and other resources needed to complete a project within a defined scope.'
    },
    {
      title: 'Sections',
      description: 'Distinct parts or components that make up a comprehensive plan, organizing the plan into coherent segments that address specific aspects of the project or initiative.[web:16]'
    },
    {
      title: 'Detailed/Blow-Up Plans',
      description: 'Enlarged views or sections of specific areas or components within a larger architectural or engineering drawing.'
    },
    {
      title: 'Material Schedules',
      description: 'A detailed list of all materials required for construction, including quantities, specifications, and locations.'
    },
    {
      title: 'Perspectives',
      description: 'Drawings that represent the three-dimensional world on a two-dimensional surface, creating the illusion of depth and space so distance, size, and scale are accurately depicted.'
    },
    {
      title: 'Interior Perspective',
      description: 'A representation of an indoor scene that accurately depicts the space, proportions, and depth.'
    },
    {
      title: 'Exterior Perspective',
      description: 'A realistic or stylized representation of outdoor scenes, showcasing buildings, landscapes, and other exterior elements.'
    },
    {
      title: 'Aerial Perspective',
      description: 'Used to create the illusion of depth and distance in a drawing by simulating the effect of the atmosphere on objects seen from a distance.'
    },
    {
      title: 'Scaled Model/Diorama',
      description: 'A carefully executed scaled representation used to accurately depict a real or imagined scene in miniature form.'
    },
    {
      title: 'Walkthrough Video',
      description: 'A short video that covers the entire layout of a property and highlights important features.'
    },
    {
      title: 'As-Built Plan',
      description: 'A drawing that accurately presents the existing dimensions and conditions of a building after construction or remodeling.'
    },
    {
      title: 'Detailed Plans',
      description: 'Manufacturing drawings that specify the exact form and shape of a component.'
    },
    {
      title: 'Septic Tank Details',
      description: 'A detailed drawing of the strength and size of concrete and steel of a reinforced concrete septic tank.'
    },
    {
      title: 'Wastewater Treatment Facility Details',
      description: 'A plan for constructing a wastewater treatment facility that includes condition, design capacity, and treatment capabilities of each treatment unit.[web:33][web:39]'
    }
  ]
}
,
        {
  title: 'Professional & Specialized Authority',
  items: [
    {
      title: 'Rainwater Recycling Program',
      description: 'An initiative for conserving water and promoting sustainability.'
    },
    {
      title: 'In-house Environmental Program Development',
      description: 'A program to facilitate awareness and understanding of general environmental issues.'
    },
    {
      title: 'In-house Training for Environmental Practices',
      description: 'Training focused on educating individuals and organizations about sustainable practices and environmental regulations.'
    },
    {
      title: 'Good Housekeeping and Segregation Process',
      description: 'A process that promotes a culture of safety by practicing best solutions, such as segregating waste types for reuse or recycling.'
    },
    {
      title: 'Executive Environmental Audit',
      description: 'An assessment to determine the nature and extent of the risk of harm to human health or the environment.'
    },
    {
      title: 'Solid Waste Management Audit',
      description: 'A process used to quantify the amount and types of waste generated by an organization.'
    },
    {
      title: 'Wastewater Testing, Recycling & Facility Audit',
      description: 'Regular inspections that ensure wastewater is tested and meets minimum quality standards prior to discharge into the environment.'
    },
    {
      title: 'Community Environmental and Natural Resource Office (CENRO) Certificate',
      description: 'A certification used in the preservation and protection of natural resources and similar forest development projects.'
    },
    {
      title: 'Tree Planting Certification',
      description: 'A document issued to certify that the subject person has planted trees of any species.'
    },
    {
      title: 'Air Dispersion Modelling',
      description: 'A tool used to determine if the emissions from a source can meet a specific ambient air standard.'
    },
    {
      title: 'Traffic Impact Assessment',
      description: 'An assessment to determine the possible effects of a project on transportation and traffic systems.'
    },
    {
      title: 'Marine Study',
      description: 'The study of marine organisms, their behaviors, and their interactions with the environment.'
    },
    {
      title: 'Generating Company Registration System Account',
      description: 'A full automation and online preprocessing system for corporate registrations and related applications requiring approval.'
    },
    {
      title: 'Environmental Compliance Retainership Program',
      description: 'A program designed to streamline and manage the environmental compliance process for micro and small resorts.'
    },
    {
      title: 'Design and Build of Wastewater Treatment Facilities',
      description: 'Comprehensive solutions for the design, construction, rehabilitation, and optimization of wastewater treatment facilities, ensuring compliance with environmental regulations and sustainable water management practices.'
    }
  ]
}
,
        {
          title: 'STPs & WTPs',
          items: [
            {
              title: 'Treatment Plant Registration',
              description: 'Registration and compliance for Sewage and Water Treatment Plants.'
            }
          ]
        },
        {
          title: 'Chemical: STP & RO',
          items: [
            {
              title: 'Chemical Treatment Systems',
              description: 'Chemical treatment and reverse osmosis systems management.'
            }
          ]
        },
        {
          title: 'Renewable Energy Product & Technology',
          items: [
            {
              title: 'Renewable Energy Registration',
              description: 'Registration for renewable energy solutions and technologies.'
            }
          ]
        },
        {
          title: 'Hauling & Septage',
          items: [
            {
              title: 'Hauling Services Registration',
              description: 'Registration and compliance for hauling services and septage management.'
            }
          ]
        },
        {
          title: 'Saas Development',
          items: [
            {
              title: 'SaaS Platform Tools',
              description: 'Software as a Service development tools and resources.'
            }
          ]
        },
        {
          title: 'PCO Academy',
          items: [
            {
              title: 'PCO Training Program',
              description: 'Pollution Control Officer training and certification programs.'
            }
          ]
        },
        {
          title: 'Specialized Data Collection: Air Quality',
          items: [
            {
              title: 'Air Quality Monitoring',
              description: 'Air quality monitoring and specialized data collection services.'
            }
          ]
          },
           {
          title: 'Blogs and Commentaries',
          items: [
            {
              title: 'Air Quality Monitoring',
              description: 'Air quality monitoring and specialized data collection services.'
            }
          ]
        }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
.accordion-container {
  max-width: 750px;
  margin: 0 auto;
  padding: 20px;
  background: white;
}

.accordion-item {
  margin-bottom: 10px;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.accordion-header {
  width: 100%;
  padding: 18px 24px;
  background: #FFF;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.accordion-header:hover {
  background: linear-gradient(135deg, #7a9d2f 0%, #64793a 100%);
  transform: translateY(-1px);
}
.accordion-header:hover .accordion-title{
  color:#FFF;
}

.accordion-header.active {
  background: linear-gradient(135deg, #5a7a1f 0%, #465825 100%);
}

.accordion-title {
  font-size: 16px;
  font-weight: 600;
  color:#6b8e23;
}

.accordion-icon {
  font-size: 12px;
  color: white;
  transition: transform 0.3s ease;
  display: inline-block;
}

.accordion-icon.rotated {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
  background: #f9f9f9;
}

.accordion-content.open {
  max-height: 3000px;
}

.accordion-body {
  padding: 0;
}

.sub-item {
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s ease;
}

.sub-item:hover {
  background-color: #f9fafb;
}

.sub-item:last-child {
  border-bottom: none;
}

.sub-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}

.sub-item-title {
  font-size: 15px;
  font-weight: 600;
  color:#333;
  margin: 0;
  padding-right: 12px;
  flex: 1;
}

.sub-item-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 2px;
}

.sub-item-description {
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}
</style>