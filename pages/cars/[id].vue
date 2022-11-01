<template>
    <div>
        You have selected the car: {{ selectedCar?.name }}
    </div>
</template>

<script setup>
const cars = ref([
    { id: 1, name: "BMW" },
    { id: 2, name: "KIA" },
    { id: 3, name: "TIGO" }
])

const route = useRoute()
const selectedCar = computed(() => cars.value.find(c => c.id == route.params.id))
</script>