<template>
    <div class="card shadow rounded-lg">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-baseline">
                <h3 class="card-title">{{ task.title }}</h3>
                <p class="card-text text-muted">{{ task.date }}</p>
            </div>
            <textarea rows=4 class="w-100" v-model="task.content" @input="emitTask"></textarea>
            <p class="card-text text-danger">Deadline: {{ task.deadline }}</p>
            <div class="text-end">
                <button class="btn btn-success" @click="emitTask">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true,
        }
    },
    methods: {
        emitTask() {
            this.$emit('on-task-submit');
        }
    },
}
</script>