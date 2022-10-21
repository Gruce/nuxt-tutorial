<template>
    <div flex="~ col gap-4 " justify="center" >
        <button @click="open = !open" px="6" py="4" opacity-60 m="auto"  >{{open ? 'Hide' : 'Show'}} TABLE </button>
        <Transition enter-active-class="  transform  duration-700 ease-out"
                    enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                    leave-active-class=" transform  duration-300 ease-in" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
            <div v-if="open" border mb="8" px="3" py="7"  m="auto" bg="light" class="rounded-lg relative">    
                <input m-5 p-2 v-model="title" placeholder="Enter Title itle" /> 
                <input m-5 p-2 v-model="descrption" placeholder="Enter Descrption" /> 
                <input m-5 p-2 v-model="url" placeholder="Enter Url" /> 
                <button p-2 @click="newTask()">Add</button>
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table w="full" text="sm left " class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" py="3" px="6" >
                                    num
                                </th>
                                <th scope="col" py="3" px="6">
                                    Name
                                </th>
                                <th scope="col" py="3" px="6">
                                    description
                                </th>
                                <th scope="col" py="3" px="6">
                                    url
                                </th>
                                <th scope="col" py="3" px="6">
                                    <span class="sr-only">op</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow v-for="(task, index) in tasks" :key="task.title" :task="task" :taskIndex="index"
                @remove="removeTask($event)"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup>
const open = ref(false)

const tasks = ref([])

// Addition
const title = ref('') 
const descrption = ref('')
const url = ref('')

const newTask = () => {
    tasks.value.push({
        title: title.value,
        descrption:descrption.value,
        url:url.value
    })
    title.value = ''
    descrption.value=''
    url.value=''

}
const removeTask = (index) => {
    tasks.value.splice(index, 1)
}
</script>
