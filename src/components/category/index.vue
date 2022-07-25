<template>
	<slot
		v-for="(category, index) in categories"
		:key="category.id"
		:category="category"
		:current="index"
		:total="categories.length"
		name="category"
	/>
</template>

<script setup lang="ts">
defineProps({
	categories: {
		type: Array,
		required: false,
		default: () => [],
	},
});
</script>
