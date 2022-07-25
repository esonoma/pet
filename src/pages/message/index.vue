<template>
	<status-bar />
	<app-header text="Message" page="Home" />
	<view>
		<text> Message </text>
	</view>
	<fixed-top-bar />
</template>

<script lang="ts" setup>
import statusBar from "@components/status-bar/index.vue";
import appHeader from "@components/app-header/index.vue";
import fixedTopBar from "@components/top-bar//fixed-top-bar.vue";
</script>
