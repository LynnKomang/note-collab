<template>
  <div id="app" class="container py-5">
    <h1 v-if="tasks === null" class="text-center">Loading tasks...</h1>
    <div v-else>
      <Task v-for="task in tasks" :key="task.id" class="mx-auto col-4" :task="task"
      @on-task-submit="updateTask(task)"
      @on-task-delete="deleteTask(task)" />
      <CreateTask @on-task-created="createTask" />
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

import Task from './components/Task.vue'
import CreateTask from './components/CreateTask.vue';

export default {
  name: 'App',
  components: {
    Task,
    CreateTask,
  },
  data: () => ({
    tasks: null,
    isConnected: false,
  }),
  computed: {
    isSocketConnected() {
      return this.stompClient && this.stompClient.connected;
    }
  },
  methods: {
    getTasks() {
      console.log("Getting Tasks from server...");

      if (this.isSocketConnected) {
        this.stompClient.send("/app/tasks");
      }
    },
    createTask(newTask) {
      console.log("Creating a task and sending it to the server...");

      if (this.isSocketConnected) {
        this.stompClient.send("/app/tasks/add", JSON.stringify(newTask));
      }
    },
    updateTask(updatedTask) {
      console.log("Updating Tasks to server...");

      if (this.isSocketConnected) {
        this.stompClient.send("/app/tasks/update", JSON.stringify(updatedTask));
      }
    },
    deleteTask(taskToDelete) {
      console.log("Deleting a task from the server...");

      if (this.isSocketConnected) {
        this.stompClient.send("/app/tasks/delete", JSON.stringify(taskToDelete));
      }
    },
    connect() {
      this.socket = new SockJS("http://localhost:9000/gs-guide-websocket");
      this.stompClient = Stomp.over(this.socket);

      this.stompClient.connect({},
      (frame) => {
        this.isConnected = true;

        console.log(frame);

        this.stompClient.subscribe("/output/tasks", (tick) => {
          console.log(tick);
          this.tasks = JSON.parse(tick.body);
        });

        this.getTasks();
      },
      (error) => {
        console.log(error);
        this.isConnected = false;
      });
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }

      this.isConnected = false;
    },
    tickleConnection() {
      this.isConnected ? this.disconnect() : this.connect();
    },
  },
  created() {
    this.connect();
  }
}
</script>