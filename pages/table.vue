<template>
    <Tabs :labels="tabs">
        <template #tab-1>
            <div v-if="nodata()" grid="~ cols-4 gap-4 ">
                <TableCard v-for="(task, index) in tasks" :key="index" :task="task" :index="index"
                    @remove="remove($event)" />
            </div>
            <div v-else flex="~" justify="center" items="center" text="2xl" h="48">
                no data
            </div>
        </template>
        <template #tab-2>
            <TableAdd :title="taskTitle" :description="taskDis" :url="taskUrl" @add="add" h="full" />
        </template>

    </Tabs>
</template>
<script setup>
const tabs = ['Task', 'Add']
const nodata = () => tasks.value.length > 0
const taskCookie = useCookie('tasks')
const tasks = ref([])
const add = (taskTitle, taskDis, taskUrl) => {
    const exists = tasks.value.find(task => task.title === taskTitle)
    if (exists) {
        alert('Task already exists')
        return
    }
    if (taskTitle === '') {
        alert('Task title is required')
        return
    }
    tasks.value.push(
        {
            title: taskTitle,
            description: taskDis,
            url: taskUrl,
        }
    )
}
console.log(tasks)
onMounted(() => {
    const taskCookie = useCookie('tasks');
    tasks.value = taskCookie.value || []
})
watch(() => tasks.value, (newData) => {
    const taskCookie = useCookie('tasks');
    taskCookie.value = newData
}
    , { deep: true })
const remove = (index) => {
    tasks.value.splice(index, 1)
}
</script>
