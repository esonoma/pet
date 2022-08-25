<template>
	<view class="card-header">
		<view
			class="card-header-child card-header-left"
			:class="[`card-header-${mode}-left`]"
			@tap="onClick($event, { type: 'left', mode })"
		>
			<slot name="CardHeaderLeftSlot">
				<text>{{ leftLabel }} </text>
			</slot>
		</view>
		<view
			class="card-header-child card-header-right"
			:class="[`card-header-${mode}-right`]"
			@tap="onClick($event, { type: 'right', mode })"
		>
			<slot name="CardHeaderRightSlot">
				<text>{{ rightLabel }}</text>
			</slot>
		</view>
	</view>
</template>

<script lang="ts" setup>
defineProps({
	mode: {
		type: String,
		default: () => "inline",
	},
	leftLabel: String,
	rightLabel: String,
	onClick: {
		type: Function,
		default: () => {
			return () => {
				// do something
			};
		},
	},
});
</script>
<style scoped lang="scss">
.card-header {
	padding: 20rpx 30rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	// background: rgb(192, 189, 189);
}

.card-header-left {
	font-family: $emphasized-content-font-family;
	font-weight: 300;
	font-size: 36rpx;
	color: #5f5b5b;
}
.card-header-right {
	font-size: 24rpx;
	color: #827397;
}
</style>
