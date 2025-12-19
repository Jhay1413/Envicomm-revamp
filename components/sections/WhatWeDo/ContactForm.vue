<template>
    <!-- Outer section with dark textured green background -->
    <section class="relative w-full py-20 px-4 min-h-[600px] flex items-center justify-center bg-[url('/assets/images/main-imgs/about-03.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
        
        <!-- Optional: Background Texture Overlay -->
        <div class="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply" 
             >
        </div>

        <!-- Main Card -->
        <div class="relative w-full max-w-4xl bg-white rounded-xl shadow-xl p-8 md:p-12 z-10">
            <!-- Headers -->
            <div class="text-center mb-10">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-normal text-black uppercase tracking-wide mb-2">Are you looking for something specific?</h2>
                <h3 class="text-lg md:text-xl text-black">Let Us Help You!</h3>
            </div>

            <!-- Form -->
            <Form 
                class="w-full space-y-6"
                :validation-schema="formSchema" 
                @submit="onSubmit"
            >
                <!-- Name Field -->
                <div class="space-y-2">
                    <label for="name" class="block text-base text-black font-normal pl-1">Name</label>
                    <Field 
                        type="text" 
                        name="name" 
                        class="w-full border border-gray-200 bg-white rounded px-4 py-3 focus:outline-none focus:border-[#547326] transition-colors"
                    />
                    <ErrorMessage name="name" class="text-red-500 text-sm pl-1 block" />
                </div>

                <!-- Email Field -->
                <div class="space-y-2">
                    <label for="email" class="block text-base text-black font-normal pl-1">Email</label>
                    <Field 
                        type="email" 
                        name="email" 
                        class="w-full border border-gray-200 bg-white rounded px-4 py-3 focus:outline-none focus:border-[#547326] transition-colors"
                    />
                    <ErrorMessage name="email" class="text-red-500 text-sm pl-1 block" />
                </div>

                <!-- Message Field -->
                <div class="space-y-2">
                    <label for="message" class="block text-base text-black font-normal pl-1">Message</label>
                    <Field
                        as="textarea"
                        name="message"
                        rows="6"
                        placeholder="What are you looking for?"
                        class="w-full border border-gray-200 bg-white rounded px-4 py-3 placeholder-gray-300 resize-none focus:outline-none focus:border-[#547326] transition-colors"
                    />
                    <ErrorMessage name="message" class="text-red-500 text-sm pl-1 block" />
                </div>

                <!-- Checkbox -->
                <div class="space-y-2 pt-2">
                    <div class="flex items-start gap-3">
                        <Field
                            v-slot="{ field }"
                            name="terms"
                            type="checkbox"
                            :value="true"
                            :unchecked-value="false"
                        >
                            <input
                                type="checkbox"
                                name="terms"
                                id="terms"
                                v-bind="field"
                                :value="true"
                                class="w-4 h-4 border-gray-300 rounded text-[#547326] focus:ring-[#547326]"
                            />
                        </Field>
                        <label for="terms" class="text-xs text-black cursor-pointer select-none">
                            by submitting you are accepting the terms and conditions of our privacy policy
                        </label>
                    </div>
                    <ErrorMessage name="terms" class="text-red-500 text-sm pl-1 block" />
                </div>

                <!-- Submit Button -->
                <div class="flex justify-center pt-4">
                    <button
                        type="submit"
                        class="bg-[#547326] hover:bg-[#435e1d] text-white px-12 py-3 rounded text-base font-normal transition-colors duration-300"
                    >
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    </section>
</template>

<script setup>
import * as yup from "yup";

const formSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    terms: yup
        .bool()
        .oneOf([true], "Please accept the terms and conditions")
        .required("Please accept the terms and conditions"),
});

const onSubmit = (values) => {
    console.log(values);
};
</script>

<style scoped>
/* Optional: Only if you want extra customization */
</style>