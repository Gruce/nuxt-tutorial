<template>
    <body p-10>
        <div text="blue 2rem center ">
            <div border-2 p-5>
                <input m-5 p-2 v-model="title" placeholder="Enter Title " />
                <button p-2 @click="newTask()">Add</button>
                <hr />
                <div flex="~ col gap-4" items="center" justify="center">
                    <Task v-for="(task, index) in tasks" :key="task.title" :task="task" :taskIndex="index"
                        @remove="removeTask($event)" />
                </div>
            </div>
        </div>
    </body>
</template>
<script setup>

const tasks = ref([])

// Addition
const title = ref('')

const newTask = () => {
    if (title.value === '') {
        alert('Title is required')
        return
    }
    tasks.value.push({
        title: title.value,
    })
    title.value = ''
}

const removeTask = (index) => {
    tasks.value.splice(index, 1)
}
</script>
