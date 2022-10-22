<template>
    <tr class="bg-#ede0d4 border-b">
        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
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
            <button text="#2b2d42" hover:text="#ef476f" cursor="pointer" border="none" class="bg-#ede0d4" @click="$emit('remove',taskIndex)">
                <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z"/></svg>
            </button>
        </td>
    </tr>
</template>
<script setup>
    const props = defineProps(['task', 'taskIndex'])
</script>