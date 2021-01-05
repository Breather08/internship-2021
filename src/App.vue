<template>
  <div id="app">
    <CardList :data="data" />
  </div>
</template>

<script>
import axios from 'axios';
import CardList from '@/components/CardList.vue';

export default {
  name: 'App',
  data() {
    return {
      data: [],
      errors: [],
    };
  },
  created() {
    axios
      .get('https://api.jsonbin.io/b/5ff1946009f7c73f1b6d134f')
      .then((resp) => resp.data)
      .then((data) => {
        this.data = data;
      });
  },
  methods: {
    // sortByRating() {
    //   this.data.sort((a, b) =>
    // (a.restaurant.categories.rating > b.restaurant.categories.rating ? 1 : -1));
    // },
  },
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
