<template>
  <div id="app" class="container py-5">
    <Task class="mx-auto col-4" :task="{title: 'Turn on the dishwasher', content: 'This is the description of the task', date: '1.1.2021', deadline: '1.1.2022'}" />
  </div>
</template>

<script>
import Task from './components/Task.vue'
export default {
  name: 'App',
  components: {
    Task
  }
}
</script>