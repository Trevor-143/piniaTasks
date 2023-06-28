<template>
    <div class="Aform" >
        <h2>Add Task</h2>
        <div class="top">
            <input v-model="newTask" type="text" />
            <button @click="addTask">Add Task</button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue"
import { useTaskStore } from "../stores/taskStore"

export default {
    setup() {

        const taskStore = useTaskStore()
        const newTask = ref('')

        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const hour = date.getHours()
        const minutes = date.getMinutes()

        const dateToday = `${day}-${month+1}-${year}`
        const time = `${hour} : ${minutes}`

        // onMounted(() => {
        //   console.log(dateToday)
        //   console.log(time)  
        // })       

        const addTask = () => {
            taskStore.createTask({
                id: Math.random(),
                title: newTask.value,
                completed: false,
                timeAdded: time,
                dateAdded: dateToday
            });
            newTask.value = '';
        }
        return {
            newTask,
            addTask
        }
    }
}
</script>

<style>
    .Aform {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>