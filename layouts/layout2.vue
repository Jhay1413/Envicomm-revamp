<template>
    <LayoutTopbar1 />
    <div class="wrapper mx-auto text-gray-900 font-normal">
        <LayoutHeader1 />
        <div>
            <slot />
        </div>
        <ElementsBackToTop />
        <ElementsInquiryBtn />
        <LayoutFooter1 />
    </div>
</template>
