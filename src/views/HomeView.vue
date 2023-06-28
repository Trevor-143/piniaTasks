<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" @change="switchTask(taskID)" />
        <div class="content" :class="{ done : task.completed }" >
          <h3>{{ task.title }}</h3>
          <h4>Time Added: {{ task.timeAdded }}</h4>
          <h5>Date Added: {{ task.dateAdded }}</h5>
        </div>
        <button type="button" @click="removeTask(task.id)" >Delete Task</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/taskStore"
import { computed } from "vue";

export default {
  components: {
  },
  setup() {
    const taskStore = useTaskStore();
    const tasks = computed(() => taskStore.tasks);
    
    const switchTask = (taskID) => {
      taskStore.completeTask(taskID)
    }
    const removeTask = (taskID) => {
      taskStore.removeTask(taskID)
    }

    return {
      tasks,
      switchTask,
      removeTask
    };
  },
};
</script>

<style>
.done {
  background-color: rgb(139, 255, 139);
}
</style>
