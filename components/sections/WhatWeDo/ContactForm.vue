<template>
    <section class="bg-[#EBF5D7] py-10 md:py-20 text-black text-lg md:text-xl">
        <div class="container">
            <h2 class="text-2xl md:text-4xl mb-3 uppercase text-center">Get in Touch</h2>
            <p class="mb-5 text-center">We'd love to hear from you. Reach out today!</p>
            <Form
                class="flex flex-col justify-center md:max-w-[50%] mx-auto"
                :validation-schema="formSchema"
                @submit="onSubmit"
            >
                <div>
                    <label for="name" class="block mb-1">Name</label>
                    <Field type="text" class="w-full rounded p-2" name="name" />
                    <ErrorMessage name="name" class="text-red-500 text-sm" />
                </div>
                <div>
                    <label for="email" class="block mb-1">Email</label>
                    <Field type="email" class="w-full rounded p-2" name="email" />
                    <ErrorMessage name="email" class="text-red-500 text-sm" />
                </div>
                <div>
                    <label for="message" class="block mb-1">Message</label>
                    <Field
                        class="w-full rounded p-2"
                        placeholder="What are you looking for?"
                        rows="5"
                        name="message"
                        as="textarea"
                    ></Field>
                    <ErrorMessage name="message" class="text-red-500 text-sm" />
                </div>
                <div class="flex items-center mb-5">
                    <Field
                        v-slot="{ field }"
                        name="terms"
                        type="checkbox"
                        :value="true"
                        :unchecked-value="false"
                    >
                        <label>
                            <input
                                type="checkbox"
                                name="terms"
                                v-bind="field"
                                :value="true"
                                class="mr-2 accent-[#547326] w-5 h-5"
                            />
                            I accept the Terms
                        </label>
                    </Field>
                    <ErrorMessage name="terms" class="text-red-500 text-sm" />
                </div>
                <button
                    class="bg-[#547326] hover:bg-[#4c6822] transition-all duration-200 text-white py-2 px-5 rounded w-fit mx-auto"
                    type="submit"
                >
                    Submit
                </button>
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
    terms: yup.bool().oneOf([true]).required(),
});

const onSubmit = (values) => {
    console.log(values);
};
</script>

<style lang="scss" scoped></style>
