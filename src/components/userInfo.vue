<script setup>
import { ref } from 'vue';
import { isValidEmail } from '../unit';
import Loading from './loading.vue';
const user = defineProps({
  userInfo: Object,
});
const isEdit = ref(false);
const isLoading = ref(false);
const editedUser = ref({ ...user.userInfo });
function editInfo(){
    isEdit.value = true;
}
function saveInfo() {
    // 验证非空和邮箱格式
    if (!editedUser.value.name || !editedUser.value.email || !isValidEmail(editedUser.value.email)) {
        alert('请输入有效的用户名或邮箱！');
        return;
    }
    isLoading.value = true;
    try {
         // 保存到 localStorage
        localStorage.setItem('user', JSON.stringify(editedUser.value));
        setTimeout(() => {
            isLoading.value = false;
            isEdit.value = false;
        }, 1500);
        // 结束编辑模式
    } catch (error) {
        console.error('执行失败');
    }
}

</script>

<template>
    <div class="user-info-root">
        <Loading v-if="isLoading" message="保存中，请稍等..."></Loading>
        <div class="avatar" :style="{ backgroundImage: `url(${editedUser.avatarUrl})` }"></div>
        <div class="card">
          <button v-if="!isEdit" @click="editInfo">编辑</button>
          <button v-if="isEdit" @click="saveInfo">保存</button>
          <button v-if="isEdit" @click="isEdit=false" class="cancle-btn">取消</button>
        </div>
        <div class="user-box">
            <div class="content">
                <div class="lable-text">name:</div>
                <div class="lable-content" v-if="!isEdit">{{editedUser.name}}</div>
                <div class="lable-content" v-if="isEdit"><input v-model="editedUser.name" type="text" placeholder="请输入name"></div>
            </div>
            <div class="content">
                <div class="lable-text">email:</div>
                <div class="lable-content" v-if="!isEdit">{{editedUser.email}}</div>
                <div class="lable-content" v-if="isEdit"><input  v-model="editedUser.email" type="text" placeholder="请输入email"></div>
            </div>
            <div class="content">
                <div class="lable-text">login time:</div>
                <div class="lable-content">{{editedUser.lgoinTime}}</div>
            </div>
            <div class="content">
                <div class="lable-text">sex:</div>
                <div class="lable-content">{{editedUser.sex}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .user-info-root{
        color: black;
        display: flex;
        padding: 10px;
        flex-direction: column;
        align-items: center;
        .avatar {
            width: 50px; /* 假设头像的固定宽度 */
            height: 50px; /* 假设头像的固定高度 */
            background-size: cover;
            background-position: center;
            border-radius: 50%;
          }
        button{
            border: 1px solid;
        }
        .name-text{
            font-size: 14px;
        }
        .cancle-btn{
            margin-left: 10px;
        }
        .user-box{
            .content{
                display: flex;
                flex-direction: row;
                .lable-text{
                    width: 120px;
                    text-align: left;
                }
                .lable-content{
                    text-align: left;
                    flex: 1;
                }
            }
        }
    }
</style>
