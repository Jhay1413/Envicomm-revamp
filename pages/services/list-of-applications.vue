<template>
    <!-- hero section  -->
    <section
        class="bg-[url('/assets/images/main-imgs/services/application-and-permitting.jpg')] bg-cover bg-left md:bg-top min-h-[400px] 4k:min-h-[1000px] py-20 4k:py-40 w-full px-10 md:px-20"
    >
        <div class="md:max-w-[35%] text-white">
            <h1 class="text-2xl md:text-5xl 4k:text-6xl mb-5">
                List of DENR: Applications and Permits
            </h1>
            <p class="text-xl md:text-2xl 4k:text-3xl">
                Experience a smarter, faster way to handle permitting — making project success
                simple.
            </p>
        </div>
    </section>
    <!-- list of application  -->
    <section class="py-10 md:py-20">
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-3 4k:grid-cols-5 gap-5">
                <!-- item 1  -->
                <NuxtLink
                    class="relative group"
                    to="/services/environmental-compliance-certificate"
                >
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Environmental Compliance Certificate (ECC): Technical & Non-Technical
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The
                            <span class="font-bold text-[#86B93F]"
                                >Environmental Compliance Certificate</span
                            >
                            is essential for environmentally critical projects, enabling them to
                            progress to the next planning stage.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 2  -->
                <NuxtLink class="relative group" to="/services/certificate-of-non-coverage">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Certificate of Non-Coverage (CNC)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            Project proponents for undertakings deemed not environmentally critical
                            need a <span class="font-bold text-[#86B93F]">CNC</span> from DENR to
                            proceed with their plans.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 3  -->
                <NuxtLink class="relative group" to="/services/discharge-permit">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Discharge Permit (DP)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            Entities discharging wastewater into water bodies require a DENR
                            <span class="font-bold text-[#86B93F]">Discharge Permit</span> to ensure
                            compliance with environmental standards and prevent pollution.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 4  -->
                <NuxtLink class="relative group" to="/services/hazardous-waste-generator-id">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Hazardous Waste Generator ID (HWID)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            A DENR <span class="font-bold text-[#86B93F]">HWID</span> is for
                            entities generating hazardous waste, ensuring proper tracking,
                            management, and compliance with environmental laws for safe disposal.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 5  -->
                <NuxtLink class="relative group" to="/services/permit-to-operate">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Permit to Operate (PTO)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            A DENR
                            <span class="font-bold text-[#86B93F]">Permit to Operate</span> is
                            required for businesses using equipment that emits air pollutants,
                            ensuring compliance with the Clean Air Act.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 6  -->
                <NuxtLink class="relative group" to="/services/pollution-control-officer">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Pollution Control Officer (PCO)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            DENR-accredited <span class="font-bold text-[#86B93F]">PCO</span> , a
                            professional managing your establishment's environmental compliance and
                            pollution control programs effectively.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 7  -->
                <NuxtLink class="relative group" to="/services/treatment-storage-and-disposal">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Treatment, Storage and Disposal Facility (TSD) Application
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            A DENR <span class="font-bold text-[#86B93F]">TSD</span> Application is
                            for facilities that treat, store, or dispose of hazardous wastes,
                            ensuring safe, environmentally sound management and compliance.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 9  -->
                <NuxtLink class="relative group" to="/services/small-quantity-importation">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Small Quantity Importation (SQI) Clearance
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            A DENR
                            <span class="font-bold text-[#86B93F]"
                                >Small Quantity Importation Clearance</span
                            >
                            permits importing limited amounts of chemical substances not yet on the
                            Philippine Inventory, for specific, controlled uses.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 10  -->
                <NuxtLink
                    class="relative group"
                    to="/services/transporter-registration-certificate"
                >
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Transporter Registration Certificate (TRC)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The
                            <span class="font-bold text-[#86B93F]"
                                >Transporter Registration Certificate</span
                            >
                            application is for permitting the transport of hazardous wastes or
                            chemicals, ensuring safe and regulated movement.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 11  -->
                <NuxtLink class="relative group" to="/services/permit-to-transport">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Permit to Transport (PTT)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The
                            <span class="font-bold text-[#86B93F]">Permit to Transport</span> allows
                            hazardous waste generators and transporters to legally move hazardous
                            wastes to accredit ed TSD facilities.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 12  -->
                <NuxtLink class="relative group" to="/services/chemical-control-order">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Chemical Control Order (CCO)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The
                            <span class="font-bold text-[#86B93F]">Chemical Control Order</span>
                            regulates or prohibits specific chemicals posing serious risks to public
                            health and the environment.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 13  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Importation Clearance (IC) Application
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The
                            <span class="font-bold text-[#86B93F]">Importation Clearance</span> is
                            required for controlled chemicals or wastes, ensuring compliance with
                            environmental laws before entry into the Philippines.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 14  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Ozone Depleting Substances (ODS) Dealers & Resellers Registration
                            Application
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            This DENR application registers Dealers & Resellers of
                            <span class="font-bold text-[#86B93F]"> ODS</span>, ensuring controlled
                            trade and phase-out in line with environmental protocols.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 15  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Philippine Inventory of Chemicals & Chemical Substance (PICCS)
                            Certificate
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            A DENR <span class="font-bold text-[#86B93F]">PICCS</span> Certificate
                            confirms a chemical substance is listed on the Philippine Inventory,
                            allowing its legal import, manufacture, or use.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 16  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Pre-Manufacturing & Pre-Importation Notification (PMPIN)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR <span class="font-bold text-[#86B93F]">PMPIN</span> is for new
                            chemical substances, ensuring environmental and health risk assessment
                            before local production or entry.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 17  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Priority Chemicals List (PCL) Compliance Certificate
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The
                            <span class="font-bold text-[#86B93F]">PCL Compliance Certificate</span>
                            is for chemicals on the Priority Chemicals List, ensuring safe
                            management, handling, and disposal according to regulations.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 18  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Mines & Geosciences Bureau (MGB) Clearance
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR <span class="font-bold text-[#86B93F]">MGB Clearance </span>
                            is for projects involving mineral resources or geological hazards,
                            ensuring compliance with mining and geosciences regulations.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 19  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Mineral Processing Permit (MPP)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR <span class="font-bold text-[#86B93F]">MPP</span> authorizes
                            mineral processing operations, ensuring compliance with environmental
                            and mining regulations for sustainable resource utilization.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 20  -->
                <NuxtLink class="relative group" to="/services/certificate-of-non-overlap">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Certificate of Non-Overlap (CNO)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            DENR
                            <span class="font-bold text-[#86B93F]">Certificate of Non-Overlap</span>
                            confirms a proposed project area does not infringe on ancestral domains
                            or protected areas.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 21  -->
                <NuxtLink class="relative group" to="/services/forest-land-use-agreement">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Forest Land Use Agreement (FLAg)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR
                            <span class="font-bold text-[#86B93F]">Forest Land Use Agreement </span>
                            allows temporary use of forestlands for specific purposes, ensuring
                            sustainable management and conservation practices.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 21  -->
                <NuxtLink class="relative group" to="/services/special-land-use-permit">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Special Land Use Permit (SLUP)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            DENR
                            <span class="font-bold text-[#86B93F]">Special Land Use Permit </span>
                            allows temporary, specific use of forest lands or public domains for
                            activities like ecotourism, without transferring ownership.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 22  -->
                <!-- <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Forest Land Use Agreement
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            DENR
                            <span class="font-bold text-[#86B93F]">Special Land Use Permit </span>
                            allows temporary, specific use of forest lands or public domains for
                            activities like ecotourism, without transferring ownership.
                        </p>
                    </div>
                </NuxtLink> -->
                <!-- item 23  -->
                <NuxtLink
                    class="relative group"
                    to="/services/special-use-agreement-in-protected-areas"
                >
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Special Use Agreement in Protected Areas (SAPA)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The
                            <span class="font-bold text-[#86B93F]"
                                >Special Use Agreement in Protected Areas
                            </span>
                            , from DENR permits sustainable, non-destructive use of specific zones
                            within protected areas for compatible activities.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 24  -->
                <NuxtLink class="relative group" to="/services/tree-cutting-permit">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Tree Cutting Permit (TCP)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR
                            <span class="font-bold text-[#86B93F]">Tree Cutting Permit </span> is
                            required for legally cutting trees, ensuring sustainable forest
                            management and preventing unauthorized deforestation.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 25  -->
                <NuxtLink class="relative group" to="/services/area-clearance">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Area Clearance (AC)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR <span class="font-bold text-[#86B93F]">Area Clearance </span>
                            is for projects requiring land use conversion or occupancy in
                            forestlands/protected areas, ensuring environmental compatibility.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 25  -->
                <NuxtLink class="relative group" to="/services/foreshore-lease-agreement">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Foreshore Lease Agreement (FLA)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR
                            <span class="font-bold text-[#86B93F]">Foreshore Lease Agreement </span>
                            grants temporary use of foreshore lands and reclaimed areas for
                            specific, approved purposes.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 26  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Forest Land Grazing Management Agreement (FLGMA)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR <span class="font-bold text-[#86B93F]">FLGMA </span>
                            allows qualified individuals/entities to manage and utilize specific
                            forest lands for grazing purposes under sustainable practices.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 27  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Integrated Forest Management Agreement (IFMA)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            An <span class="font-bold text-[#86B93F]">IFMA </span> from DENR allows
                            private entities to manage, develop, and utilize forest resources
                            sustainably within a defined area for a specific period.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 28  -->
                <NuxtLink class="relative group" to="/services/miscellaneous-lease-agreement">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Miscellaneous Lease Agreement (MLA)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR
                            <span class="font-bold text-[#86B93F]"
                                >Miscellaneous Lease Agreement
                            </span>
                            grants temporary occupancy and use of public lands not covered by
                            specific laws, for various purposes.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 29  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Socialized Industrial Forest Management Agreement (SIFMA)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR
                            <span class="font-bold text-[#86B93F]"
                                >Socialized Industrial Forest Management Agreement
                            </span>
                            empowers communities to develop and manage specific forestlands for
                            sustainable livelihoods and production.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 30  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Land Use Classification (LUC)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR
                            <span class="font-bold text-[#86B93F]">Land Use Classification </span>
                            determines appropriate activities for specific land areas, guiding
                            sustainable development and environmental protection.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 31  -->
                <NuxtLink class="relative group" to="/services/gratuitous-special-use-permit">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Gratuitous Special Use Permit (GSUP)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The Gratuitous
                            <span class="font-bold text-[#86B93F]">Special Use Permit </span>
                            from DENR allows free, temporary use of forestlands or protected areas
                            for non-commercial, public interest activities.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 32  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Environmental Technology Verification (ETV)
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR Environmental Technology Verification independently verifies
                            the performance of environmental technologies, promoting reliable and
                            effective solutions for pollution control.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 33  -->
                <NuxtLink
                    class="relative group"
                    to="/services/national-water-resources-board-permit"
                >
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            National Water Resource Board (NWRB) Clearance
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The <span class="font-bold text-[#86B93F]">NWRB Clearance</span> (or
                            Water Permit) is for obtaining rights to appropriate and use water from
                            any source, ensuring sustainable water resource management.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 34  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Protected Area Management Board (PAMB) Clearance
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR <span class="font-bold text-[#86B93F]">PAMB Clearance</span> is
                            required for activities within Protected Areas, ensuring consistency
                            with conservation plans and sustainable resource use.
                        </p>
                    </div>
                </NuxtLink>
                <!-- item 35  -->
                <NuxtLink class="relative group" to="/coming-soon">
                    <div
                        class="absolute inset-0 w-full h-full opacity-100 z-10 group-hover:opacity-0 group-active:opacity-100 group-active:bg-[#86B93F] transition-all duration-300 bg-[#547326] py-8 px-10 rounded-lg flex items-center justify-center"
                    >
                        <h3 class="text-white text-lg md:text-xl 4k:text-3xl text-center">
                            Philippine Reclamation Authority (PRA) Clearance
                        </h3>
                    </div>
                    <div
                        class="flex justify-center items-center w-full h-full text-black bg-white border-[3px] border-[#547326] py-5 px-3 rounded-lg"
                    >
                        <p class="text-md md:text-base 4k:text-lg text-center">
                            The DENR <span class="font-bold text-[#86B93F]">PRA Clearance</span> is
                            for reclamation projects, signifying environmental compliance and
                            allowing development to proceed in coastal or submerged areas.
                        </p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
useHead({
    title: "List of DENR: Applications and Permits - Envi-Comm Corporation",
});
</script>

<style lang="scss" scoped></style>
