<template>
	<app-header
		title="Account"
		:right="{
			text: 'Logout',
		}"
	/>

	<view>
		<text class="title">{{ title }}</text>
	</view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import appHeader from "../../components/app-header/index.vue";

const title = ref("Account");
</script>
