<template>
    <div class="container py-5">
        <h1 class="text-center">Nothing to see here...</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Blank",
    methods: {
        createWorkSpaceAndRedirect() {
            axios.post("http://localhost:9000/workspaces/add").then((response) => {
                this.$router.push({name: 'WorkSpace', params: { id: response.data }});
            });
        }
    },
    created() {
        this.createWorkSpaceAndRedirect();
    }
}
</script>