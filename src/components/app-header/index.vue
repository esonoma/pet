<template>
	<view :class="['app-header', `app-header-page-${page}`]">
		<text class="title">{{ text }}</text>
	</view>
</template>

<script setup lang="ts">
defineProps({
	text: {
		type: String,
		required: false,
		default: "",
	},
	page: {
		type: String,
		required: false,
		default: "default",
	},
});
</script>

<style lang="scss" scoped>
.app-header {
	height: 120rpx;
	line-height: 120rpx;
	color: rgb(45, 45, 45);
	font-family: Poppins;
	font-weight: 600;
	font-size: 48rpx;
	padding: 0 30rpx;
}
</style>
