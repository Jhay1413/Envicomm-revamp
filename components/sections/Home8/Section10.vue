<template>
    <section class="pt-20">
        <div class="container">
            <div class="mb-[50px] text-center">
                <h3 class="text-[20px] md:text-heading-3 mb-3 uppercase" data-aos="fade-up">
                    Trusted By over 300+ clients.
                </h3>
                <p class="text-md md:text-lg 4k:text-2xl" data-aos="fade-up" data-aos-delay="300">
                    Our clients are our top priority, and we are committed to providing them with
                    the best possible experience.
                </p>
            </div>
            <!-- swiper 1  -->
            <Swiper
                :modules="[Autoplay]"
                :loop="true"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: true,
                }"
                :slides-per-view="1"
                :speed="1000"
                :spaceBetween="5"
                class="mb-5"
            >
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Mactan–Cebu_International_Airport_horizontal_logo.png"
                                alt="Mactan Cebu International Airport"
                                loading="lazy"
                                title="Mactan Cebu International Airport"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/nautilus shipyard & repair inc.jpg"
                                alt="Nautilus Shipyard & Repair Inc."
                                loading="lazy"
                                title="Nautilus Shipyard & Repair Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Lite_ferries_logo.png"
                                alt="Lite Ferries"
                                loading="lazy"
                                title="Lite Ferries"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/[CITYPNG.COM]HD Hyundai Logo Transparent Background - 2000x2000.png"
                                alt="Hyundai Logo"
                                loading="lazy"
                                title="Hyundai"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/fortune_shipworks_logo.png"
                                alt="Fortune Shipworks"
                                loading="lazy"
                                title="Fortune Shipworks"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/ABOITIZLAND-logo-logo.webp"
                                alt="ABOITIZLAND"
                                loading="lazy"
                                title="ABOITIZLAND"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Fifth AVenue property development.png"
                                alt="Fifth Avenue Property Development"
                                loading="lazy"
                                title="Fifth Avenue Property Development"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Filinvest_Land_Inc_logo (1).png"
                                alt="Filinvest Land Incorporated"
                                loading="lazy"
                                title="Filinvest Land Incorporated"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Bank_of_the_Philippine_Islands_logo.svg.png"
                                alt="Bank of the Philippine Islands"
                                loading="lazy"
                                title="Bank of the Philippine Islands"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Metropolitan_Bank_and_Trust_Company.png"
                                alt="Metrobank Bank and Trust Company"
                                loading="lazy"
                                title="Metrobank Bank and Trust Company"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/jpark-logo.png"
                                alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                                loading="lazy"
                                title="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Plantation_logo.png"
                                alt="Plantation Bay Resort and Bay"
                                loading="lazy"
                                title="Plantation Bay Resort and Bay"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Lantaw.png"
                                alt="Lantaw Native Restaurant"
                                loading="lazy"
                                title="Lantaw Native Restaurant"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Belcris Foods Inc.png"
                                alt="Belcris Foods Inc."
                                loading="lazy"
                                title="Belcris Foods Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Panasonic_logo_(Blue).png"
                                alt="Panasonic"
                                loading="lazy"
                                title="Panasonic"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/compostela.jpg"
                                alt="Municipality of Compostela"
                                loading="lazy"
                                title="Municipality of Compostela"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Compostela.png"
                                alt="Bayan ng Compostela"
                                loading="lazy"
                                title="Bayan ng Compostela"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Consolacion.png"
                                alt="bayan ng Consolacion"
                                loading="lazy"
                                title="bayan ng Consolacion"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Cordova.png"
                                alt="Municipality of Cordova"
                                loading="lazy"
                                title="Municipality of Cordova"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/DPWH.png"
                                alt="DPWH"
                                loading="lazy"
                                title="DPWH"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Dumaguete.png"
                                alt="City of Dumaguete"
                                loading="lazy"
                                title="City of Dumaguete"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Lapu-Lapu City.png"
                                alt="City of Lapu-Lapu"
                                loading="lazy"
                                title="City of Lapu-Lapu"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Madridejos,.png"
                                alt="Bayan ng Madridejos"
                                loading="lazy"
                                title="Bayan ng Madridejos"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/madridejos.jpg"
                                alt="Bayan ng Madridejos Lalawigan ng cebu"
                                loading="lazy"
                                title="Bayan ng Madridejos Lalawigan ng cebu"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Minglanilla.jpg"
                                alt="Minglanilla cebu"
                                loading="lazy"
                                title="Minglanilla cebu"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Tagbilaran.png"
                                alt="City of Tagbilaran"
                                loading="lazy"
                                title="City of Tagbilaran"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/gullas medical center.png"
                                alt="Gullas Medical Center"
                                loading="lazy"
                                title="Gullas Medical Center"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/sacred heart inc..jpg"
                                alt="Sacred Heart Hospital"
                                loading="lazy"
                                title="Sacred Heart Hospital"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/USC_university_seal.svg.png"
                                alt="USC University Seal"
                                loading="lazy"
                                title="USC University Seal"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Cebu Doctors University.png"
                                alt="Cebu Doctors University"
                                loading="lazy"
                                title="Cebu Doctors University"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/asian oriental.png"
                                alt="ASIAN ORIENTAL MEDICAL CLINIC"
                                loading="lazy"
                                title="ASIAN ORIENTAL MEDICAL CLINIC"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/j. chemie laboratories, inc..jpg"
                                alt="Jchemie Chemie Laboratories, Inc."
                                loading="lazy"
                                title="Jchemie Chemie Laboratories, Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/kevlo skinceuticals.png"
                                alt="Kevlo Skinceuticals"
                                loading="lazy"
                                title="Kevlo Skinceuticals"
                            />
                        </div>
                        <div class="overflow-hidden w-36 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/MC Skinceuticals inc..png"
                                alt="MC Skinceuticals Inc."
                                loading="lazy"
                                title="MC Skinceuticals Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/toledo city general hospital.jpg"
                                alt="Toledo City General Hospital"
                                loading="lazy"
                                title="Toledo City General Hospital"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/AJ Ledesma Construction Corp..jpg"
                                alt="AJ Ledesma Construction Corp."
                                loading="lazy"
                                title="AJ Ledesma Construction Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Asphalt Pavement Solutions, Inc..webp"
                                alt="Asphalt Pavement Solutions, Inc."
                                loading="lazy"
                                title="Asphalt Pavement Solutions, Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-40 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/cordova total services.png"
                                alt="Cordova Total Services"
                                loading="lazy"
                                title="Cordova Total Services"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/docast construction.png"
                                alt="Docast Construction"
                                loading="lazy"
                                title="Docast Construction"
                            />
                        </div>
                        <div class="overflow-hidden w-40 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/lite crete corporation.jpg"
                                alt="Lite Block"
                                loading="lazy"
                                title="Lite Block"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/nc hardrock trading company.jpg"
                                alt="NC Hardrock Trading Company"
                                loading="lazy"
                                title="NC Hardrock Trading Company"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/north core construction.png"
                                alt="North Core Construction"
                                loading="lazy"
                                title="North Core Construction"
                            />
                        </div>
                        <div class="overflow-hidden flex justify-between gap-3 items-center group">
                            <NuxtImg
                                class="w-24 group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Vic Metal Fabrication and  Environmental Services, Inc.jpg"
                                alt="Vic Metal Fabrication and  Environmental Services, Inc"
                                loading="lazy"
                                title="Vic Metal Fabrication and  Environmental Services, Inc"
                            />
                            <div>
                                <h3 class="font-semibold text-2xl">Vic Metal</h3>
                                <p class="text-[8px]">
                                    Fabrication and Environmental Services, Inc
                                </p>
                            </div>
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Vic.png"
                                alt="Vic enterprises"
                                loading="lazy"
                                title="Vic enterprises"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Young Builders Corporation.jpg"
                                alt="Young Builders Corporation"
                                loading="lazy"
                                title="Young Builders Corporation"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/3lung group corp..jpg"
                                alt="3 Lung Group Corp."
                                loading="lazy"
                                title="3 Lung Group Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Andorra Roof Tiles & Concrete Pavers.jpg"
                                alt="Andorra Roof Tiles & Concrete Pavers"
                                loading="lazy"
                                title="Andorra Roof Tiles & Concrete Pavers"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/APO.png"
                                alt="APO"
                                loading="lazy"
                                title="APO"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-[60%] group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Cebu Cube Ice Corp.png"
                                alt="Cebu Cube Ice Corp."
                                loading="lazy"
                                title="Cebu Cube Ice Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/cebu homecraft consolidated.webp"
                                alt="Cebu Homecraft Consolidated"
                                loading="lazy"
                                title="Cebu Homecraft Consolidated"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/ceres summit corp.png"
                                alt="Ceres Summit Corp."
                                loading="lazy"
                                title="Ceres Summit Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/chires trading co., inc.jpg"
                                alt="Chires Trading Co"
                                loading="lazy"
                                title="Chires Trading Co"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/eco-global.png"
                                alt="Eco Global"
                                loading="lazy"
                                title="Eco Global"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/EuroLab.jpg"
                                alt="EuroLab"
                                loading="lazy"
                                title="EuroLab"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/golden east marine products, inc.png"
                                alt="Golden East Marine Products, Inc."
                                loading="lazy"
                                title="Golden East Marine Products, Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/growers champ agri ventures corporation.png"
                                alt="Growers Champ Agri Ventures Corp."
                                loading="lazy"
                                title="Growers Champ Agri Ventures Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/ice plant.webp"
                                alt="Ice Plant"
                                loading="lazy"
                                title="Ice Plant"
                            />
                        </div>
                        <div class="overflow-hidden w-48 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/joyland industries corporation.png"
                                alt="Joyland Industries Corp."
                                loading="lazy"
                                title="Joyland Industries Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/kamanga agro industrial ecozone development corporation.jpg"
                                alt="Kamanga Agro Industrial Ecozone Development Corp."
                                loading="lazy"
                                title="Kamanga Agro Industrial Ecozone Development Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/natures legacy eximport inc..png"
                                alt="Natures Legacy Eximport Inc."
                                loading="lazy"
                                title="Natures Legacy Eximport Inc."
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-44 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/palmax solutions inc.jpg"
                                alt="Palmax Solutions Inc."
                                title="Palmax Solutions Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/precision forming corp.webp"
                                alt="Precision Forming Corp"
                                title="Precision Forming Corp"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/ravago.png"
                                alt="Ravago"
                                title="Ravago"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/SHEMBERG.jpg"
                                alt="Shemberg"
                                title="Shemberg"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/sozo industries corporation.png"
                                alt="Sozo Industries Corporation"
                                title="Sozo Industries Corporation"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/vienovo philippines inc.png"
                                alt="Vienovo Philippines Inc."
                                title="Vienovo Philippines Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Balamban Septic Tank and Waste Collection Services.png"
                                alt="Balamban Septic Tank and Waste Collection Services"
                                title="Balamban Septic Tank and Waste Collection Services"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden flex justify-between gap-3 items-center group">
                            <NuxtImg
                                class="w-24 group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Doday`s  scrap trading.jpg"
                                alt="Doday’s Scrap Trading"
                                title="Doday’s Scrap Trading"
                                loading="lazy"
                            />
                            <div>
                                <h3 class="font-semibold text-2xl">Doday’s</h3>
                                <p>Scrap Trading</p>
                            </div>
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/JKS Quarrying Services OPC.jpg"
                                alt="JKS Quarrying Services OPC"
                                title="JKS Quarrying Services OPC"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Pinoy Basurero Corporation.jpg"
                                alt="Pinoy Basurero Corporation"
                                title="Pinoy Basurero Corporation"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/amici shipyard.webp"
                                alt="Amici Shipyard"
                                title="Amici Shipyard"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/philippines trigon shipyard.webp"
                                alt="Philippines Trigon Shipyard"
                                title="Philippines Trigon Shipyard"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Bohol Water Utilities, Inc..png"
                                alt="Bohol Water Utilities, Inc."
                                title="Bohol Water Utilities, Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/je hydro and bio enrgy.jpg"
                                alt="JE Hydro and Bio Energy"
                                title="JE Hydro and Bio Energy"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-40 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Nenita’s Water Refilling Station.jpg"
                                alt="Nenita’s Water Refilling Station"
                                title="Nenita’s Water Refilling Station"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-44 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/8 star Land Development Corporation.gif"
                                alt="8 star Land Development Corporation"
                                title="8 star Land Development Corporation"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/amani grand residences.png"
                                alt="amani grand residences"
                                title="amani grand residences"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/cebu homegrown developers, inc..jpg"
                                alt="cebu homegrown developers, inc."
                                title="cebu homegrown developers, inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/cebu korona development corporation.jpg"
                                alt="cebu korona development corporation"
                                title="cebu korona development corporation"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/cebuview realty corporation.png"
                                alt="cebuview realty corporation"
                                title="cebuview realty corporation"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/deo homes and property dev`t inc.png"
                                alt="deo homes and property dev`t inc"
                                title="deo homes and property dev`t inc"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/eastland property ventures inc..png"
                                alt="eastland property ventures inc."
                                title="eastland property ventures inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/grandland.png"
                                alt="grandland"
                                title="grandland"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/juanito king & sons, inc..jpg"
                                alt="juanito king & sons, inc."
                                title="juanito king & sons, inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/lite properties inc..jpg"
                                alt="lite properties inc."
                                title="lite properties inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/mactan plains residential.png"
                                alt="mactan plains residential"
                                title="mactan plains residential"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Prime Megalith Ventures and Development Corporation.jpg"
                                alt="Prime Megalith Ventures and Development Corporation"
                                title="Prime Megalith Ventures and Development Corporation"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/true vine garden and columbary.jpg"
                                alt="true vine garden and columbary"
                                title="true vine garden and columbary"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/vn management logo.png"
                                alt="vn management logo"
                                title="vn management logo"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/fairchild cebu community multi-purpose cooperative.jpg"
                                alt="fairchild cebu community multi-purpose cooperative"
                                title="fairchild cebu community multi-purpose cooperative"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/4 A`S & G Beach Resort.png"
                                alt="4 A`S & G Beach Resort"
                                title="4 A`S & G Beach Resort"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/10k Roses.jpg"
                                alt="10k Roses"
                                title="10k Roses"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/88th avenue.jpg"
                                alt="88th avenue"
                                title="88th avenue"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/anda resort and spa - parklane bohol.jpg"
                                alt="anda resort and spa - parklane bohol"
                                title="anda resort and spa - parklane bohol"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-48 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/andy hotel.jpg"
                                alt="andy hotel"
                                title="andy hotel"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/blue pot family resort.jpg"
                                alt="blue pot family resort"
                                title="blue pot family resort"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Canberry Hotel.png"
                                alt="Canberry Hotel"
                                title="Canberry Hotel"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/carcar eco farm resorts.jpg"
                                alt="carcar eco farm resorts"
                                title="carcar eco farm resorts"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/CenturyPeak.png"
                                alt="CenturyPeak"
                                title="CenturyPeak"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/diplomat hotel.png"
                                alt="diplomat hotel"
                                title="diplomat hotel"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/go philippine island travel and tours inc..png"
                                alt="go philippine island travel and tours inc."
                                title="go philippine island travel and tours inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/hagnaya beach resort & restaurant.jpg"
                                alt="hagnaya beach resort & restaurant"
                                title="hagnaya beach resort & restaurant"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/hutscape beachfront private resort.png"
                                alt="hutscape beachfront private resort"
                                title="hutscape beachfront private resort"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/ingko costan resort.png"
                                alt="ingko costan resort"
                                title="ingko costan resort"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/j and r residences.jpg"
                                alt="j and r residences"
                                title="j and r residences"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/les maisons d`ltac.png"
                                alt="Les Maisons D’ltac"
                                title="Les Maisons D’ltac"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-48 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Lot 8 Condominium Corp.jpg"
                                alt="Lot 8 Condominium Corp"
                                title="Lot 8 Condominium Corp"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-40 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/matutinao beach resort & cottage.jpg"
                                alt="Matutinao Beach Resort & Cottage"
                                title="Matutinao Beach Resort & Cottage"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/mc rich canyoneering.webp"
                                alt="MC Rich Canyoneering"
                                title="MC Rich Canyoneering"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/nadelrmar hotel.jpg"
                                alt="Nadelrmar Hotel"
                                title="Nadelrmar Hotel"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/palalong views.jpg"
                                alt="Palalong Views"
                                title="Palalong Views"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/pescadores seaview suites, inc..png"
                                alt="Pescadores Seaview Suites Inc."
                                title="Pescadores Seaview Suites Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/q8 hotel.png"
                                alt="Q8 Hotel"
                                title="Q8 Hotel"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/queens land manor.jpg"
                                alt="Queens Land Manor"
                                title="Queens Land Manor"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/sta. fe beach club.png"
                                alt="Stanta Fe Beach Club"
                                title="Stanta Fe Beach Club"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/V8 Mountain Resort Corp.jpg"
                                alt="V8 Mountain Resort Corp"
                                title="V8 Mountain Resort Corp"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Winland Towers Condominium.jpg"
                                alt="Winland Towers Condominium"
                                title="Winland Towers Condominium"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/wnrison land inc..jpg"
                                alt="Wnrison Land Inc."
                                title="Wnrison Land Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/the italian food specialists, inc.jpg"
                                alt="The Italian Food Specialists Inc."
                                title="The Italian Food Specialists Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/cts mactan.jpg"
                                alt="CTS Mactan"
                                title="CTS Mactan"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/co jordan talaba bangus eatery.jpg"
                                alt="co jordan talaba bangus eatery"
                                title="co jordan talaba bangus eatery"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/tess and pablos lechon.jpg"
                                alt="tess and pablos lechon"
                                title="tess and pablos lechon"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Almana Power.jpg"
                                alt="Almana Power"
                                title="Almana Power"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/alsons.jpg"
                                alt="alsons"
                                title="alsons"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/e cool phil. Services corporation.jpg"
                                alt="e cool phil. Services corporation"
                                title="e cool phil. Services corporation"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-44 flex justify-center items-center group">
                            <NuxtImg
                                class="group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/tec fuel energy solutions.jpg"
                                alt="tec fuel energy solutions"
                                title="tec fuel energy solutions"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Tuburan 360 Agro-Forestry Golf Club.jpg"
                                alt="Tuburan 360 Agro-Forestry Golf Club"
                                title="Tuburan 360 Agro-Forestry Golf Club"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Atlantis Fishing Dev`t Corp..png"
                                alt="Atlantis Fishing Dev`t Corp."
                                title="Atlantis Fishing Dev`t Corp."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/green pastures funeral chapel.png"
                                alt="green pastures funeral chapel"
                                title="green pastures funeral chapel"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Paws Heaven Pet Cremation.png"
                                alt="Paws Heaven Pet Cremation"
                                title="Paws Heaven Pet Cremation"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/AIC Group of Companies Holding Corp..jpg"
                                alt="AIC Group of Companies Holding Corp."
                                title="AIC Group of Companies Holding Corp."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <NuxtImg
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="assets/images/main-imgs/clients/Benben Logistics Inc..jpg"
                                alt="Benben Logistics Inc."
                                title="Benben Logistics Inc."
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
</script>

<style scoped></style>
