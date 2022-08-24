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
<script lang="ts">
// virtualHost
// ref: https://uniapp.dcloud.io/tutorial/vue3-api.html#%E5%85%B6%E4%BB%96%E9%85%8D%E7%BD%AE
export default {
	name: "category",
	options: {
		multipleSlots: true,
		styleIsolation: "isolated",
		addGlobalClass: true,
		virtualHost: true,
	},
};
</script>
