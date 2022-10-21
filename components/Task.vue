<template>
    <div flex="gap-4">
        <span m-5>{{taskIndex+1}}</span>
        <span  m-5>{{task.title}}</span>
        <button ml-24 @click="$emit('remove',taskIndex)">delete</button>
    </div>
</template>
<script setup>
const props = defineProps(['task', 'taskIndex'])
</script>