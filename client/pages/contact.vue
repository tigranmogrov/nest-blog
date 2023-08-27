<script setup lang="ts">
useHead({
  title: 'contact',
});
definePageMeta({ auth: false });

const { data: posts, refresh } = await useFetch('/api/posts');
const create = async () => {
  await $fetch('/api/posts/create', {
    method: 'POST',
    body: { title: 'gef', desc: 'my desc' },
  })
    .then(() => {
      refresh();
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <div>
    <h1 class="font-bold text-2xl">contact</h1>
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="create">
      Create
    </button>
    <div class="space-y-8">
      <p>f</p>
      <div v-for="post in posts" :key="post.title">
        {{ post.title }}
        {{ post.desc }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
