<template>
  <div class="p-20 bg-[#45C4B0]">
    <div class="p-20 bg-[#13678A] text-center">
      <input m-5 p-2 v-model="url" placeholder="رابط المهمة" />
      <input m-5 p-2 v-model="description" placeholder="وصف المهمة" />
      <input m-5 p-2 v-model="time" type="time" placeholder="وقت المهمة" />
      <input m-5 p-2 v-model="title" placeholder="عنوان المهمة" />
      <button class="px-8 py-2 bg-[#DAFDBA]" @click="newTask()">
        اضـــافـــة
      </button>
    </div>

    <div class="p-20 text-center">
      <table
        w="full"
        text="sm left "
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr class="text-center ">
            <th scope="col" py="3" px="6">التعديلات</th>
            <th scope="col" py="3" px="6">الرابط</th>
            <th scope="col" py="3" px="6">الوصف</th>
            <th scope="col" py="3" px="6">التوقيت</th>
            <th scope="col" py="3" px="6">العنوان</th>
            <th >#</th>
          </tr>
        </thead>
        <tbody>
          <TableArabicRow
            v-for="(task, index) in tasks"
            :key="task.title"
            :task="task"
            :taskIndex="index"
            @remove="removeTask($event)"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const tasks = ref([]);

// Addition
const title = ref("");
const description = ref("");
const url = ref("");
const time = ref("");

const newTask = () => {
  if (
    title.value === "" ||
    description.value === "" ||
    url.value === "" ||
    time.value === ""
  ) {
    alert("Please fill all fields");
    return;
  }
  tasks.value.push({
    title: title.value,
    description: description.value,
    url: url.value,
    time: time.value,
  });
  title.value = "";
  description.value = "";
  url.value = "";
  time.value = "";
};
const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>
