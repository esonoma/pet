<template>
  <view>
    <text> {{ $t("message.welcome") }} </text>
  </view>
  <view class="content">
    <view class="text-area">
      <text class="title"> {{ login.username }}</text>
    </view>
    <button type="button" @click="startLogin">Login</button>
    <button type="button" @click="loginOut">Logout</button>
  </view>

  <view>
    <view v-for="data in messages" :key="data">
      <text>{{ data }}</text>
    </view>
  </view>
  <input class="uni-input" placeholder="Username" v-model="to" />
  <br />
  <input class="uni-input" focus placeholder="消息内容" v-model="textMessage" />
  <button type="button" @click="sendMessage">Send</button>
</template>

<script setup lang="ts">
import { ref, onMounted, inject, reactive } from "vue";
import { useLogin } from "../../store/login";

const messages = reactive<string[]>([]);

const to = ref("");
const textMessage = ref("Hello");
const socket: any = inject("socket");
const wsConnected = inject("wsConnected");

const login = useLogin();
console.log(login.username);

onMounted(() => {
  if (wsConnected) {
    socket.onMessage((data: any) => {
      messages.push(data);
    });
  }
});

function sendMessage() {
  if (wsConnected) {
    socket.send({
      data: JSON.stringify({
        to: to.value,
        text: textMessage.value,
        type: "text",
      }),
    });
  }
}

function startLogin() {
  login.setLoginUser("XMing");
}
function loginOut() {
  login.logout();
}
</script>
