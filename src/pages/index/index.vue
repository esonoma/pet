<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }} {{ login.username }}</text>
    </view>
    <button type="button" @click="startLogin">Login</button>
    <button type="button" @click="loginOut">Logout</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLogin } from "../../store/login";

const login = useLogin();
const title = ref("Hello");

function startLogin() {
  login.setLoginUser("XMing");
}

function loginOut() {
  login.logout();
}
</script>
