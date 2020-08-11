<template>
  <div class="columns has-spacing">
    <div class="column is-one-quarter">
      <figure class="image is-128x128">
        <img v-bind:src="superHero.image" v-bind:alt="superHero.name" />
      </figure>
    </div>

    <div class="column">
      <div class="panel" v-bind:class="heroStyle">
        <div class="panel-block">
          <span>
            <strong>{{ superHero.name }}</strong>
            ({{ superHero.full_name}})
          </span>
        </div>

        <div class="panel-block">
          <p>
            <strong>Intelligence:</strong>
            {{ superHero.intelligence }}
          </p>
        </div>

        <div class="panel-block">
          <p>
            <strong>Power:</strong>
            {{ superHero.power }}
          </p>
        </div>

        <div class="panel-block">
          <p>
            <strong>Occupation:</strong>
            {{ superHero.occupation }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuperHeroCard",
  props: {
    superHero: Object,
  },
  computed: {
    heroStyle: function () {
      return {
        hero: this.superHero.type === "HERO",
        villain: this.superHero.type === "VILLAIN",
      };
    },
  },
};
</script>

<style scoped>
.has-spacing {
  margin-top: 10px;
}

.hero {
  background-color: #90caf9;
  color: #1565c0;
}

.villain {
  background-color: #ef9a9a;
  color: #d32f2f;
}
</style>
