<template>
  <div>
    <input v-model="newTask" type="text" />
    <button @click="addTask">Add Task</button>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" @change="switchTask(taskID)" />
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/taskStore"
import { ref, computed } from "vue";

export default {
  setup() {
    const taskStore = useTaskStore();

    const newTask = ref('');
    
    const tasks = computed(() => taskStore.tasks);
    
    const addTask = () => {
      taskStore.createTask({
        id: Math.random(),
        title: newTask.value,
        completed: false,
      });
      newTask.value = '';
    }

    const switchTask = (taskID) => {
      taskStore.completeTask(taskID)
    }

    return {
      newTask,
      tasks,
      addTask,
      switchTask
    };
  },
};
</script>
