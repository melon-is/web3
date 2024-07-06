<template>
  <div class="loading">
    <div class="spinner"></div>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    message: String, // 可选的加载信息
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.message {
  font-size: 18px;
  margin-top: 10px;
  color: #555;
}
</style>
