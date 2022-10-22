<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-right">
        <th py="4" px="6">
            <button @click="$emit('remove',taskIndex)">
                احذفني وخلصني من الدنيا
            </button>
        </th>
        <th py="4" px="6" >
            {{task.url}}
        </th>
        <td py="4" px="6">
            {{task.description}}
        </td>
        <td py="4" px="6">
            {{task.time}}
        </td>
        <td py="4" px="6">
            {{task.title}}
        </td>
        <td text="center">
            {{taskIndex+1}}
        </td>
    </tr>
</template>
<script setup>
const props = defineProps(['task', 'taskIndex'])
</script>