<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" @change="switchTask(taskID)" />
        <div class="content" :class="{ done : task.completed }" >
          <h3>{{ task.title }}</h3>
          <h5>Date Added: {{ task.dateAdded }}</h5>
          <h4>Time Added: {{ task.timeAdded }}</h4>
        </div>
        <button type="button" @click="removeTask(task.id)" >Delete</button>
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

<style scoped>
ul {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
li {
  list-style-type: none;
  padding: 0;
  position: relative;
}
.content {
  padding: 2rem;
  border-radius: 1rem;
  background-color: #eee;
}
h3 {
  font-size: 0.95rem;
}
h4 {
  font-size: 0.8rem;
  font-weight: 400;
}
h5 {
  font-size: 0.8rem;
  font-weight: 500;
  color: #323232;
  font-style: italic;
}
input {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
}
button {
  background-color: #ff0000;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
}
.done {
  background-color: rgba(55, 255, 0, 0.3);;
}
</style>
