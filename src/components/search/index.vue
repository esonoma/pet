<template>
	<view class="main-search">
		<input class="main-search-input" type="text" placeholder="Search.." />
		<view class="fake-search-icon-view">
			<icon type="search" size="24" color="white" />
		</view>
	</view>
</template>
<style scoped lang="scss">
$search-container-height: 90rpx;
.main-search {
	// width: 100%;
	height: $search-container-height;
	padding: 0 30rpx;

	position: relative;

	.main-search-input {
		height: 100%;
		padding: 0 120rpx 0 30rpx; // 120rpx = 30rpx(search padding-right) + 90rpx(search-icon-width)
		border-radius: 16rpx;
		background-color: #f8f7f7;
		font-size: 26rpx;
	}

	.fake-search-icon-view {
		position: absolute;
		top: 0;
		right: 30rpx;
		height: $search-container-height;
		width: $search-container-height;
		background: #827397;

		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;

		color: white;

		border-radius: 0 16rpx 16rpx 0;
	}
}
</style>
