<template>
    <div
        class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex items-center flex-col md:flex-row lg:mt-[112px] gap-[35px] md:gap-[85px]"
    >
        <div class="flex-1">
            <NuxtImg
                class="h-full w-full object-cover"
                src="/assets/images/main-imgs/header-02.png"
                alt="Img"
            />
        </div>
        <div class="flex-1 order-1">
            <h3
                class="font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]"
            >
                Core Values
            </h3>
            <p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">
                We value our relationships with co-workers, clients, and shareholders
            </p>
            <div class="flex flex-col">
                <div class="flex items-start gap-5 mb-[30px] last:mb-0">
                    <div
                        class="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]"
                    >
                        <NuxtImg
                            class="h-full w-full object-cover max-w-[25px] max-h-[25px]"
                            src="/assets/images/icons/icon-user.svg"
                            alt="icon"
                        />
                    </div>
                    <div class="flex-1">
                        <h4
                            class="font-bold text-[14px] xl:text-heading-5 text-green-900 mb-[14px]"
                        >
                            Integrity
                        </h4>
                        <p class="text-text text-gray-500">
                            With this in mind: truth, honesty, and accountability in our
                            professional dealings are of the utmost importance.
                        </p>
                    </div>
                </div>
                <div class="flex items-start gap-5 mb-[30px] last:mb-0">
                    <div
                        class="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]"
                    >
                        <NuxtImg
                            class="h-full w-full object-cover max-w-[25px] max-h-[25px]"
                            src="/assets/images/icons/icon-destination.svg"
                            alt="icon"
                        />
                    </div>
                    <div class="flex-1">
                        <h4
                            class="font-bold text-[14px] xl:text-heading-5 text-green-900 mb-[14px]"
                        >
                            Professionalism
                        </h4>
                        <p class="text-text text-gray-500">
                            As a consultancy firm, we seek to achieve work with quality by
                            conducting professional competence and expertise according to the
                        </p>
                    </div>
                </div>
                <div class="flex items-start gap-5 mb-[30px] last:mb-0">
                    <div
                        class="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]"
                    >
                        <NuxtImg
                            class="h-full w-full object-cover max-w-[25px] max-h-[25px]"
                            src="/assets/images/icons/icon-paperplane.svg"
                            alt="icon"
                        />
                    </div>
                    <div class="flex-1">
                        <h4
                            class="font-bold text-[14px] xl:text-heading-5 text-green-900 mb-[14px]"
                        >
                            Unparalleled Service
                        </h4>
                        <p class="text-text text-gray-500">
                            As a consultancy firm, we seek to achieve work with quality by
                            conducting professional competence and expertise according to the
                            highest ethics and proficiency standards
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
