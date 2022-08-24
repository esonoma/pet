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
	color: rgb(45, 45, 45);
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	font-weight: 500;
	font-size: 48rpx;
	padding: 60rpx 0rpx;
}
</style>
