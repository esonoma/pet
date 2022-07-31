<template>
	<status-bar />
	<app-header text="Message" page="Home" />
	<message-content />
</template>

<script lang="ts" setup>
import statusBar from "@components/status-bar/index.vue";
import appHeader from "@components/app-header/index.vue";
import messageContent from "./message.vue";
</script>
