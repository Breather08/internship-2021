<template>
  <div
    :class="{ 'card-container': true, active: info.restaurant.state === 'active' }"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <CardItemFront :info="info" />
    <CardItemBack :info="info" />
  </div>
</template>

<script>
import CardItemFront from '@/components/CardItemFront.vue';
import CardItemBack from '@/components/CardItemBack.vue';

export default {
  data() {
    return {
      angle: 0,
    };
  },
  props: {
    info: {
      type: Object,
      requred: true,
    },
  },
  components: {
    CardItemFront,
    CardItemBack,
  },
  methods: {
    onMouseDown(e) {
      e.target.style.transform = `rotateY(${this.angle}deg) scale(0.95)`;
    },
    onMouseUp(e) {
      if (this.info.restaurant.state === 'active') {
        this.angle += 180;
      }
      e.target.style.transform = `rotateY(${this.angle}deg) scale(1)`;
    },
  },
};
</script>

<style lang="scss">
@mixin card {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e8e8e8;
  backface-visibility: hidden;
  transform: scale(0.95);
}

.card-container {
  position: relative;
  width: 400px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  perspective: 2000px;
  &:not(.active) {
    filter: grayscale(100%);
  }
  div {
    pointer-events: none;
  }
}
</style>
