<script setup lang="ts">
import { IPost } from '~~/types/post';

const router = useRouter();
const route = useRoute();
const currentPage = ref(Number(route.query.page) || 1);
const limit = ref(Number(route.query.limit) || 3);
const { data, pending } = await useFetch('/api/posts', {
  params: {
    page: currentPage,
    limit: limit.value,
  },
});

const showMore = (value: number) => {
  currentPage.value = value;
  // router.replace({ query: { page: value } });
  router.push({
    path: '/',
    query: { page: value, limit: limit.value },
  });
};

const { data: user } = useAuth();
</script>

<template>
  <div>
    <h1>Home</h1>
    {{ user }}
    <div class="container mx-auto gap-2.5">
      <div
        v-if="!pending || !Object.keys(data).length"
        class="grid grid-cols-4 gap-4 text-slate-500">
        <div
          v-for="post in data.items"
          :key="post._id"
          class="max-w-sm rounded overflow-hidden shadow-lg mb-4 bg-white dark:bg-gray-900">
          <img
            class="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains" />
          <div class="px-6 py-4 pb-2">
            <div class="font-bold text-xl mb-2 dark:text-white">
              {{ post.title }}
            </div>
            <p class="text-gray-700 dark:text-gray-300">
              {{ post.desc }}
            </p>
          </div>
        </div>
      </div>
      <i-pagination
        v-if="data.totalPage > 1 || data"
        class="mt-8"
        :total-pages="data.totalPage"
        :current-page="currentPage"
        :max-visible="6"
        @pagechanged="showMore" />
    </div>
  </div>
</template>

<style scoped></style>
