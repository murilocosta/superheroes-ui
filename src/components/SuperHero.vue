<template>
  <section>
    <SuperHeroMessage v-bind:message="message" v-on:clear="handleClear" />
    <br />
    <SuperHeroForm v-on:create="handleCreate" />
    <hr />
    <SuperHeroCard v-for="item in superList" v-bind:superHero="item" v-bind:key="item.id" />
  </section>
</template>

<script>
import superHeroService from "../services/api";
import SuperHeroForm from "./SuperHeroForm.vue";
import SuperHeroCard from "./SuperHeroCard.vue";
import SuperHeroMessage from "./SuperHeroMessage.vue";

export default {
  name: "SuperHero",
  components: {
    SuperHeroForm,
    SuperHeroCard,
    SuperHeroMessage,
  },
  data() {
    return {
      superList: [],
      message: null,
    };
  },
  mounted() {
    superHeroService
      .fetchAll()
      .then((response) => (this.superList = response.data));
  },
  methods: {
    handleCreate($event) {
      superHeroService
        .save({ super_name: $event })
        .then((response) => (this.superList = response.data))
        .catch((error) => (this.message = error.response.data.message));
    },
    handleClear: function () {
      this.message = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
