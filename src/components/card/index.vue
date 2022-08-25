<template>
	<view class="card-view card" :class="{ 'card-item': isPackaged }">
		<card-header />
		<card-content />
	</view>
</template>

<script lang="ts" setup>
defineProps({
	isPackaged: {
		// 当经过Card包装后, 会在每一个CardView上多存在一个 card-item 的 class
		type: Boolean,
		default: () => false,
	},
});
</script>
<style scoped lang="scss"></style>
