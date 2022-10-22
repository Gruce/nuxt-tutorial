<template>
  <div class="w-full" border="b dark opacity-15 ">
    <div class="container px-6 py-6 mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex justify-between min-w-full md:min-w-0">
          <div class="md:hidden mt-4">
            <button
              @click="showSideDrawer = true"
              type="button"
              class="rounded-md p-2 inline-flex text-gray-400 hover:text-gray-500 dark:bg-slate-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only dark:bg-slate-800">Open menu</span>
              <svg
                class="h-6 w-6 dark:bg-slate-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div class="">
            <NuxtLink
              to="/"
              class="text-2xl text-dark"
              decoration="none"
              self="center"
              mb="4"
              font="bold"
              whitespace="nowrap"
            >
              FrontEnd FrameWorks</NuxtLink
            >
          </div>
        </div>
        <nav class="hidden md:flex justify-between space-x-10 align-bottom">
          <div class="hidden md:flex space-x-10 align-bottom">
            <NuxtLink to="/" class="text-base font-medium text-dark bold text-xl hover:text-gray-500">
              Home
            </NuxtLink>
            <NuxtLink to="/table">
              <span class="text-base font-medium text-dark bold text-xl hover:text-gray-500">
                table
              </span>
            </NuxtLink>
            <NuxtLink to="/calculator">
              <span class="text-base font-medium text-dark bold text-xl hover:text-gray-500">
                calculator
              </span>
            </NuxtLink>
            <NuxtLink to="/table_v2">
              <span class="text-base font-medium text-dark bold text-xl hover:text-gray-500">
                Jawy's table
              </span>
            </NuxtLink>
            <NuxtLink to="/skyTable">
              <span class="text-base font-medium text-dark bold text-xl hover:text-gray-500">
                Sky Table
              </span>
            </NuxtLink>
          </div>
        </nav>
      </div>
      <!-- drawer component -->
      <div
        id="drawer-navigation"
        :class="showSideDrawer ? 'translate-x-0' : '-translate-x-full'"
        class="bg-dark fixed z-40 top-0 left-0 h-screen transition-all duration-700 overflow-y-auto w-80"
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <button
          @click="showSideDrawer = false"
          type="button"
          data-drawer-dismiss="drawer-navigation"
          aria-controls="drawer-navigation"
          class="text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-500 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <div class="py-4 overflow-y-auto">
          <ul class="space-y-2 p-5">
            <NuxtLink to="https://github.com/Gruce/nuxt-tutorial">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="text-gray-200 h-6 w-6 ml-2 mt-2"
                width="0.97em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/"
              class="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-gray-200 hover:text-gray-800"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Home</span>
            </NuxtLink>
            <NuxtLink
              to="/table"
              class="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-gray-200 hover:text-gray-800"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">table</span>
            </NuxtLink>
            <NuxtLink
              to="/calculator"
              class="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-gray-200 hover:text-gray-800"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 transition duration-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">calculator</span>
            </NuxtLink>
            <NuxtLink
              to="/"
              class="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-gray-200 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Ask Us</span>
            </NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const showSideDrawer = ref(false);
</script>
