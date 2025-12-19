<template>
    <section
        class="relative bg-[url('/assets/images/main-imgs/consult.webp')] bg-cover bg-center bg-fixed flex justify-center items-center px-10 md:px-20 h-screen"
    >
        <div class="absolute inset-0 bg-black opacity-50 z-1"></div>
        <div class="z-10 w-full max-w-5xl mx-auto px-4">
    <h2 class="text-3xl md:text-5xl font-bold uppercase text-white mb-10 text-center" data-aos="fade-up">
        GET MY FREE CONSULTATION
    </h2>
    <form class="w-full" data-aos="fade-up" data-aos-delay="300">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <!-- Name Field -->
        <div class="flex flex-col text-left">
            <label class="text-white text-lg mb-2 pl-1">Name</label>
            <input 
                type="text" 
                class="w-full p-3 rounded-md focus:outline-none text-black"
            />
        </div>
        <!-- Email Field -->
        <div class="flex flex-col text-left">
            <label class="text-white text-lg mb-2 pl-1">Email</label>
            <input 
                type="email" 
                class="w-full p-3 rounded-md focus:outline-none text-black"
            />
        </div>
        </div>
        <!-- Message Field -->
        <div class="flex flex-col text-left mb-4">
            <label class="text-white text-lg mb-2 pl-1">Message</label>
            <textarea 
                class="w-full p-3 rounded-md focus:outline-none text-black resize-none min-h-[50px]"
                rows="2"
                placeholder="What are you looking for?"
            ></textarea>
        </div>
        <!-- Privacy Policy Checkbox -->
        <div class="flex items-center gap-3 mb-8 text-left">
            <input 
                type="checkbox" 
                id="privacy"
                class="w-5 h-5 rounded cursor-pointer"
            />
            <label for="privacy" class="text-white text-xs md:text-sm">
                by submitting you are accepting the terms and conditions of our privacy policy
            </label>
        </div>
        <!-- Submit Button -->
        <div class="flex justify-center">
            <button 
                type="submit" 
                class="bg-[#547326] border-2 border-white text-white text-xl px-16 py-2 rounded hover:bg-white hover:text-[#547326] transition-all duration-300 shadow-lg"
            >
                Submit
            </button>
        </div>
    </form>
</div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
