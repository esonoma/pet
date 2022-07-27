<template>
	<status-bar />
	<view class="community-page-content">
		<text>Community s</text>
	</view>
</template>

<script lang="ts" setup>
import statusBar from "@components/status-bar/index.vue";
</script>
<style lang="scss">
page {
	height: 100%;
	width: 100%;
	background-color: salmon; // 鲑红
}
</style>

<style lang="scss" scoped>
// notes: 为什么page不生效? 参考下uni-app博文
// ref: https://uniapp.dcloud.io/tutorial/syntax-css.html#%E9%80%89%E6%8B%A9%E5%99%A8
page {
	height: 100%;
	width: 100%;
	background-color: darkseagreen; // 暗海绿
}

.community-page-content {
	height: 30%;
	background-color: #c0caad; // 晨蓝
}
</style>
