<template>
	<status-bar />
	<view class="home-page-view page-view">
		<search />
		<category />
		<hot-pet />
		<hot-pet />
	</view>
</template>

<script setup lang="ts">
import statusBar from "@components/status-bar/index.vue";
import search from "./components/search.vue";
import hotPet from "./components/hot-pet.vue";
import category from "./components/category.vue";
</script>
<style scoped lang="scss"></style>
