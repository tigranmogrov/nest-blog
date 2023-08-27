<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <pre>
    {{ route.params.id }}
  </pre>
</template>

<style scoped></style>
