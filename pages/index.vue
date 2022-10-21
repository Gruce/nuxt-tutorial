<template>
    <body p-10>
    <div text="blue 2rem center ">
    
<div border-2 p-5>
   <span border-2 p-2 >Number</span>
        <input m-5 p-2 v-model="title" placeholder="Enter Title itle" /> 
        <input m-5 p-2 v-model="descrption" placeholder="Enter Descrption" /> 
        <input m-5 p-2 v-model="url" placeholder="Enter Url" /> 


        
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
