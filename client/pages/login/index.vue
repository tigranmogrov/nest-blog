<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();
</script>

<template>
  <div>
    <div>
      <!--      <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>-->
      <!--      <button-->
      <!--        class="class=&quot;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"-->
      <!--        @click="-->
      <!--          signIn('credentials', { username: 'test', password: 'hunter2' })-->
      <!--        ">-->
      <!--        JS Sign In-->
      <!--      </button>-->
      <!--      <button-->
      <!--        class="class=&quot;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"-->
      <!--        @click="signOut()">-->
      <!--        Sign Out-->
      <!--      </button>-->
      <button
        class="class=&quot;text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="signOut()">
        Sign Out
      </button>
    </div>
    <div>
      <!--      <img :src="session?.user" alt="" />-->
      <!--      <pre>{{ cookies }}</pre>-->
    </div>
  </div>
</template>
