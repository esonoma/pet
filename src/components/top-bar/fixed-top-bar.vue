<template>
	<view class="fixed-top-bar">
		<top-bar />
	</view>
</template>
<script setup lang="ts">
import topBar from "./index.vue";
</script>

<style lang="scss" scoped>
.fixed-top-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	// z-index: 999;
}
</style>
