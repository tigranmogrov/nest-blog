<script lang="ts" setup>
// import { useAuthStore } from '@/stores/auth';
//
// const auth = useAuthStore();
// onMounted(() => {
//   auth.getUser('admin', '1234');
// });
</script>

<template>
  <div class="wrapper">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<style>
:root,
body {
  height: 100%;
}

.wrapper {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  max-width: 100%;
  min-height: 100vh;
}
</style>
