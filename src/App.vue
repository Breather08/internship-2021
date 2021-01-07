<template>
  <div id="app">
    <CardList :data="data" />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue';
import fetchData from '@/requests/fetchRestaurantData';

export default {
  name: 'App',
  data() {
    return {
      data: [],
      errors: [],
    };
  },
  created() {
    fetchData(this.data, this.errors);
    console.log(this.errors);
    this.errors.forEach((err) => {
      throw err;
    });
  },
  methods: {},
  components: {
    CardList,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

#app {
}
</style>
