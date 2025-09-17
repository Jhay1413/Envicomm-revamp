<template>
    <div class="bg-white p-10 rounded-lg border-2 border-black text-md">
        <h3 class="font-semibold text-xl mb-5 uppercase text-center">Apply for this position</h3>
        <Form :validation-schema="formSchema" @submit="onSubmit">
            <div class="flex flex-col gap-8 4k:gap-12">
                <div>
                    <label class="mb-2 inline-block" for="name"
                        >Full Name <span class="text-red-500">*</span></label
                    >
                    <Field
                        class="border border-gray-400 bg-[#D9D9D94D] py-2 4k:py-4 px-3 rounded w-full"
                        type="text"
                        name="name"
                        id="name"
                    />
                    <ErrorMessage name="name" class="text-red-500 text-sm" />
                </div>
                <div>
                    <label class="mb-2 inline-block" for="email"
                        >Email <span class="text-red-500">*</span></label
                    >
                    <Field
                        class="border border-gray-400 bg-[#D9D9D94D] py-2 px-3 4k:py-4 rounded w-full"
                        type="email"
                        name="email"
                        id="email"
                    />
                    <ErrorMessage name="email" class="text-red-500 text-sm" />
                </div>
                <div>
                    <label class="mb-2 inline-block" for="phone"
                        >Phone <span class="text-red-500">*</span></label
                    >
                    <Field
                        class="border border-gray-400 bg-[#D9D9D94D] py-2 px-3 4k:py-4 rounded w-full"
                        type="tel"
                        name="phone"
                        id="phone"
                    />
                    <ErrorMessage name="phone" class="text-red-500 text-sm" />
                </div>
                <div>
                    <label class="mb-2 inline-block" for="cover-letter"
                        >Cover Letter <span class="text-red-500">*</span></label
                    >
                    <Field
                        class="border border-gray-400 bg-[#D9D9D94D] py-2 px-3 4k:py-4 rounded w-full"
                        rows="5"
                        name="coverLetter"
                        id="cover-letter"
                        as="textarea"
                    ></Field>
                    <ErrorMessage name="coverLetter" class="text-red-500 text-sm" />
                </div>
                <div>
                    <label class="mb-2" for="resume"
                        >Upload CV/Resume <span class="text-red-500">*</span></label
                    ><br />
                    <Field name="resume" v-slot="{ field }">
                        <input type="file" id="resume" accept=".pdf,.doc,.docx" v-bind="field" />
                    </Field>

                    <p class="text-[10px] text-[#547326]">Allowed Types: .pdf, .doc, .docx</p>
                    <ErrorMessage name="resume" class="text-red-500 text-sm" />
                </div>
                <div class="flex items-center gap-2">
                    <Field
                        v-slot="{ field }"
                        name="terms"
                        type="checkbox"
                        :value="true"
                        :unchecked-value="false"
                    >
                        <input
                            class="w-4 h-4"
                            type="checkbox"
                            name="terms"
                            id="terms"
                            v-bind="field"
                        />
                        <label class="mb-2 inline-block" for="terms"
                            >By using this form you agree with the storage and handling of your data
                            by this website.  <span class="text-red-500">*</span></label
                        >
                    </Field>
                </div>
                <button
                    type="submit"
                    class="bg-[#547326] hover:bg-[#4c6822] rounded-lg text-white py-2 px-5 4k:text-lg uppercase inline-block"
                >
                    Submit
                </button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import * as yup from "yup";

const formSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    coverLetter: yup.string().required(),
    resume: yup.string().required(),
    terms: yup.bool().oneOf([true]).required(),
});

const onSubmit = (values) => {
    console.log(values);
};
</script>

<style lang="scss" scoped></style>
