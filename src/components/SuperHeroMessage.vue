<template>
  <div v-if="show" class="notification is-danger is-light">
    <button class="delete" v-on:click="clear"></button>
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  computed: {
    show: function () {
      return this.message !== null;
    }
  },
  methods: {
    clear: function() {
      this.$emit("clear");
    }
  }
};
</script>

<style scoped>
</style>
