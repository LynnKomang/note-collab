<template>
  <div class="row mb-5">
    <div class="col-10">
      <div class="input-group shadow-sm">
        <input
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
      <select class="shadow-sm form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</template>