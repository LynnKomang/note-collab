<template>
    <div>
        <button class="btn btn-primary rounded-pill btn-lg fixed-top mt-4 ms-4"
        data-bs-toggle="modal" data-bs-target="#exampleModal2">New Category</button>
            <div class="modal" tabindex="-1" id="exampleModal2">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create new category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Category title</label>
                                <input type="text" class="form-control" :class="isInputValid ? 'is-valid' : 'is-invalid'" v-model="title">
                                <div class="invalid-feedback">
                                    Input must be between 3 to 50 characters and not include special symbols.
                                </div>
                            </div>
                            <div class="d-flex align-baseline justify-content-between">
                                <label class="form-label">Category color:</label>
                                <input type="color" v-model="color">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal" :disabled="!isInputValid" @click="createCategory">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getTextColor } from '../utilities.js';

export default {
    data: () => ({
        title: "",
        color: "#0275d8"
    }),
    computed: {
        isInputValid() {
            const titleRegex = /^[A-Za-z0-9 \\.?!,]{3,50}$/;

            return titleRegex.exec(this.title);
        },
        textColor() {
            return getTextColor(this.color);
        }
    },
    methods: {
        createCategory() {
            const newCategory = {
                title: this.title,
                color: this.color,
            };

            this.$emit("on-category-created", newCategory);
        }
    },
}
</script>