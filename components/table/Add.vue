<template>
    <div p="x-7 y-3">
        <div p="y-6 x-4">
            <h1 text="3xl dark" class="font-medium">Add Task</h1>
            <form>
                <div m="t-8" class="space-y-6">
                    <div>
                        <label text="sm gray-700 block font-medium">Name</label>
                        <input type="text" v-model="taskTitle" bg="light" border="0 gray-200 rounded" p="x-3 y-2"
                            text="blok gray-700" w="95" class="block" placeholder="Enter task name" />
                    </div>
                    <div>
                        <label text="sm gray-700 block font-medium" m="b-1">Url</label>
                        <input type="text" v-model="taskUrl" bg="light" border="0 gray-200 rounded" p="x-3 y-2"
                            text="blok gray-700" w="95" class="block" placeholder="https://www.google.es/" />
                    </div>
                    <div>
                        <label text="sm gray-700 block font-medium" m="b-1">Description</label>
                        <textarea type="text" v-model="taskDis" bg="light" border="0 gray-200 rounded-md" p="x-3 y-2"
                            text="gray-700" w="full" class="blok" placeholder="Enter Description" />
                    </div>
                </div>
                <div class="space-x-4" m="t-8">
                    <button type="submit" @click="$emit('add', taskTitle, taskDis, taskUrl)" p="x-8 y-3" bg="blue-500"
                        text="white" border="0 rounded"
                        class="hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">
                        Save</button>
                    <button p="x-8 y-3" bg="white" text="gray-600" border="0 rounded gray-200"
                        class="hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
                        Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
const taskTitle = ref('')
const taskDis = ref('')
const taskUrl = ref('')
</script>
