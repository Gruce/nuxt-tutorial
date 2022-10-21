<template>

<div  flex="gap-4">
                    <span m-5>{{taskIndex+1}}</span>
                    <span border-2 m-5>{{task.title}}</span>
                    <span border-2 m-5>{{task.descrption}}</span>
                    <span border-2 m-5>{{task.url}}</span>
                    
                <button ml-24 @click="$emit('remove',taskIndex)">delete</button>
                 </div>
</template>

<script setup>

const props=defineProps(['task','taskIndex'])
</script>