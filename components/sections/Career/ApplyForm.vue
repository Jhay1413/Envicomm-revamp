<template>
    <div class="bg-white p-10 rounded-lg border-2 border-black text-md">
        <h3 class="font-semibold text-2xl mb-5 uppercase text-center">Apply for this position</h3>
        <form action="/">
            <div class="flex flex-col gap-5">
                <div>
                    <label class="mb-1" for="name"
                        >Full Name <span class="text-red-500">*</span></label
                    >
                    <br />
                    <input
                        class="border border-gray-400 bg-[#D9D9D94D] py-2 px-3 rounded w-full"
                        type="text"
                        name="name"
                        id="name"
                    />
                </div>
                <div>
                    <label class="mb-1" for="email"
                        >Email <span class="text-red-500">*</span></label
                    >
                    <br />
                    <input
                        class="border border-gray-400 bg-[#D9D9D94D] py-2 px-3 rounded w-full"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div>
                    <label class="mb-1" for="phone"
                        >Phone <span class="text-red-500">*</span></label
                    >
                    <br />
                    <input
                        class="border border-gray-400 bg-[#D9D9D94D] py-2 px-3 rounded w-full"
                        type="tel"
                        name="phone"
                        id="phone"
                    />
                </div>
                <div>
                    <label class="mb-1" for="cover-letter"
                        >Cover Letter <span class="text-red-500">*</span></label
                    >
                    <br />
                    <textarea
                        class="border border-gray-400 bg-[#D9D9D94D] py-2 px-3 rounded w-full"
                        rows="5"
                        name="cover-letter"
                        id="cover-letter"
                    ></textarea>
                </div>
                <div>
                    <label class="mb-1" for="resume"
                        >Upload CV/Resume <span class="text-red-500">*</span></label
                    >
                    <br />
                    <input
                        class="text-gray-400"
                        type="file"
                        name="resume"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                    />
                    <p class="text-[10px] text-[#547326]">Allowed Types: .pdf, .doc, .docx</p>
                </div>
                <div class="flex items-center gap-2">
                    <input class="w-4 h-4" type="checkbox" name="terms" id="terms" />
                    <label class="mb-1" for="terms"
                        >By using this form you agree with the storage <br />
                        and handling of your data by this website. 
                        <span class="text-red-500">*</span></label
                    >
                </div>
                <button
                    type="submit"
                    class="bg-[#547326] hover:bg-[#4c6822] rounded-lg text-white py-2 px-5 4k:text-lg uppercase inline-block"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
