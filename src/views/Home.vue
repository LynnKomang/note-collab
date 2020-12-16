<template>
  <div class="container py-5">
    <h1 class="display-2 mb-5">Task Manager</h1>
    <h1 v-if="!doesExist">This link seems to lead to a non-existing workspace...</h1>
    <h1 v-else-if="tasks === null || categories === null" class="text-center">Loading tasks...</h1>
    <div v-else>
      <h2 v-if="tasks.length === 0" class="text-center">It seems like there aren't any tasks here...</h2>
      <Task v-for="task in tasks" :key="task.id" class="mx-auto mb-4" :task="task"
      @on-task-submit="updateTask(task)"
      @on-task-delete="deleteTask(task)" />
      <CreateTask @on-task-created="createTask" :categories="categories" />
      <CreateCategory @on-category-created="createCategory" />
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import axios from 'axios';

import Task from '@/components/Task.vue'
import CreateTask from '@/components/CreateTask.vue';
import CreateCategory from '@/components/CreateCategory.vue';

export default {
  name: 'Home',
  components: {
    Task,
    CreateTask,
    CreateCategory,
  },
  data: () => ({
    tasks: null,
    categories: null,
    isConnected: false,
    doesExist: true,
  }),
  computed: {
    isSocketConnected() {
      return this.stompClient && this.stompClient.connected;
    }
  },
  methods: {
    getTasks() {
      console.log("Getting tasks from server...");

      if (this.isSocketConnected) {
        this.stompClient.send(`/app/workspaces/id/${this.$route.params.id}/tasks`);
      }
    },
    getCategories() {
      console.log("Getting categories from server...");

      if (this.isSocketConnected) {
        this.stompClient.send(`/app/workspaces/id/${this.$route.params.id}/categories`);
      }
    },
    createTask(newTask) {
      console.log("Creating a task and sending it to the server...");

      if (this.isSocketConnected) {
        this.stompClient.send(`/app/workspaces/id/${this.$route.params.id}/tasks/add`, JSON.stringify(newTask));
      }
    },
    createCategory(newCategory) {
      console.log("Creating a category and sending it to the server...");

      if (this.isSocketConnected) {
        this.stompClient.send(`/app/workspaces/id/${this.$route.params.id}/categories/add`, JSON.stringify(newCategory));
      }
    },
    updateTask(updatedTask) {
      console.log("Updating Tasks to server...");

      if (this.isSocketConnected) {
        this.stompClient.send(`/app/workspaces/id/${this.$route.params.id}/tasks/update`, JSON.stringify(updatedTask));
      }
    },
    deleteTask(taskToDelete) {
      console.log("Deleting a task from the server...");

      if (this.isSocketConnected) {
        this.stompClient.send(`/app/workspaces/id/${this.$route.params.id}/tasks/delete`, JSON.stringify(taskToDelete));
      }
    },
    deleteCategory(CategoryToDelete) {
      console.log("Deleting a category from the server...");

      if (this.isSocketConnected) {
        this.stompClient.send(`/app/workspaces/id/${this.$route.params.id}/categories/delete`, JSON.stringify(CategoryToDelete));
      }
    },
    checkIfExists() {
      return axios.get(`http://localhost:9000/exists/id/${this.$route.params.id}`)
      .then((response) => response.data);
    },
    async connect() {
      if (!await this.checkIfExists()) {
        this.doesExist = false;
      } else {
        this.socket = new SockJS("http://localhost:9000/gs-guide-websocket");
        this.stompClient = Stomp.over(this.socket);

        this.stompClient.connect({},
        (frame) => {
          this.isConnected = true;

          console.log(frame);

          this.stompClient.subscribe(`/output/workspaces/${this.$route.params.id}/tasks`, (tick) => {
            console.log(tick);
            this.tasks = JSON.parse(tick.body);
          });

          this.getTasks();

          this.stompClient.subscribe(`/output/workspaces/${this.$route.params.id}/categories`, (tick) => {
            console.log(tick);
            this.categories = JSON.parse(tick.body);
          });

          this.getCategories();
        },
        (error) => {
          console.log(error);
          this.isConnected = false;
        });
      }
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
