<template>
	<view class="hot-pet-view">
		<card-header leftLabel="Hots Pets" rightLabel="See all" />
		<view class="hot-pet-list">
			<view
				class="hot-pet-item"
				v-for="swiperItem in hots"
				:key="swiperItem"
			>
				<view class="hot-pet-item-image">
					<image
						:src="swiperItem.pet.images[0].image"
						:alt="swiperItem.pet.name"
					/>
				</view>
				<view class="hot-pet-item-content">
					<view class="hot-pet-item-title">
						<text>{{ swiperItem.pet.name }}</text>
						<text>{{ swiperItem.pet.gender }}</text>
					</view>
				</view>
				<view class="hot-pet-item-location">
					<text>
						{{ swiperItem.location.locationString }}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import cardHeader from "@components/card/card-header.vue";
import { reactive } from "vue";

const hots = reactive([
	{
		pet: {
			images: [
				{
					image: "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
				},
			],
			name: "Samantha",
			desc: "Samantha Samantha",
			gender: "woman",
		},
		isFollow: true,
		location: {
			lgt: 23.23,
			lat: 37.78,
			code: 1022200,
			province: "四川",
			city: "成都市",
			district: "高新区",
			country: "中和镇xxx号",
			locationString: "四川成都市高新区中和镇xxx号",
		},
	},
	{
		pet: {
			images: [
				{
					image: "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
				},
			],
			name: "Samantha",
			desc: "Samantha Samantha",
			gender: "woman",
		},
		isFollow: true,
		location: {
			lgt: 23.23,
			lat: 37.78,
			code: 1022200,
			province: "四川",
			city: "成都市",
			district: "高新区",
			country: "中和镇xxx号",
			locationString: "四川成都市高新区中和镇xxx号",
		},
	},
]);
</script>
<style scoped lang="scss">
.hot-pet-view {
	margin-bottom: 40rpx;
	.hot-pet-list {
		width: 100%;
		margin-top: 10rpx;
		display: flex;
		// flex-wrap: nowrap;
		gap: 16rpx;
		padding: 0 30rpx;
		overflow: scroll;

		.hot-pet-item {
			height: 564rpx;
			width: 460rpx;
			// background: red;
			border-radius: 16rpx 16rpx 30rpx 30rpx;
			// border: 1px solid #e8e8e8;

			.hot-pet-item-image {
				height: 402rpx;
				width: 100%;
				image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 16rpx 16rpx 30rpx 30rpx;
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
			.hot-pet-item-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;
				padding: 0 20rpx;

				& > text:first-child {
					font-size: 32rpx;
					font-family: $emphasized-content-font-family;
					color: #5f5b5b;
				}
				& > text:last-child {
					font-size: 24rpx;
				}
			}
			.hot-pet-item-location {
				margin-top: 6rpx;
				padding: 0 20rpx;
				font-size: 24rpx;
				color: #5f5b5b;
			}
		}
	}
}

.swiper-guide-wrap {
	width: 100%;
	::v-deep .swiper {
		height: 570rpx;
	}
}
</style>
