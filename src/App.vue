<template>
  <div id="app" class="container py-5">
    <h1 v-if="returnedTask === null" class="text-center">Loading tasks...</h1>
    <Task v-else class="mx-auto col-4" :task="returnedTask" @on-task-submit="updateTasks" />
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

import Task from './components/Task.vue'
export default {
  name: 'App',
  data: () => ({
    returnedTask: null,
    isConnected: false,
  }),
  components: {
    Task
  },
  methods: {
    getTasks() {
      console.log("Getting Tasks from server...");

      if (this.stompClient && this.stompClient.connected) {
        this.stompClient.send("/app/tasks");
      }
    },
    updateTasks() {
      console.log("Updating Tasks to server...");

      if (this.stompClient && this.stompClient.connected) {
        this.stompClient.send("/app/tasks/update", JSON.stringify(this.returnedTask));
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
          this.returnedTask = JSON.parse(tick.body);
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