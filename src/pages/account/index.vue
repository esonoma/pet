<template>
  <view>
    <text class="title">{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

const title = ref("Account");
</script>
