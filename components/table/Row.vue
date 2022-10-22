<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{taskIndex+1}}
        </th>
        <td py="4" px="6">
            {{task.title}}
        </td>
        <td py="4" px="6">
            {{task.descrption}}
        </td>
        <td py="4" px="6">
            {{task.url}}
        </td>
        <td py="4" px="6">
            <button p="1" pb="0" class="text-dark   text-sm " @click="$emit('remove',taskIndex)">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </td>
    </tr>
</template>
<script setup>
const props = defineProps(['task', 'taskIndex'])
</script>