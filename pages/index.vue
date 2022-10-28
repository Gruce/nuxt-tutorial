<template>
    <Tabs :labels="tabs" @clicked="doSomething()">
        <template #tab-1>CONTENT 1</template>
        <template #tab-2>CONTENT 2</template>
        <template #tab-3>CONTENT 3</template>
    </Tabs>
</template>

<script setup>
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    
    const doSomething = () => console.log('Do Something');
</script>
