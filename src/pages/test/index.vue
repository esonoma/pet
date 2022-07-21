<template>
	<text>Test Page</text>
</template>
<script setup lang="ts">
import { onShow } from "@dcloudio/uni-app";

onShow(() => {
	console.log("App Show");
});
</script>
