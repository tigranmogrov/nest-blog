<script setup lang="ts"></script>

<template>
  <header class="dark:bg-gray-900 h-20 pl-6 pr-6">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <nav class="">
        <ul class="flex items-center">
          <li>
            <nuxt-link
              class="header__list-item h-20 flex items-center text-lg pl-2 pr-2 text-yellow-400 transition hover:text-gray-300"
              to="/">
              <span class="link link-underline link-underline-black">Home</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="header__list-item h-20 flex items-center text-lg pl-2 pr-2 text-yellow-400 transition hover:text-gray-300"
              to="/blog">
              <span class="link link-underline link-underline-black">Blog</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="header__list-item h-20 flex items-center text-lg pl-2 pr-2 text-yellow-400 transition hover:text-gray-300"
              to="/cases">
              <span class="link link-underline link-underline-black"
                >Cases</span
              >
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="header__list-item h-20 flex items-center text-lg pl-2 pr-2 text-yellow-400 transition hover:text-gray-300"
              to="/services">
              <span class="link link-underline link-underline-black"
                >Services</span
              >
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="header__list-item h-20 flex items-center text-lg pl-2 pr-2 text-yellow-400 transition hover:text-gray-300"
              to="/wiki">
              <span class="link link-underline link-underline-black">Wiki</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="header__list-item h-20 flex items-center text-lg pl-2 pr-2 text-yellow-400 transition hover:text-gray-300"
              to="/contact">
              <span class="link link-underline link-underline-black">
                Contact</span
              >
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div>
        <h3 class="text-lg text-white">Name</h3>
        <a
          class="text-base text-blue-500 transition block hover:text-gray-300"
          href="mailto:demo@gmail.com"
          >demo@gmail.com</a
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(currentColor, currentColor);
}

.header__list-item:hover .link-underline {
  background-size: 100% 2px;
  background-position: 0 100%;
}
</style>
