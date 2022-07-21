<template>
	<status-bar v-if="props.statusbar" />
	<view class="header-view">
		<view class="header-left-view">
			<slot name="header-left" />
			<text>Back</text>
		</view>

		<view class="content">
			<view v-if="renderSlotContent('center')">
				<slot name="header-center" />
			</view>
			<view v-else>
				<text class="title">{{ props.title }}</text>
			</view>
		</view>

		<text> Logout </text>

		<slot name="header-right" />
	</view>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
import statusBar from "../status-bar/index.vue";

const currentInstance = getCurrentInstance();

const props = defineProps({
	statusbar: { type: Boolean, default: true, required: false },
	retractable: { type: Boolean, default: true, required: false },
	recordable: { type: Boolean, default: true, required: false },
	title: { type: String, default: "HShop", required: false },
	subtitle: { type: String, default: "", required: false },
	align: { type: String, default: "center", required: false },
	left: {
		required: false,
		type: [String, Object],
		default() {
			return {
				icon: "back-icon",
				text: "",
				action: () => {
					// ...
				},
			};
		},
		validator() {
			return true;
		},
	},
	right: {
		type: [String, Object],
		default() {
			return {
				icon: "right-icon",
				text: "",
				action: () => {
					// ...
				},
			};
		},
		validator() {
			return true;
		},
	},
});

function renderSlotContent(position: "left" | "center" | "right"): boolean {
	return !!currentInstance?.slots[`header-${position}`];
}
</script>

<style lang="less">
.header-view {
	height: 100upx;
	padding: 10upx 30upx;
	background-color: #fee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
