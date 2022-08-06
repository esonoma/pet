<template>
	<status-bar />
	<app-header text="Message" page="Home" />
	<button type="button" @tap="getMessage">getMessage</button>
	<message-content />
</template>

<script lang="ts" setup>
import statusBar from "@components/status-bar/index.vue";
import appHeader from "@components/app-header/index.vue";
import { getMessage } from "@domains/message.service";
import messageContent from "./message.vue";
</script>
