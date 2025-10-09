export const useSeo = (options = {}) => {
    const {
      title = 'Envi-Comm: DENR & EMB Compliance Consultant - Philippines',
      description = 'The top Environmental Consulting Firm for DENR (Department of Environment and Natural Resources) and EMB (Environmental Management Bureau) compliance. Serving Luzon, Metro Manila, Visayas, and Mindanao.',
      keywords = 'DENR consultant Philippines, EMB compliance, Environmental Consulting Firm, ECC, EIS, PCO, FLAg, Luzon, Manila, Visayas, Mindanao, Envi-Comm',
      bodyClass = 'overflow-x-hidden w-screen relative home-page'
    } = options
  
    useHead({
      title,
      bodyAttrs: {
        class: bodyClass
      },
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          name: 'keywords',
          content: keywords
        }
      ]
    })
  }