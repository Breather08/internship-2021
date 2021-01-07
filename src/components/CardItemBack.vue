<template>
  <div class="card-item-back">Backface</div>
</template>

<style scoped lang="scss">
.card-item-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e8e8e8;
  backface-visibility: hidden;
  transform: scale(0.95) rotateY(180deg);
}
</style>
