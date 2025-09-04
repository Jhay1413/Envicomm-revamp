<template>
    <div class="bg-[#EBF5D7] relative py-10 md:py-20 px-10 md:px-20 my-[150px] rounded-[58px]">
        <div class="mx-auto relative max-w-[1320px]">
            <img
                class="absolute right-0 max-w-[129px] top-[-50px] hidden lg:block"
                src="/assets/images/mail.png"
                alt="mail image"
            />
            <p class="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">
                Contact us
            </p>
            <h2 class="font-bold text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
                Have an project in mind?
            </h2>
            <p class="text-text text-gray-600 mb-[30px] md:mb-[60px]">
                The right move at the right time saves your investment. live the dream of expanding
                your business.
            </p>
            <div
                class="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]"
            >
                <div class="md:max-w-[25%]">
                    <div class="flex gap-[13px] mb-[15px] md:mb-[25px]">
                        <i>
                            <img src="/assets/images/icons/icon-home-fill.svg" alt="home icon"
                        /></i>
                        <p class="text-heading-6 font-bold">Envi-Comm</p>
                    </div>
                    <a
                        href="https://maps.app.goo.gl/3G5NQHMKmVTZggGL6"
                        target="_blank"
                        class="text-text text-gray-600 mb-5 inline-block"
                    >
                        Aboitiz Corporate Center, Gov. Manuel A. Cuenco Avenue, Kasambagan, Cebu
                        City, Philippines.
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-4 h-4 inline-block ml-1"
                        >
                            <path
                                d="M13 3a1 1 0 100 2h4.586L10.293 12.293a1 1 0 101.414 1.414L19 6.414V11a1 1 0 102 0V3h-8z"
                            />
                            <path
                                d="M5 5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6a1 1 0 10-2 0v6H5V7h6a1 1 0 000-2H5z"
                            />
                        </svg>
                    </a>
                    <a href="tel:+639542915171" class="text-text text-gray-600 underline block"
                        >+63 954 291 5171‬</a
                    >
                    <a href="tel:0324010827" class="text-text text-gray-600 underline block"
                        >(032) 401 0827</a
                    >
                    <a
                        href="mailto:official@envicomm.org"
                        class="text-text text-gray-600 underline block"
                        >official@envicomm.org</a
                    >
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                        <input
                            v-model="formData.name"
                            class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder: py-5 px-[30px]"
                            type="text"
                            placeholder="Enter your name"
                            required
                        />
                        <input
                            v-model="formData.company"
                            class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder: py-5 px-[30px]"
                            type="text"
                            placeholder="Company (optional)"
                        />
                    </div>
                    <div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                        <input
                            v-model="formData.email"
                            class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder: py-5 px-[30px]"
                            type="email"
                            placeholder="Your email"
                            required
                        />
                        <input
                            v-model="formData.phone"
                            class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder: py-5 px-[30px]"
                            type="tel"
                            placeholder="Phone number"
                        />
                    </div>
                    <textarea
                        v-model="formData.message"
                        class="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]"
                        name=""
                        cols="100"
                        rows="10"
                        placeholder="Tell us about yourself"
                        required
                    ></textarea>
                    <div class="flex flex-col gap-5">
                        <button
                            class="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-semibold text-md md:text-lg text-white bg-[#547326] hover:bg-[#4c6822] w-fit"
                            type="submit"
                        >
                            Send Message<i>
                                <img
                                    class="ml-[7px] w-[12px] filter-white"
                                    src="/assets/images/icons/icon-right.svg"
                                    alt="arrow right icon"
                            /></i>
                        </button>
                        <p class="text-md text-gray-500">
                            By clicking contact us button, you agree our terms and policy,
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useAnalytics } from "~/composables/useAnalytics";

const { trackContactFormSubmit } = useAnalytics();

const formData = ref({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
});

const handleSubmit = () => {
    trackContactFormSubmit("contact_page");

    console.log("Form submitted:", formData.value);

    formData.value = {
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    };

    alert("Thank you for your message! We will get back to you soon.");
};
</script>
