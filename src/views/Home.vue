<template>
  <div class="container py-5">
    <h1 class="display-2 mb-5">Task Manager</h1>
    <h1 v-if="!doesExist">
      This link seems to lead to a non-existing workspace...
    </h1>
    <h1 v-else-if="tasks === null || categories === null" class="text-center">
      Loading tasks...
    </h1>
    <div v-else>
      <QueryOptions @on-change="changeTasks" />
      <h2 v-if="tasks.length === 0" class="text-center">
        It seems like there aren't any tasks here...
      </h2>
      <Task
        v-for="task in organizedTasks"
        :key="task.id"
        class="mx-auto mb-4"
        :task="task"
        @on-task-submit="updateTask(task)"
        @on-task-delete="deleteTask(task)"
      />
      <MenuButtons />
      <CreateTask @on-task-created="createTask" :categories="categories" />
      <CreateCategory @on-category-created="createCategory" />
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import axios from "axios";

import Task from "@/components/Task.vue";
import CreateTask from "@/components/CreateTask.vue";
import CreateCategory from "@/components/CreateCategory.vue";
import MenuButtons from "@/components/MenuButtons.vue";
import QueryOptions from "@/components/QueryOptions.vue";

export default {
  name: "Home",
  components: {
    Task,
    CreateTask,
    CreateCategory,
    MenuButtons,
    QueryOptions,
  },
  data: () => ({
    tasks: null,
    categories: null,
    isConnected: false,
    doesExist: true,
    searchTitle: "",
    sortingOption: "date",
  }),
  computed: {
    isSocketConnected() {
      return this.stompClient && this.stompClient.connected;
    },
    organizedTasks() {
      if (this.tasks === null) {
        return null;
      }

      let newTasks = this.tasks;

      switch (this.sortingOption) {
        case "date":
          newTasks = newTasks.sort(
            ({ id: firstDate }, { id: secondDate }) => +firstDate - +secondDate
          );
          break;
        case "title":
          newTasks = newTasks.sort(
            ({ title: firstTitle }, { title: secondTitle }) =>
              firstTitle.toLowerCase().localeCompare(secondTitle.toLowerCase())
          );
          break;
        case "category":
          newTasks = newTasks.sort(
            ({ category: firstCategory }, { category: secondCategory }) =>
              firstCategory.name
                .toLowerCase()
                .localeCompare(secondCategory.name.toLowerCase())
          );
          break;
      }

      return newTasks.filter((task) =>
        task.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    },
  },
  methods: {
    changeTasks(data) {
      this.searchTitle = data.searchTitle;
      this.sortingOption = data.sortingOption;
    },
    getTasks() {
      console.log("Getting tasks from server...");

      if (this.isSocketConnected) {
        this.stompClient.send(
          `/app/workspaces/id/${this.$route.params.id}/tasks`
        );
      }
    },
    getCategories() {
      console.log("Getting categories from server...");

      if (this.isSocketConnected) {
        this.stompClient.send(
          `/app/workspaces/id/${this.$route.params.id}/categories`
        );
      }
    },
    createTask(newTask) {
      console.log("Creating a task and sending it to the server...");

      if (this.isSocketConnected) {
        this.stompClient.send(
          `/app/workspaces/id/${this.$route.params.id}/tasks/add`,
          JSON.stringify(newTask)
        );
      }
    },
    createCategory(newCategory) {
      console.log("Creating a category and sending it to the server...");

      if (this.isSocketConnected) {
        this.stompClient.send(
          `/app/workspaces/id/${this.$route.params.id}/categories/add`,
          JSON.stringify(newCategory)
        );
      }
    },
    updateTask(updatedTask) {
      console.log("Updating Tasks to server...");

      if (this.isSocketConnected) {
        this.stompClient.send(
          `/app/workspaces/id/${this.$route.params.id}/tasks/update`,
          JSON.stringify(updatedTask)
        );
      }
    },
    deleteTask(taskToDelete) {
      console.log("Deleting a task from the server...");

      if (this.isSocketConnected) {
        this.stompClient.send(
          `/app/workspaces/id/${this.$route.params.id}/tasks/delete`,
          JSON.stringify(taskToDelete)
        );
      }
    },
    deleteCategory(CategoryToDelete) {
      console.log("Deleting a category from the server...");

      if (this.isSocketConnected) {
        this.stompClient.send(
          `/app/workspaces/id/${this.$route.params.id}/categories/delete`,
          JSON.stringify(CategoryToDelete)
        );
      }
    },
    checkIfExists() {
      return axios
        .get(
          `${process.env.VUE_APP_BACKEND_URL}/exists/id/${this.$route.params.id}`
        )
        .then((response) => response.data);
    },
    async connect() {
      if (!(await this.checkIfExists())) {
        this.doesExist = false;
      } else {
        this.socket = new SockJS(
          `${process.env.VUE_APP_BACKEND_URL}/gs-guide-websocket`
        );
        this.stompClient = Stomp.over(this.socket);

        this.stompClient.connect(
          {},
          (frame) => {
            this.isConnected = true;

            console.log(frame);

            this.stompClient.subscribe(
              `/output/workspaces/${this.$route.params.id}/tasks`,
              (tick) => {
                console.log(tick);
                this.tasks = JSON.parse(tick.body);
              }
            );

            this.getTasks();

            this.stompClient.subscribe(
              `/output/workspaces/${this.$route.params.id}/categories`,
              (tick) => {
                console.log(tick);
                this.categories = JSON.parse(tick.body);
              }
            );

            this.getCategories();
          },
          (error) => {
            console.log(error);
            this.isConnected = false;
          }
        );
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
  },
};
</script>
