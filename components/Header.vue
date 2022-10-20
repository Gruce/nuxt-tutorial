<template>
  <div>
    <div class="bg-gray-100">
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <img src="public/img/icon-gray.svg" class="w-12">
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <ul :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
            <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              <NuxtLink to="/intro">intro</NuxtLink>
            </li>
            <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              <NuxtLink to="/calculator">calculator</NuxtLink>
            </li>
            <!-- <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              Contact Us
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
