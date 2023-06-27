import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }),
    actions: {
        createTask(newTask) {
            this.tasks.push(newTask)
            this.storeTaskLocally()
        },
        completeTask(taskID) {
            const theTask = this.tasks.find((task) => task.id === taskID)
            this.storeTaskLocally()
            if(theTask) {
                theTask.complete = true
                this.storeTaskLocally()
            }
        },
        storeTaskLocally() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    },
    afterCreate() {
        this.storeTaskLocally()
    }
})


