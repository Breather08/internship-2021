<template>
  <div
    :class="{ 'card-item': true, active: info.restaurant.state === 'active' }"
    v-on:click="onClick"
  >
    <div class="img-container">
      <div class="logo-container">
        <img :src="info.restaurant.logo" alt="" />
      </div>
      <div class="rating">
        <IconifyIcon :icon="icons.starIcon" :style="{ color: '#f3a536', fontSize: '18px' }" />
        <span
          ><b>{{ calcRating() }}</b></span
        >
      </div>
      <div class="time">
        <span
          ><b>
            {{ info.delivery_time.low_limit_minutes }}
            -
            {{ info.delivery_time.upper_limit_minutes }}
            мин
          </b>
        </span>
      </div>
      <img :src="info.restaurant.image" alt="" />
    </div>
    <div class="title">
      <span
        ><b>{{ info.restaurant.title }}</b></span
      >
    </div>
    <div class="categories">
      <span v-for="(cat, i) in getCategories()" :key="i">{{ cat }}</span>
    </div>
    <div class="delivery">
      <div class="deliveryCost">
        <IconifyIcon :icon="icons.mopedIcon" :style="{ color: '#9B9B9B', fontSize: '40px' }" />
        <span
          ><b>от {{ info.delivery_tariff.conditions[0].delivery_cost }}</b> тг</span
        >
      </div>
      <div class="orderCost">
        <IconifyIcon :icon="icons.tengeIcon" :style="{ color: '#9B9B9B', fontSize: '20px' }" />
        <span
          ><b>{{ info.delivery_tariff.conditions[0].order_min_cost }}</b> тг</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import IconifyIcon from '@iconify/vue';
import starIcon from '@iconify/icons-el/star';
import mopedIcon from '@iconify/icons-mdi/moped';
import tengeIcon from '@iconify/icons-fa-solid/tenge';

export default {
  data() {
    return {
      icons: {
        starIcon,
        mopedIcon,
        tengeIcon,
      },
      mainClass: {
        info: this.info,
      },
    };
  },
  components: {
    IconifyIcon,
  },
  props: {
    info: {
      type: Object,
      requred: true,
    },
  },
  methods: {
    calcRating() {
      return Math.round(this.info.restaurant.rating * 0.05 * 10) / 10;
    },
    getCategories() {
      return this.info.restaurant.categories.map((cat) => cat.title);
    },
    onClick(e) {
      console.log(e.target);
    },
  },
};
</script>

<style scoped lang="scss">
.card-item {
  width: 400px;
  height: 380px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #e8e8e8;
  transform: scale(0.8);

  .img-container {
    position: relative;
    width: 100%;
    height: 220px;
    .rating {
      position: absolute;
      width: 70px;
      height: 30px;
      bottom: 0;
      padding: 8px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: white;
      color: #f3a536;
      border-radius: 0 15px 0 0;
    }
    .time {
      position: absolute;
      width: 140px;
      height: 30px;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      color: #4a4a4a;
      border-radius: 15px 0 0 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .logo-container {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 15px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .title {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 25px;
    color: #4a4b4d;
  }
  .categories {
    color: #aeaeae;
    span {
      margin-right: 15px;
    }
  }
  .delivery {
    position: absolute;
    bottom: 1%;
    width: 280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    color: #4a4b4d;
    .deliveryCost,
    .orderCost {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        margin: 10px;
      }
    }
    .orderCost {
      justify-content: end;
    }
  }
  .active {
    filter: grayscale(100%);
  }
}
</style>
