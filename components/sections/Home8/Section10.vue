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
                :speed="5000"
                :breakpoints="{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 8 },
                    2560: { slidesPerView: 14 },
                }"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                }"
                :freeMode="true"
                :spaceBetween="5"
                class="mb-5"
            >
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Mactan–Cebu_International_Airport_horizontal_logo.png"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/nautilus shipyard & repair inc.jpg"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Lite_ferries_logo.png"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/[CITYPNG.COM]HD Hyundai Logo Transparent Background - 2000x2000.png"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/fortune_shipworks_logo.png"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/ABOITIZLAND-logo-logo.webp"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Fifth AVenue property development.png"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Filinvest_Land_Inc_logo (1).png"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Bank_of_the_Philippine_Islands_logo.svg.png"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Metropolitan_Bank_and_Trust_Company.png"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/jpark-logo.png"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Plantation_logo.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Lantaw.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Belcris Foods Inc.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Panasonic_logo_(Blue).png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Paws Heaven Pet Cremation.jpg"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Young Builders Corporation.jpg"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/vn management logo.png"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Canberry Hotel.png"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
            </Swiper>
            <!-- swiper 2 -->
            <Swiper
                :modules="[Autoplay]"
                :breakpoints="{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 10 },
                    2560: { slidesPerView: 14 },
                }"
                :loop="true"
                :speed="5000"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                }"
                :freeMode="true"
                :spaceBetween="5"
                dir="rtl"
                class="mb-5"
            >
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/cebu homegrown developers, inc..jpg"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/cebu homecraft consolidated.webp"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/wnrison land inc..jpg"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/gullas medical center.png"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Cebu Doctors University.png"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/DPWH.png"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Tagbilaran.png"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Minglanilla.jpg"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Cordova.png"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Dumaguete.png"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/APO.png"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Lapu-Lapu City.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/SHEMBERG.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/USC_university_seal.svg.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Vic Metal Fabrication and  Environmental Services, Inc.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/mactan plains residential.png"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Nenita’s Water Refilling Station.jpg"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/vienovo philippines inc.png"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Prime Megalith Ventures and Development Corporation.jpg"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
            </Swiper>
            <!-- swiper 3 -->
            <Swiper
                :modules="[Autoplay]"
                :breakpoints="{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 10 },
                    2560: { slidesPerView: 14 },
                }"
                :loop="true"
                :speed="5000"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                }"
                :freeMode="true"
                :spaceBetween="5"
                class="mb-5"
            >
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Cebu Cube Ice Corp.png"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Vic.png"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Compostela.png"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Consolacion.png"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/4 A`S & G Beach Resort.jpg"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/10k Roses.jpg"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/3lung group corp..jpg"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/88th avenue.jpg"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/AIC Group of Companies Holding Corp..jpg"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/AJ Ledesma Construction Corp..jpg"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Almana Power.jpg"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/alsons.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/amani grand residences.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/amici shipyard.webp"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/anda resort and spa - parklane bohol.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/chires trading co., inc.jpg"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/carcar eco farm resorts.jpg"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/cordova total services.png"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/cts mactan.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <!-- swiper 4 -->
            <Swiper
                :modules="[Autoplay]"
                :breakpoints="{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 10 },
                    2560: { slidesPerView: 14 },
                }"
                :loop="true"
                :speed="5000"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                }"
                :freeMode="true"
                :spaceBetween="5"
                dir="rtl"
                class="mb-5"
            >
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/andy hotel.jpg"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/asian oriental.jpg"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Asphalt Pavement Solutions, Inc..webp"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Atlantis Fishing Dev`t Corp..jpg"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Balamban Septic Tank and Waste Collection Services.jpg"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Benben Logistics Inc..jpg"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/blue pot family resort.jpg"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Bohol Water Utilities, Inc..jpg"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Canberry Hotel.jpg"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/cebu korona development corporation.jpg"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/cebuview realty corporation.png"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/CenturyPeak.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/ceres summit corp.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/co jordan talaba bangus eatery.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/compostela.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/ingko costan resort.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/deo homes and property dev`t inc.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/je hydro and bio enrgy.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/lite crete corporation.jpg"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
            </Swiper>
            <!-- swiper 5 -->
            <Swiper
                :modules="[Autoplay]"
                :breakpoints="{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 10 },
                    2560: { slidesPerView: 14 },
                }"
                :loop="true"
                :speed="5000"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                }"
                :freeMode="true"
                :spaceBetween="5"
                class="mb-5"
            >
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/diplomat hotel.png"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/docast construction.jpg"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Doday`s  scrap trading.jpg"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/eastland property ventures inc..jpg"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/e cool phil. Services corporation.jpg"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/eco global.png"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/fairchild cebu community multi-purpose cooperative.jpg"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Winland Towers Condominium.jpg"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/go philippine island travel and tours inc..jpg"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/golden east marine products, inc.png"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/grandland.jpg"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/green pastures funeral chapel.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/growers champ agri ventures corporation.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/hagnaya beach resort & restaurant.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/hutscape beachfront private resort.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/lite properties inc..jpg"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/madridejos.jpg"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/ravago.png"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/palmax solutions inc.jpg"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
            </Swiper>
            <!-- swiper 6 -->
            <Swiper
                :modules="[Autoplay]"
                :breakpoints="{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 10 },
                    2560: { slidesPerView: 14 },
                }"
                :loop="true"
                :speed="5000"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                }"
                :freeMode="true"
                :spaceBetween="5"
                class="mb-5"
                dir="rtl"
            >
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/ice plant.webp"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/j and r residences.jpg"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/j. chemie laboratories, inc..jpg"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/JKS Quarrying Services OPC.jpg"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/joyland industries corporation.png"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/juanito king & sons, inc..jpg"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/kamanga agro industrial ecozone development corporation.jpg"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/kevlo skinceuticals.jpg"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/les maisons d`ltac.jpg"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Lot 8 Condominium Corp.jpg"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/mactan plains residential.jpg"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/matutinao beach resort & cottage.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/mc rich canyoneering.webp"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/nadelrmar hotel.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/natures legacy eximport inc..png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Pinoy Basurero Corporation.jpg"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/precision forming corp.webp"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/V8 Mountain Resort Corp.jpg"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Tuburan 360 Agro-Forestry Golf Club.jpg"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
            </Swiper>
            <!-- swiper 7 -->
            <Swiper
                :modules="[Autoplay]"
                :breakpoints="{
                    320: { slidesPerView: 3 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                    1280: { slidesPerView: 10 },
                    2560: { slidesPerView: 14 },
                }"
                :loop="true"
                :speed="5000"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                }"
                :freeMode="true"
                :spaceBetween="5"
                class="mb-5"
            >
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/nc hardrock trading company.jpg"
                            alt="Mactan Cebu International Airport"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/north core construction.jpg"
                            alt="Nautilus Shipyard & Repair Inc."
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/palalong views.jpg"
                            alt="Lite Ferries"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/pescadores seaview suites, inc..jpg"
                            alt="Hyundai Logo"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/philippines trigon shipyard.webp"
                            alt="Fortune Shipworks"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/q8 hotel.jpg"
                            alt="/ABOITIZLAND"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center mb-3">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/queens land manor.jpg"
                            alt="Fifth Avenue Property Development"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/sacred heart inc..jpg"
                            alt="Filinvest Land Incorporated"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/sozo industries corporation.png"
                            alt="Bank of the Philippine Islands"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/sta. fe beach club.jpg"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/tec fuel energy solutions.jpg"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/tess and pablos lechon.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/the italian food specialists, inc.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/toledo city general hospital.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/true vine garden and columbary.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    ><div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/MC Skinceuticals inc..png"
                            alt="Metrobank"
                            class="h-16"
                        /></div
                ></SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/8 star Land Development Corporation.gif"
                            alt="Jpark Island Resorts & Waterpark. Mactan Cebu "
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Andorra Roof Tiles & Concrete Pavers.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/EuroLab.jpg"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex justify-center items-center">
                        <img
                            loading="lazy"
                            src="/assets/images/main-imgs/clients/Madridejos,.png"
                            alt="Plantation Bay Resort and Bay"
                            class="h-16"
                        />
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
import "swiper/css/free-mode";
import "swiper/css/autoplay";
</script>

<style scoped>
:deep(.swiper-wrapper) {
    transition-timing-function: linear !important;
}
</style>
