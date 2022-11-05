<template>
    <Tabs :labels="tabs">
        <template #tab-1>
            <div v-if="tasks.length > 0" grid="~ cols-4 gap-4 ">
                <TableCard v-for="(task, index) in tasks" :key="index" :task="task" 
                :deleteFunction="remove"/>
            </div>
            <div v-else flex="~" justify="center" items="center" text="2xl" h="48">
                No Task
            </div>
        </template>
        <template #tab-2>
            <TableAdd :task="task" :addFunction="add" h="full" />
        </template>
    </Tabs>
</template>
<script setup>
import { sleep } from '@antfu/utils';

const tabs = ['Task', 'Add']
const taskCookie = useCookie('tasks')
const tasks = ref([])
tasks.value = taskCookie.value || []

// TASK Object
const task = ref({
    title: '',
    description: '',
    url: ''
})


const add = () => {
    if (task.value.title === '') {
        alert('Task title is required')
        return
    }
    const exists = tasks.value.find(t => t.title === task.value.title)
    if (exists) {
        alert('Task already exists')
        return
    }
    tasks.value.push(task.value)
    taskCookie.value = tasks.value
    resetTask()
    alert("Task added")
}

const remove = (index) => {
    tasks.value.splice(index, 1)
    taskCookie.value = tasks.value
    resetTask()
    alert("Task Delete")
}

const resetTask = () => {
    task.value = {
        title: '',
        description: '',
        url: ''
    }
}
</script>
