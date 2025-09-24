<template>
    <footer class="bg-[#08223B]">
        <div class="container">
            <div
                class="text-white grid gird-cols-1 gap-8 md:grid-cols-5 xl:gap-[98px] py-10 md:py-28"
            >
                <div class="md:col-span-2 flex flex-col gap-5">
                    <NuxtImg
                        src="/assets/images/main-imgs/main-logo-light.png"
                        class="logo z-50 w-[40%] mb-5"
                        alt="logo"
                    />
                    <p class="mb-3 text-clamp">
                        Subscribe to our newsletter for the latest updates on features and releases.
                    </p>
                    <form class="flex gap-2 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            class="flex-1 rounded p-3"
                        />
                        <button
                            type="submit"
                            class="bg-white text-black rounded py-2 px-4 hover:bg-[#547326] hover:text-white transition-all duration-200"
                        >
                            Join
                        </button>
                    </form>
                    <p class="text-md">
                        By subscribing, you consent to our
                        <NuxtLink
                            to="/privacy-policy"
                            class="underline hover:text-green-900 transition-all duration-200 font-medium"
                            >Privacy Policy</NuxtLink
                        >
                        and receiving updates.
                    </p>
                    <div class="flex flex-col gap-2">
                        <p>
                            Email: <a href="mailto:official@envicomm.org">official@envicomm.org</a>
                        </p>
                        <p>Mobile: <a href="tel:+63 954 291 5171">+63 954 291 5171</a></p>
                        <p>Landline: <a href="tel:+63 (0) 32 401 0827">+63 (0) 32 401 0827</a></p>
                    </div>
                </div>
                <div class="md:col-span-3 flex flex-col gap-5">
                    <div>
                        <!-- <h3 class="text-lg text-center md:text-xl mb-5">ASSOCIATED WITH</h3> -->
                        <div class="grid grid-cols-2 md:grid-cols-6 gap-5 mb-5">
                            <div class="flex items-center md:col-span-2">
                                <NuxtImg
                                    src="/assets/images/main-imgs/clients/footer-logo-4.png"
                                    alt="logo"
                                    loading="lazy"
                                    class="h-[70px] 4k:h-[100px]"
                                />
                            </div>
                            <div class="flex items-center">
                                <NuxtImg
                                    src="/assets/images/main-imgs/clients/footer-logo-3.png"
                                    alt="logo"
                                    loading="lazy"
                                    class="h-[80px] 4k:h-[100px]"
                                />
                            </div>
                            <div class="flex items-center">
                                <NuxtImg
                                    src="/assets/images/main-imgs/clients/footer-logo-2.png"
                                    alt="logo"
                                    loading="lazy"
                                    class="h-[80px] 4k:h-[100px]"
                                />
                            </div>
                            <div class="relative group flex items-center md:col-span-2">
                                <NuxtImg
                                    src="/assets/images/main-imgs/clients/footer-logo-1.png"
                                    alt="logo"
                                    loading="lazy"
                                    class="h-[40px] cursor-pointer 4k:h-[100px]"
                                />
                                <span
                                    class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                                >
                                    D-U-N-S® Number: 71-907-1482
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3">
                        <div>
                            <h3 class="text-lg md:text-xl mb-10">Quick Links</h3>
                            <ul>
                                <li class="mb-5">
                                    <a
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        href="#"
                                        >About Us</a
                                    >
                                </li>
                                <li class="mb-5">
                                    <a
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        href="#"
                                        >Services</a
                                    >
                                </li>
                                <li class="mb-5">
                                    <NuxtLink
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        to="/contact-us"
                                        >Contact Us</NuxtLink
                                    >
                                </li>
                                <li class="mb-5">
                                    <a
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        href="#"
                                        >Blog</a
                                    >
                                </li>
                                <li class="mb-5">
                                    <NuxtLink
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        to="/careers"
                                        >Careers</NuxtLink
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg md:text-xl mb-10 text-[18px]">Resources</h3>
                            <ul>
                                <li class="mb-5">
                                    <a
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        href="/faqs"
                                        >FAQs</a
                                    >
                                </li>
                                <li class="mb-5">
                                    <a
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        href="/terms-conditions"
                                        >Case Studies</a
                                    >
                                </li>
                                <li class="mb-5">
                                    <a
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        href="/privacy-policy"
                                        >White Papers</a
                                    >
                                </li>
                                <li class="mb-5">
                                    <a
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        href="/contact-us"
                                        >Webinars</a
                                    >
                                </li>
                                <li class="mb-5">
                                    <NuxtLink
                                        class="text-md md:text-lg transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                        to="/careers"
                                        >Careers</NuxtLink
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <h3 class="text-lg mb-8 md:mb-10 text-[18px] text-center md:text-left">
                                Connect With Us
                            </h3>
                            <ul class="flex md:flex-col justify-center gap-5 md:gap-0">
                                <li class="mb-5">
                                    <NuxtLink class="flex items-center gap-3" to="#">
                                        <NuxtImg
                                            src="/assets/images/icons/facebook.svg"
                                            alt="facebook icon"
                                            class="w-[25px]"
                                        />
                                        <span class="text-md md:text-lg hidden md:block"
                                            >Facebook</span
                                        >
                                    </NuxtLink>
                                </li>
                                <li class="mb-5">
                                    <NuxtLink class="flex items-center gap-3" to="#">
                                        <NuxtImg
                                            src="/assets/images/icons/insta.svg"
                                            alt="instagram icon"
                                            class="w-[25px]"
                                        />
                                        <span class="text-md md:text-lg hidden md:block"
                                            >Instagram</span
                                        >
                                    </NuxtLink>
                                </li>
                                <li class="mb-5">
                                    <NuxtLink class="flex items-center gap-3" to="#">
                                        <NuxtImg
                                            src="/assets/images/icons/X.svg"
                                            alt="twitter icon"
                                            class="w-[25px]"
                                        />
                                        <span class="text-md md:text-lg hidden md:block"
                                            >Twitter</span
                                        >
                                    </NuxtLink>
                                </li>
                                <li class="mb-5">
                                    <NuxtLink class="flex items-center gap-3" to="#">
                                        <NuxtImg
                                            src="/assets/images/icons/linkedin.svg"
                                            alt="linkedin icon"
                                            class="w-[25px]"
                                        />
                                        <span class="text-md md:text-lg hidden md:block"
                                            >Linkedin</span
                                        >
                                    </NuxtLink>
                                </li>
                                <li class="mb-5">
                                    <NuxtLink class="flex items-center gap-3" to="#">
                                        <NuxtImg
                                            src="/assets/images/icons/youtube.svg"
                                            alt="youtube"
                                            class="w-[25px]"
                                        />
                                        <span class="text-md md:text-lg hidden md:block"
                                            >Youtube</span
                                        >
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="bg-[#547326] text-black lg:flex lg:items-center lg:justify-between py-1 text-center"
        >
            <div class="container">
                <div class="md:flex md:items-center md:justify-between md:gap-6">
                    <p class="text-md md:text-lg">© 2025 Envi-comm. All rights reserved.</p>
                    <div class="flex items-center justify-center md:justify-between gap-5">
                        <a class="underline text-md md:text-lg" href="#">Privacy Policy</a
                        ><a class="underline text-md md:text-lg" href="#">Terms of Use</a
                        ><a class="underline text-md md:text-lg" href="#">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
