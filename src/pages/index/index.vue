<template>
	<app-header />
	<view>
		<view class="title">
			<text>Home</text>
		</view>
		<text> {{ $t("message.welcome") }} </text>
	</view>
</template>

<script setup lang="ts">
import appHeader from "@components/app-header/index.vue";
</script>

<style lang="less">
.title {
	font-size: 20px;
	color: red;
}
</style>
