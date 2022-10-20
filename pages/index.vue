<template>
    <div text="red 2rem center">
        <input v-model="title" placeholder="Enter task title" /> <br />
        <button @click="newTask()">Insert</button>
        <hr />
        <div flex="~ col gap-4" items="center" justify="center">
            <Task v-for="(task, index) in tasks" :key="task.title" :task="task" :taskIndex="index"
                @remove="removeTask($event)" />
        </div>
    </div>
</template>
<script setup>
const tasks = ref([])

// Addition
const title = ref('')

const newTask = () => {
    tasks.value.push({
        title: title.value
    })
    title.value = ''
}

const removeTask = (index) => {
    tasks.value.splice(index, 1)
}
</script>
