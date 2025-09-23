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
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Mactan–Cebu_International_Airport_horizontal_logo.png"
                                alt="Mactan Cebu International Airport"
                                loading="lazy"
                                title="Mactan Cebu International Airport"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/nautilus shipyard & repair inc.jpg"
                                alt="Nautilus Shipyard & Repair Inc."
                                loading="lazy"
                                title="Nautilus Shipyard & Repair Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Lite_ferries_logo.png"
                                alt="Lite Ferries"
                                loading="lazy"
                                title="Lite Ferries"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/[CITYPNG.COM]HD Hyundai Logo Transparent Background - 2000x2000.png"
                                alt="Hyundai Logo"
                                loading="lazy"
                                title="Hyundai"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/fortune_shipworks_logo.png"
                                alt="Fortune Shipworks"
                                loading="lazy"
                                title="Fortune Shipworks"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/ABOITIZLAND-logo-logo.webp"
                                alt="ABOITIZLAND"
                                loading="lazy"
                                title="ABOITIZLAND"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Fifth AVenue property development.png"
                                alt="Fifth Avenue Property Development"
                                loading="lazy"
                                title="Fifth Avenue Property Development"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Filinvest_Land_Inc_logo (1).png"
                                alt="Filinvest Land Incorporated"
                                loading="lazy"
                                title="Filinvest Land Incorporated"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Bank_of_the_Philippine_Islands_logo.svg.png"
                                alt="Bank of the Philippine Islands"
                                loading="lazy"
                                title="Bank of the Philippine Islands"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Metropolitan_Bank_and_Trust_Company.png"
                                alt="Metrobank Bank and Trust Company"
                                loading="lazy"
                                title="Metrobank Bank and Trust Company"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/jpark-logo.png"
                                alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                                loading="lazy"
                                title="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Plantation_logo.png"
                                alt="Plantation Bay Resort and Bay"
                                loading="lazy"
                                title="Plantation Bay Resort and Bay"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Lantaw.png"
                                alt="Lantaw Native Restaurant"
                                loading="lazy"
                                title="Lantaw Native Restaurant"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Belcris Foods Inc.png"
                                alt="Belcris Foods Inc."
                                loading="lazy"
                                title="Belcris Foods Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Panasonic_logo_(Blue).png"
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
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/compostela.jpg"
                                alt="Municipality of Compostela"
                                loading="lazy"
                                title="Municipality of Compostela"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Compostela.png"
                                alt="Bayan ng Compostela"
                                loading="lazy"
                                title="Bayan ng Compostela"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Consolacion.png"
                                alt="bayan ng Consolacion"
                                loading="lazy"
                                title="bayan ng Consolacion"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Cordova.png"
                                alt="Municipality of Cordova"
                                loading="lazy"
                                title="Municipality of Cordova"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/DPWH.png"
                                alt="DPWH"
                                loading="lazy"
                                title="DPWH"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Dumaguete.png"
                                alt="City of Dumaguete"
                                loading="lazy"
                                title="City of Dumaguete"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Lapu-Lapu City.png"
                                alt="City of Lapu-Lapu"
                                loading="lazy"
                                title="City of Lapu-Lapu"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Madridejos,.png"
                                alt="Bayan ng Madridejos"
                                loading="lazy"
                                title="Bayan ng Madridejos"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/madridejos.jpg"
                                alt="Bayan ng Madridejos Lalawigan ng cebu"
                                loading="lazy"
                                title="Bayan ng Madridejos Lalawigan ng cebu"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Minglanilla.jpg"
                                alt="Minglanilla cebu"
                                loading="lazy"
                                title="Minglanilla cebu"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Tagbilaran.png"
                                alt="City of Tagbilaran"
                                loading="lazy"
                                title="City of Tagbilaran"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/gullas medical center.png"
                                alt="Gullas Medical Center"
                                loading="lazy"
                                title="Gullas Medical Center"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/sacred heart inc..jpg"
                                alt="Sacred Heart Hospital"
                                loading="lazy"
                                title="Sacred Heart Hospital"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/USC_university_seal.svg.png"
                                alt="USC University Seal"
                                loading="lazy"
                                title="USC University Seal"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Cebu Doctors University.png"
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
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/asian oriental.jpg"
                                alt="ASIAN ORIENTAL MEDICAL CLINIC"
                                loading="lazy"
                                title="ASIAN ORIENTAL MEDICAL CLINIC"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/j. chemie laboratories, inc..jpg"
                                alt="Jchemie Chemie Laboratories, Inc."
                                loading="lazy"
                                title="Jchemie Chemie Laboratories, Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/kevlo skinceuticals.jpg"
                                alt="Kevlo Skinceuticals"
                                loading="lazy"
                                title="Kevlo Skinceuticals"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/MC Skinceuticals inc..png"
                                alt="MC Skinceuticals Inc."
                                loading="lazy"
                                title="MC Skinceuticals Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/toledo city general hospital.jpg"
                                alt="Toledo City General Hospital"
                                loading="lazy"
                                title="Toledo City General Hospital"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/AJ Ledesma Construction Corp..jpg"
                                alt="AJ Ledesma Construction Corp."
                                loading="lazy"
                                title="AJ Ledesma Construction Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Asphalt Pavement Solutions, Inc..webp"
                                alt="Asphalt Pavement Solutions, Inc."
                                loading="lazy"
                                title="Asphalt Pavement Solutions, Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/cordova total services.png"
                                alt="Cordova Total Services"
                                loading="lazy"
                                title="Cordova Total Services"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/docast construction.jpg"
                                alt="Docast Construction"
                                loading="lazy"
                                title="Docast Construction"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients//lite crete corporation.jpg"
                                alt="Lite Block"
                                loading="lazy"
                                title="Lite Block"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/nc hardrock trading company.jpg"
                                alt="NC Hardrock Trading Company"
                                loading="lazy"
                                title="NC Hardrock Trading Company"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/north core construction.jpg"
                                alt="North Core Construction"
                                loading="lazy"
                                title="North Core Construction"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Vic Metal Fabrication and  Environmental Services, Inc.jpg"
                                alt="Vic Metal Fabrication and  Environmental Services, Inc"
                                loading="lazy"
                                title="Vic Metal Fabrication and  Environmental Services, Inc"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Vic.png"
                                alt="Vic enterprises"
                                loading="lazy"
                                title="Vic enterprises"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Young Builders Corporation.jpg"
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
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/3lung group corp..jpg"
                                alt="3 Lung Group Corp."
                                loading="lazy"
                                title="3 Lung Group Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Andorra Roof Tiles & Concrete Pavers.jpg"
                                alt="Andorra Roof Tiles & Concrete Pavers"
                                loading="lazy"
                                title="Andorra Roof Tiles & Concrete Pavers"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/APO.png"
                                alt="APO"
                                loading="lazy"
                                title="APO"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-[60%] group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Cebu Cube Ice Corp.png"
                                alt="Cebu Cube Ice Corp."
                                loading="lazy"
                                title="Cebu Cube Ice Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/cebu homecraft consolidated.webp"
                                alt="Cebu Homecraft Consolidated"
                                loading="lazy"
                                title="Cebu Homecraft Consolidated"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/ceres summit corp.png"
                                alt="Ceres Summit Corp."
                                loading="lazy"
                                title="Ceres Summit Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/chires trading co., inc.jpg"
                                alt="Chires Trading Co"
                                loading="lazy"
                                title="Chires Trading Co"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/eco-global.png"
                                alt="Eco Global"
                                loading="lazy"
                                title="Eco Global"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/EuroLab.jpg"
                                alt="EuroLab"
                                loading="lazy"
                                title="EuroLab"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/golden east marine products, inc.png"
                                alt="Golden East Marine Products, Inc."
                                loading="lazy"
                                title="Golden East Marine Products, Inc."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/growers champ agri ventures corporation.jpg"
                                alt="Growers Champ Agri Ventures Corp."
                                loading="lazy"
                                title="Growers Champ Agri Ventures Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/ice plant.webp"
                                alt="Ice Plant"
                                loading="lazy"
                                title="Ice Plant"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/joyland industries corporation.png"
                                alt="Joyland Industries Corp."
                                loading="lazy"
                                title="Joyland Industries Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/kamanga agro industrial ecozone development corporation.jpg"
                                alt="Kamanga Agro Industrial Ecozone Development Corp."
                                loading="lazy"
                                title="Kamanga Agro Industrial Ecozone Development Corp."
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/natures legacy eximport inc..png"
                                alt="Natures Legacy Eximport Inc."
                                loading="lazy"
                                title="Natures Legacy Eximport Inc."
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/palmax solutions inc.jpg"
                                alt="Mactan Cebu International Airport"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/precision forming corp.webp"
                                alt="Nautilus Shipyard & Repair Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/ravago.png"
                                alt="Lite Ferries"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients//SHEMBERG.jpg"
                                alt="Hyundai Logo"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/sozo industries corporation.png"
                                alt="Fortune Shipworks"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/vienovo philippines inc.png"
                                alt="Belcris Foods Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Balamban Septic Tank and Waste Collection Services.jpg"
                                alt="/ABOITIZLAND"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Doday`s  scrap trading.jpg"
                                alt="Fifth Avenue Property Development"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/JKS Quarrying Services OPC.jpg"
                                alt="Filinvest Land Incorporated"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Pinoy Basurero Corporation.jpg"
                                alt="Bank of the Philippine Islands"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/amici shipyard.webp"
                                alt="Panasonic"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/philippines trigon shipyard.webp"
                                alt="Metrobank"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Bohol Water Utilities, Inc..jpg"
                                alt="Plantation Bay Resort and Bay"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/je hydro and bio enrgy.jpg"
                                alt="Lantaw Native Restaurant"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Nenita’s Water Refilling Station.jpg"
                                alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/8 star Land Development Corporation.gif"
                                alt="Mactan Cebu International Airport"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/amani grand residences.png"
                                alt="Lantaw Native Restaurant"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/cebu homegrown developers, inc..jpg"
                                alt="Nautilus Shipyard & Repair Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/cebu korona development corporation.jpg"
                                alt="Lite Ferries"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/cebuview realty corporation.png"
                                alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/deo homes and property dev`t inc.jpg"
                                alt="Hyundai Logo"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/eastland property ventures inc..jpg"
                                alt="Fortune Shipworks"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/grandland.jpg"
                                alt="Belcris Foods Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/juanito king & sons, inc..jpg"
                                alt="/ABOITIZLAND"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/lite properties inc..jpg"
                                alt="Fifth Avenue Property Development"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/mactan plains residential.jpg"
                                alt="Filinvest Land Incorporated"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Prime Megalith Ventures and Development Corporation.jpg"
                                alt="Bank of the Philippine Islands"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/true vine garden and columbary.jpg"
                                alt="Panasonic"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/vn management logo.png"
                                alt="Metrobank"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/fairchild cebu community multi-purpose cooperative.jpg"
                                alt="Plantation Bay Resort and Bay"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/4 A`S & G Beach Resort.jpg"
                                alt="Mactan Cebu International Airport"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/10k Roses.jpg"
                                alt="Lantaw Native Restaurant"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/88th avenue.jpg"
                                alt="Nautilus Shipyard & Repair Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/anda resort and spa - parklane bohol.jpg"
                                alt="Lite Ferries"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients//andy hotel.jpg"
                                alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/blue pot family resort.jpg"
                                alt="Hyundai Logo"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Canberry Hotel.png"
                                alt="Fortune Shipworks"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/carcar eco farm resorts.jpg"
                                alt="Belcris Foods Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/CenturyPeak.png"
                                alt="/ABOITIZLAND"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/diplomat hotel.png"
                                alt="Fifth Avenue Property Development"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/go philippine island travel and tours inc..jpg"
                                alt="Filinvest Land Incorporated"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/hagnaya beach resort & restaurant.jpg"
                                alt="Bank of the Philippine Islands"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/hutscape beachfront private resort.jpg"
                                alt="Panasonic"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/ingko costan resort.jpg"
                                alt="Metrobank"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/j and r residences.jpg"
                                alt="Plantation Bay Resort and Bay"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/les maisons d`ltac.jpg"
                                alt="Mactan Cebu International Airport"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Lot 8 Condominium Corp.jpg"
                                alt="Lantaw Native Restaurant"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/matutinao beach resort & cottage.jpg"
                                alt="Nautilus Shipyard & Repair Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/mc rich canyoneering.webp"
                                alt="Lite Ferries"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/nadelrmar hotel.jpg"
                                alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/palalong views.jpg"
                                alt="Hyundai Logo"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/pescadores seaview suites, inc..jpg"
                                alt="Fortune Shipworks"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/q8 hotel.jpg"
                                alt="Plantation Bay Resort and Bay"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/queens land manor.jpg"
                                alt="Belcris Foods Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/sta. fe beach club.jpg"
                                alt="/ABOITIZLAND"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/V8 Mountain Resort Corp.jpg"
                                alt="Fifth Avenue Property Development"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Winland Towers Condominium.jpg"
                                alt="Filinvest Land Incorporated"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/wnrison land inc..jpg"
                                alt="Bank of the Philippine Islands"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/the italian food specialists, inc.jpg"
                                alt="Panasonic"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/cts mactan.jpg"
                                alt="Metrobank"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-5 w-full justify-items-center">
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/co jordan talaba bangus eatery.jpg"
                                alt="Mactan Cebu International Airport"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/tess and pablos lechon.jpg"
                                alt="Lantaw Native Restaurant"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 group flex justify-center items-center">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Almana Power.jpg"
                                alt="Nautilus Shipyard & Repair Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/alsons.jpg"
                                alt="Lite Ferries"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/e cool phil. Services corporation.jpg"
                                alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/tec fuel energy solutions.jpg"
                                alt="Hyundai Logo"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Tuburan 360 Agro-Forestry Golf Club.jpg"
                                alt="Fortune Shipworks"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Atlantis Fishing Dev`t Corp..jpg"
                                alt="Plantation Bay Resort and Bay"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/green pastures funeral chapel.png"
                                alt="Belcris Foods Inc."
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Paws Heaven Pet Cremation.jpg"
                                alt="/ABOITIZLAND"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/AIC Group of Companies Holding Corp..jpg"
                                alt="Fifth Avenue Property Development"
                                loading="lazy"
                            />
                        </div>
                        <div class="overflow-hidden w-32 flex justify-center items-center group">
                            <img
                                class="w-full group-hover:scale-110 transition-all duration-300"
                                src="/public/assets/images/main-imgs/clients/Benben Logistics Inc..jpg"
                                alt="Filinvest Land Incorporated"
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
