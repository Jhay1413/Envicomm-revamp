<template>
    <section class="bg-[#EBF5D7] py-10 md:py-20 text-black text-lg md:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-4xl mb-3 uppercase text-center">Get in Touch</h2>
            <p class="mb-5 text-center">We'd love to hear from you. Reach out today!</p>
            <form class="flex flex-col justify-center md:max-w-[50%] mx-auto">
                <div>
                    <label for="name" class="block mb-1">Name</label>
                    <input type="text" class="w-full rounded mb-5 p-2" />
                </div>
                <div>
                    <label for="email" class="block mb-1">Email</label>
                    <input type="email" class="w-full rounded mb-5 p-2" />
                </div>
                <div>
                    <label for="message" class="block mb-1">Message</label>
                    <textarea
                        class="w-full rounded mb-5 p-2"
                        placeholder="What are you looking for?"
                        rows="5"
                    ></textarea>
                </div>
                <div class="flex items-center mb-5">
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        class="mr-2 accent-[#547326] w-5 h-5"
                    />
                    <label for="terms">I accept the Terms</label>
                </div>
                <button
                    class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded w-fit mx-auto"
                >
                    Submit
                </button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
