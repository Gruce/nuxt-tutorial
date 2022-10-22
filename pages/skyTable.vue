<template>
    <div flex="~ col gap-4" justify="center" >
            <div  px="3" py="7"  m="auto" bg="#cb997e" class="rounded-lg relative">    
                <input border="none" rounded="sm" m-5 p-2 v-model="title" placeholder="Name" /> 
                <input border="none" rounded="sm" m-5 p-2 v-model="descrption" placeholder="Category" /> 
                <input border="none" rounded="sm" m-5 p-2 v-model="url" placeholder="Url" /> 
                <button border="none" rounded="lg" bg="gray-700" text="gray-50" font="bold" cursor="pointer" hover:bg="#f1faee" hover:text="#0077b6" p-2 @click="newTask()">
                    Add
                </button>
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table w="full" text="sm left " class="w-full text-sm text-left text-gray-500">
                        <thead text="xs gray-700 " uppercase bg="#ddbea9">
                            <tr>
                                <th scope="col" py="3" px="6" >
                                    id
                                </th>
                                <th scope="col" py="3" px="6">
                                    Name
                                </th>
                                <th scope="col" py="3" px="6">
                                    category
                                </th>
                                <th scope="col" py="3" px="6">
                                    url
                                </th>
                                <th scope="col" py="3" px="6">
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableSky v-for="(task, index) in tasks" :key="task.title"
                                                                     :task="task"
                                                                     :taskIndex="index"
                                                                     @remove="removeTask($event)"/>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
</template>

<script setup>
    const tasks = ref([])

    // Addition
    const title = ref('') 
    const descrption = ref('')
    const url = ref('')

    const newTask = () => {
        if (title.value === '' || descrption.value === '' || url.value === '') {
            alert('Please fill all fields')
            return
        }
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
