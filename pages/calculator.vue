<template>
    <div flex="~" justify="center">
        <div grid="~ cols-4 rows-5 gap-2" rounded="xl" p="6" bg="purple">
            <input p="x-6 y-4" col-span="3" border="0 rounded-lg" bg="white" />
            <button p="x-6 y-4" border="0 rounded-lg" bg="white hover:gray-300" cursor="pointer">C</button>
            <div v-for="button in buttons" :key="button" p="x-6 y-4" rounded="lg" bg="white">{{button.label}}</div>
        </div>
    </div>
</template>

<script setup>
const buttons = [
    { label: "7", function: () => { } },
    { label: "8", function: () => { } },
    { label: "9", function: () => { } },
    { label: "*", function: () => { } },

    { label: "4", function: () => { } },
    { label: "5", function: () => { } },
    { label: "6", function: () => { } },
    { label: "-", function: () => { } },

    { label: "1", function: () => { } },
    { label: "2", function: () => { } },
    { label: "3", function: () => { } },
    { label: "+", function: () => { } },

    { label: "0", function: () => { } },
    { label: ".", function: () => { } },
    { label: "=", function: () => { } },
    { label: "/", function: () => { } },
]
</script>