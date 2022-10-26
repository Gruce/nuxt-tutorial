<template>
    <div bg="white" p="y-3 x-6" w="48" m="y-4"
        class="relative rounded-3xl shadow-xl hover:shadow-sm hover:shadow-zinc-500">
        <div m="t-2">
            <div flex="~" justify="between" items="center" >
                <p :class="open ? 'hidden' : 'visible'" text="2xl red-700"  m="y-2" class="font-semibold">{{ task.title
                }}</p>
                <svg @click="open = !open" :class="open ? 'hidden' : 'visible'" class="text-gray-600 hover:text-red-600"
                    xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 36 36">
                    <path fill="currentColor"
                        d="m4.22 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2.14 2.14 0 0 0 .43 0L13 32l15.84-15.78L20 7.4Z"
                        class="clr-i-solid clr-i-solid-path-1" />
                    <path fill="currentColor"
                        d="m33.82 8.32l-5.9-5.9a2.07 2.07 0 0 0-2.92 0L21.72 5.7l8.83 8.83l3.28-3.28a2.07 2.07 0 0 0-.01-2.93Z"
                        class="clr-i-solid clr-i-solid-path-2" />
                    <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <input v-if="open" v-model.lazy="task.title" type="text" placeholder="name" text="red"
                    border="1 rounded-md  gray-300" p="x-4 y-3" m="b-4" />
            </div>
            <div flex="~" text="gray-400 sm">
                <p :class="open ? 'hidden' : 'visible'">{{ task.description }}</p>
                <input v-if="open" v-model.lazy="task.description" type="text" placeholder="description"
                    border="1 rounded-md  gray-300" p="x-4 y-3" m="b-4" />
            </div>
            <div border="t-2" class="opacity-20"></div>
            <div flex="~" justify="between" items="center">
                <div class=" hover:text-blue-700">
                    <a :href="`${task.url}`">
                        <p>Link</p>
                    </a>
                </div>
                <div text="gray-400">
                    <div flex="~" justify="center" items="center" class="hover:text-red-600 "
                        @click="$emit('remove', index)">
                        <svg width="22" height="22" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const open = ref(false)
const props = defineProps(['task', 'index'])
</script>
<style scoped>
.text-red {
    color: #ff3b3f;
}
</style>