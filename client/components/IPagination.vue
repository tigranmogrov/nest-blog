<script setup lang="ts">
const props = defineProps<{
  maxVisible: number;
  totalPages: number;
  currentPage: number;
}>();
const emit = defineEmits(['pagechanged']);

const pages = computed(() => {
  function range(start: number, end: number) {
    return Array.from(
      Array(end - start + props.maxVisible),
      (_, i) => i + start
    );
  }

  const max = props.maxVisible;
  const middle = Math.floor(props.maxVisible / 2);
  const pageNum = Math.ceil(props.totalPages);
  if (pageNum < max) {
    return range(1, pageNum);
  }

  let start = props.currentPage - middle;
  let end = props.currentPage + middle;
  if (props.currentPage >= pageNum - middle) {
    start = pageNum - max + 1;
    end = pageNum;
  }

  return range(Math.max(1, start), Math.max(end, max));
});
const toPreviousPage = () => {
  emit('pagechanged', props.currentPage - 1);
};
const toNextPage = () => {
  emit('pagechanged', props.currentPage + 1);
};
const toPage = (page: number) => {
  emit('pagechanged', page);
};
</script>

<template>
  <nav
    class="isolate flex justify-center -space-x-px rounded-md"
    aria-label="Pagination">
    <a
      href="#"
      class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      :class="{ 'bg-gray-50 pointer-events-none': currentPage === 1 }"
      :tabindex="currentPage === 1 ? -1 : 1"
      @click="toPreviousPage">
      <span class="sr-only">Previous</span>
      <svg
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clip-rule="evenodd" />
      </svg>
    </a>
    <template v-for="(i, y) in pages">
      <a
        v-if="y < (totalPages <= maxVisible ? totalPages : maxVisible)"
        :key="`pagination-page-${i}`"
        href="#"
        :class="
          currentPage !== i
            ? 'relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
            : 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        "
        @click="toPage(i)"
        >{{ i }}</a
      >
    </template>
    <a
      href="#"
      class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      :class="{ 'bg-gray-50 pointer-events-none': currentPage === totalPages }"
      :tabindex="currentPage === totalPages ? -1 : 1"
      @click="toNextPage">
      <span class="sr-only">Next</span>
      <svg
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clip-rule="evenodd" />
      </svg>
    </a>
  </nav>
</template>

<style scoped></style>
