<template>
  <div class="user-center">
    <UserInfo :userInfo="userMsg" />
  </div>
</template>

<script setup>
   import UserInfo from './components/userInfo.vue';
   import { ref } from 'vue';

   function getUserFromLocalStorage() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      return JSON.parse(savedUser);
    } else {
      return {
        name: 'melon',
        email: '233232@qq.com',
        lgoinTime: '2024-11-09 09:00',
        sex: 'man',
        avatarUrl: 'https://gips3.baidu.com/it/u=569530470,3394841232&fm=3039&app=3039&f=JPEG?w=1024&h=1024' // 假设这里是你的头像 URL
      };
    }
  }
  const userMsg = ref(getUserFromLocalStorage());
</script>
<style scoped>
  .user-center{
    width: 400px;
    height: 800px;
    background-color: rgb(249, 250, 251);
  }
</style>
