<template>
    <div mt="24">
        <h1 text="blue 20px center"> {{ name }} </h1>
        <h2 text="purple 16px center"> {{ age }} </h2>
    </div>
</template>

<script setup>
    const name = getName('Jafar');
    const age = getAge(20);
</script>