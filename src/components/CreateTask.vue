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
                            <input type="text" class="form-control" v-model="title">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Content</label>
                            <textarea rows="4" class="form-control" v-model="content"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Deadline</label>
                            <input type="date" class="form-control" v-model="deadline">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="createTask">Create</button>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { format } from 'date-fns';

export default {
    data: () => ({
        title: "",
        content: "",
        deadline: "",
    }),
    methods: {
        createTask() {
            const newTask = {
                title: this.title,
                content: this.content,
                date: format(new Date(), "dd.MM.yyyy"),
                deadline: this.deadline,
            };

            this.$emit("on-task-created", newTask);
        }
    },
}
</script>