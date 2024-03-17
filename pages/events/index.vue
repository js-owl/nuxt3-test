<template>
  <div>
    <h2>Swiper Card Effect</h2>
    <Swiper
      class="swiper-cards"
      :width="240"
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="slide.id"
        @click="onSwiper(slide)"
      >
        <div class="dateslider__iinner">
          <div class="dateslider__ititle">{{ slide.weekday }}</div>
          <div class="dateslider__idate">{{ slide.date }}</div>
        </div>
      </SwiperSlide>
    </Swiper>
    <hr />
    <div>
      Экскурсии:
      <span>
        {{ curSlide.events ? curSlide.events[0].name : 'Выберите день' }}
      </span>
    </div>
  </div>
</template>
<script setup>
const slides = ref([
  {
    id: 1,
    date: 17,
    weekday: 'вс',
    events: [{ name: 'text11' }, { name: 'text12' }]
  },
  {
    id: 2,
    date: 18,
    weekday: 'пн',
    events: [{ name: 'text21' }, { name: 'text22' }]
  },
  {
    id: 3,
    date: 19,
    weekday: 'вт',
    events: [{ name: 'text31' }, { name: 'text32' }]
  }
]);
let curSlide = ref({});
const onSwiper = (swiper) => {
  curSlide.value = swiper;
};
</script>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
.dateslider__iinner {
  border-radius: 16px;
  padding: 16px 22px 16px 22px;
  background-color: #f5f5f5;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
}
.dateslider__ititle {
  text-transform: uppercase;
  font-size: 10px;
  color: #05050573;
  line-height: 1;
}
.dateslider__idate {
  color: #414141;
  font-family: Suisse Intl-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  margin-top: 10px;
}
</style>
