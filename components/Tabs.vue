<template>
    <div flex="~ col" mx="9" px="9">
        <!-- Header - BUTTONS -->
        <div flex="~">
            <div v-for="(label, index) in labels" :key="label" @click="selectedTab = index" :class="[
                selectedTab == index
                    ? 'bg-tab text-tab'
                    : 'text-gray-500 bg-gray-100 hover:text-gray-100 hover:bg-red-800 cursor-pointer',
            ]" p="x-8 y-3" border=" rounded-t-lg " m="r-1" >
                {{ label }}
            </div>
            <!-- <button @click="$emit('clicked')">Do Something</button> -->
        </div>
        <!-- Contents -->
        <div>
            <div v-for="item in labels.length" :key="'tab' + item" class="bg-tab" p="x-9" border="rounded-rt-lg rounded-b-lg">
                <Transition enter-active-class="  transform  duration-700 ease-out" enter-from-class=" opacity-0"
                    enter-to-class=" opacity-100" leave-active-class=" transform  " leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <slot v-if="item == (selectedTab + 1)" :name="`tab-${item}`" />
                </Transition>
            </div>
        </div>
    </div>

</template>

<script setup>
const props = defineProps(['labels'])
const selectedTab = ref(0)
</script>
<style scoped>
.bg-tab {
    background-color: #9c9c9cc7;
}
</style>