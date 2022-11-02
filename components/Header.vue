<template>
  <div flex justify-between w="75%" mx-auto>
    <div text-3xl>
      Frontend Frameworks
      <br />
      Welcome {{ name }}
    </div>

    <div flex gap-4>
      <NuxtLink 
        v-for="nav in navs" :key="nav.name"
        :to="nav.path"
        text-2xl
        :un-text="$route.path == nav.path ? 'blue-600' : 'red-600'"
        >
        {{ nav.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const navs = ref([
  { name: 'Home', path: '/' },
  { name: 'Table', path: '/table' },
  { name: 'Sky Table', path: '/skyTable' },
])

// const nav = useSaveState('navs', null)
const name = useSaveState('name', null)
</script>
