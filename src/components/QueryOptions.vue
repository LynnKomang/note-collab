<template>
  <div class="row mb-5">
    <div class="col-10">
      <div class="input-group shadow-sm">
        <input
          v-model.trim="searchTitle"
          type="text"
          class="form-control rounded-3"
          placeholder="Search titles"
          aria-label="Search titles"
          aria-describedby="basic-addon1"
        />
        <span class="input-group-text" id="basic-addon1"
          ><i class="fas fa-search"></i
        ></span>
      </div>
    </div>
    <div class="col">
      <select
        v-model="sortingOption"
        class="shadow-sm form-select"
        aria-label="Default select example"
      >
        <option value="date" selected>Date</option>
        <option value="title">Title</option>
        <option value="category">Category</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchTitle: "",
    sortingOption: "date",
  }),
  watch: {
    searchTitle() {
      this.emitChange();
    },
    sortingOption() {
      this.emitChange();
    },
  },
  methods: {
    emitChange() {
      this.$emit("on-change", {
        searchTitle: this.searchTitle,
        sortingOption: this.sortingOption,
      });
    },
  },
};
</script>