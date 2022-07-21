<template>
	<view class="status-bar" :class="notWeixinStatusStyle"></view>
</template>

<script setup lang="ts">
// #ifndef MP-WEIXIN
const { statusBarHeight } = uni.getSystemInfoSync();
const notWeixinStatusStyle = {
	height: statusBarHeight,
};
// #endif
</script>

<style lang="less">
@import "./status-bar-polyfill.less";
/* #ifdef MP-WEIXIN */
.status-bar {
	height: var(--status-bar-height);
	background-color: transparent;
}
/* #endif */
</style>
