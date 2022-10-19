<template>
    <div flex="~ gap-4">
        <span>{{ taskIndex + 1 }}</span>
        <span>{{ task.title }}</span>
        <button @click="$emit('remove', taskIndex)">delete</button>
    </div>
</template>

<script setup>
const props = defineProps(['task', 'taskIndex'])
</script>