
<template>
    <div>
        <Button @click="open = !open">{{open ? 'Hide' : 'Show'}} TABLE </Button>
        <Transition enter-active-class="  transform  duration-700 ease-out"
                    enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                    leave-active-class=" transform  duration-300 ease-in" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
            <div v-if="open" border mb="8" px="3" py="7"  m="auto" bg="light" class="rounded-lg relative">    
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
                            <TableRow/>
                        </tbody>
                    </table>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup>
const open = ref(false)
</script>
