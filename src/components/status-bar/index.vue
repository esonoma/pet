<template>
	<view class="status-bar"></view>
</template>

<script setup lang="ts">
// #ifndef MP-WEIXIN
// const { statusBarHeight } = uni.getSystemInfoSync();
// const notWeixinStatusStyle = {
// 	height: statusBarHeight,
// };
// #endif
</script>

<style lang="scss">
@import "./status-bar-polyfill.scss";
/* #ifdef MP-WEIXIN */
.status-bar {
	height: var(--status-bar-height);
	background-color: transparent;
}
/* #endif */
</style>
