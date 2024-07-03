<template>
    <view>
        <web-view v-if="pdfUrl" :src="pdfUrl"></web-view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            pdfUrl: ''
        };
    },
    onLoad(options) {
		const filePath = decodeURIComponent(options.filePath);
		console.log('Decoded file path:', filePath);
		this.pdfUrl = filePath;
    }
};
</script>
