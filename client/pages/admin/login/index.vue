<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
const { signIn, status, data } = useAuth();
// const authStore = useAuthStore();
const formData = reactive({
  email: '',
  password: '',
});

const login = async (event: Event) => {
  try {
    event.preventDefault();
    await signIn('credentials', {
      username: formData.email,
      password: formData.password,
      redirect: false,
    });
    if (status.value === 'authenticated') {
      navigateTo('/admin/dashboard');
    }
  } catch (error) {
    console.error(`${error}`);
  }
};

definePageMeta({
  title: 'Signin',
  layout: 'admin',
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/admin/dashboard',
  },
});
</script>

<template>
  <div>
    <div class="custom-bg mb-14 p-14 text-center text-white">
      <h1>Signin</h1>
    </div>
    <form
      class="card custom-card mx-auto w-11/12 max-w-md bg-white p-6 shadow-lg"
      @submit.prevent="login">
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Name</label
        >
        <input
          id="name"
          v-model="formData.email"
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          autocomplete="false"
          required />
      </div>

      <div>
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Password</label
        >
        <input
          id="password"
          v-model="formData.password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          autocomplete="false"
          name="password" />
      </div>
      <div class="flex justify-center mt-6">
        <button
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="submit">
          Sign In hi
        </button>
      </div>
    </form>
  </div>
</template>
