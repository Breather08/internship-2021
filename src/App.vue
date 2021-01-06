<template>
  <div id="app">
    <CardList :data="data" />
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue';
import fetchData from '@/requests/fetchData';

export default {
  name: 'App',
  data() {
    return {
      data: [],
      errors: [],
    };
  },
  beforeMount() {
    console.log('not mounted yet');
  },
  mounted() {
    console.log('mounted');
  },
  created() {
    fetchData(this.data, this.errors);
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
