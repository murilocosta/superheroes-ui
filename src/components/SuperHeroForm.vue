<template>
  <form @submit.prevent="create">
    <div class="field is-grouped">
      <div class="control is-expanded">
        <input class="input" type="text" v-model="name" />
      </div>

      <div class="control">
        <button type="submit" class="button is-info">Search</button>
      </div>
    </div>

    <p class="help">Input a hero/villain name and hit "Search"</p>
  </form>
</template>

<script>
export default {
  name: "SuperHeroForm",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    create: function () {
      this.$emit("create", this.name);
      this.name = "";
    },
  },
};
</script>

<style scoped>
</style>
