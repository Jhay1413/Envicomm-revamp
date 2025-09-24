<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <span
            class="inline-block bg-bg-2 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-8"
            >Company Overview</span
        >
        <div class="mb-14">
            <h2
                class="text-gray-900 font-bold mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]"
            >
                Envi-Comm Corporation
            </h2>
            <p class="text-quote md:text-lead-lg text-gray-600">
                We are a team of environmental experts dedicated to assisting businesses.
            </p>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[50px] mb-[52px]"
        >
            <div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
                <div class="aspect-[408/275]">
                    <NuxtImg
                        class="h-full w-full object-cover rounded-2xl mb-[30px]"
                        src="/assets/images/destination-1.png"
                        alt="Img"
                    />
                </div>
                <div class="flex items-center gap-[10px] mb-[11px]"></div>
                <h4 class="font-bold text-[14px] xl:text-heading-5 mb-[15px] text-center">
                    Application
                </h4>
                <p class="text-text text-gray-500 text-center">
                    Streamlining the environmental application process for our clients to ensure
                    compliance and expedite project approvals.
                </p>
            </div>
            <div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
                <div class="aspect-[408/275]">
                    <NuxtImg
                        class="h-full w-full object-cover rounded-2xl mb-[30px]"
                        src="/assets/images/destination-1.png"
                        alt="Img"
                    />
                </div>
                <div class="flex items-center gap-[10px] mb-[11px]"></div>
                <h4 class="font-bold text-[14px] xl:text-heading-5 mb-[15px] text-center">
                    Application
                </h4>
                <p class="text-text text-gray-500 text-center">
                    Streamlining the environmental application process for our clients to ensure
                    compliance and expedite project approvals.
                </p>
            </div>
            <div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200">
                <div class="aspect-[408/275]">
                    <NuxtImg
                        class="h-full w-full object-cover rounded-2xl mb-[30px]"
                        src="/assets/images/destination-1.png"
                        alt="Img"
                    />
                </div>
                <div class="flex items-center gap-[10px] mb-[11px]"></div>
                <h4 class="font-bold text-[14px] xl:text-heading-5 mb-[15px] text-center">
                    Application
                </h4>
                <p class="text-text text-gray-500 text-center">
                    Streamlining the environmental application process for our clients to ensure
                    compliance and expedite project approvals.
                </p>
            </div>
        </div>
        <button type="button">
            <NuxtLink
                class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 mx-auto tracking-wide text-md w-fit gap-4 md:text-heading-6"
                to="#"
                ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-semibold"
                    >Discover More</span
                ><i>
                    <NuxtImg
                        class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                        src="/assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                        to="/about" /></i
            ></NuxtLink>
        </button>
    </div>
</template>
