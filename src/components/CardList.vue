<template>
  <div class="card-list">
    <CardItem v-for="(info, index) in data" :key="index" :info="info" />
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
  props: {
    data: {
      type: Array,
      requred: true,
    },
  },
  components: {
    CardItem,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.card-list {
  width: 100vw;
}
</style>
