<template>
  <div class="card-item-back">
    <h1>{{ info.restaurant.title }}</h1>
    <div v-if="info.restaurant.will_be_delivered_by === 'VD'">
      <p>Возможна только собственная доставка</p>
    </div>
    <div v-else>
      <p>Курьер ChokoFood доставит ваш заказ</p>
    </div>
    <div class="payment">
      <h3>Способы оплаты:</h3>
      <ul>
        <li v-for="(method, i) in paymentMethods()" :key="i">{{ method }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      requred: true,
    },
  },
  methods: {
    paymentMethods() {
      const methods = this.info.restaurant.payment_methods;
      return Object.keys(methods).filter((key) => methods[key]);
    },
  },
};
</script>

<style scoped lang="scss">
.card-item-back {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e8e8e8;
  backface-visibility: hidden;
  transform: scale(0.95) rotateY(180deg);
  h1 {
    margin-bottom: 20px;
  }
  .payment {
    margin-top: 20px;
    ul li {
      margin-left: 30px;
      margin-top: 10px;
    }
  }
}
</style>
