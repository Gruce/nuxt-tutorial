<template>
    <div>
        <input v-model="name" />
    </div>
</template>
<script setup>
const name = useSaveState('name', null)

</script>