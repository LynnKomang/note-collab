<template>
    <div>
        <button class="btn btn-primary rounded-pill btn-lg fixed-bottom mb-4 ms-4"
        data-bs-toggle="modal" data-bs-target="#exampleModal">New Task</button>
        <div class="modal" tabindex="-1" id="exampleModal">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create new task</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Task title</label>
                            <input type="text" class="form-control" :class="isTitleValid ? 'is-valid' : 'is-invalid'" v-model="title">
                            <div class="invalid-feedback">
                                Input must be between 3 to 50 characters and not include special symbols.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Content</label>
                            <textarea rows="4" class="form-control" v-model="content"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Deadline</label>
                            <input type="date" class="form-control" v-model="deadline">
                        </div>
                        <div>
                            <label class="form-label">Category</label>
                            <select class="form-select" v-model="selectedCategory" :style="getCategoryStyle(selectedCategory)" >
                                <option v-for="category in categories" :key="category.id" :value="category"
                                :style="getCategoryStyle(category)">{{ category.name }}</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" :disabled="!isInputValid" @click="createTask">Create</button>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { format } from 'date-fns';
import { getCategoryStyle } from '../utilities.js';

export default {
    props: {
        categories: {
            type: Array,
            required: true,
        }
    },
    data: () => ({
        title: "",
        content: "",
        deadline: "",
        selectedCategory: null,
    }),
    computed: {
        isTitleValid() {
            const titleRegex = /^[A-Za-z0-9 \\.?!,\\:]{3,50}$/;

            return titleRegex.exec(this.title);
        },
        isInputValid() {
            return this.isTitleValid && this.selectedCategory !== null;
        }
    },
    methods: {
        createTask() {
            const newTask = {
                title: this.title,
                content: this.content,
                date: format(new Date(), "yyyy-MM-dd"),
                deadline: this.deadline === '' ? '' : format(new Date(this.deadline), "yyyy-MM-dd"),
                category: this.selectedCategory,
            };

            this.$emit("on-task-created", newTask);
        },
        getCategoryStyle,
    },
}
</script>