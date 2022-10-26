<template>
    <div flex="~ col">
        <!-- Header - BUTTONS -->
        <div flex="~">
            <div 
                v-for="(label, index) in labels" :key="label"
                @click="selectedTab = index"

                :class="[
                    selectedTab == index
                    ? 'bg-gray-300 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-300 cursor-pointer',
                ]"
                p="4"
            >
                {{ label }}
            </div>
        </div>

        <!-- Contents -->
        <div flex="grow" border="~">
            <div v-for="item in labels.length" :key="'tab' + item" >
                <slot v-if="item == (selectedTab + 1)" :name="`page-${item}`" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['labels'])
const selectedTab = ref(0)
</script>



<!--


    <template>
    <div flex="~ col"> -->
        <!-- Header - BUTTONS -->
        <!--
        <div flex="~">
            <div 
                v-for="(label, index) in labels" :key="label"
                @click="selectedTab = index"

                :class="[
                    selectedTab == index
                    ? 'bg-gray-300 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-300 cursor-pointer',
                ]"
                p="4"
            >
                {{ label }}
            </div>
            <button @click="$emit('clicked')">Do Something</button>
        </div>

    -->
        <!-- Contents -->

        <!--

        <div flex="grow" border="~">
            <div v-for="item in labels.length" :key="'tab' + item" >
                <slot v-if="item == (selectedTab + 1)" :name="tab-${item}" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['labels'])
const selectedTab = ref(0)
</script>
-->
