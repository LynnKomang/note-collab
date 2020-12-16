<template>
    <div class="card shadow rounded-3">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-baseline mb-2">
                <div class="d-flex align-items-center">
                    <h3 class="card-title me-2">{{ task.title }}</h3>
                    <span class="badge" :style="getCategoryStyle(task.category)">{{ task.category.name }}</span>
                </div>
                <p class="card-text text-muted">{{ formattedDate(task.date) }}</p>
            </div>
            <textarea rows=4 class="w-100 form-control" style="background-color: #e9e9e9;" v-model="task.content" @input="emitTask"></textarea>
            <p v-if="task.deadline" class="card-text text-danger mt-1">Deadline: {{ formattedDate(task.deadline) }}</p>
            <div class="text-end">
                <button class="btn btn-danger" :class="!task.deadline ? 'mt-4' : ''" @click="deleteTask">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getCategoryStyle } from '../utilities.js';
import { format } from 'date-fns';

export default {
    props: {
        task: {
            type: Object,
            required: true,
        }
    },
    methods: {
        formattedDate(date) {
          return format(new Date(date), 'dd.MM.yyyy')
        },
        emitTask() {
            this.$emit('on-task-submit');
        },
        deleteTask() {
            this.$emit('on-task-delete');
        },
        getCategoryStyle,
    },
}
</script>