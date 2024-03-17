<template>
  <div class="dateslider">
    <Swiper
      class="swiper-cards"
      :width="70"
      :modules="[]"
      :slides-per-view="1"
      :spaceBetween="10"
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
    <div style="margin: 20px">
      Афиша событий
      {{ curSlide.events ? `на ${curSlide.date} ${curSlide.month}` : '' }}
    </div>
    <div style="margin: 20px">
      {{ curSlide.events ? curSlide.events[0].name : 'Выберите день' }}
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'custom'
});
const slides = ref([
  {
    id: 1,
    month: 'марта',
    date: 17,
    weekday: 'вс',
    events: [{ name: 'Экскурсия «Родная страна»' }, { name: 'text12' }]
  },
  {
    id: 2,
    month: 'марта',
    date: 18,
    weekday: 'пн',
    events: [{ name: 'Экскурсия «Цифровое погружение»' }, { name: 'text22' }]
  },
  {
    id: 3,
    month: 'марта',
    date: 19,
    weekday: 'вт',
    events: [
      { name: 'Флагманский маршрут достижений «Россия — это мы»' },
      { name: 'text32' }
    ]
  }
]);
let curSlide = ref({});
const onSwiper = (swiper) => {
  curSlide.value = swiper;
};
</script>

<style>
.dateslider {
  margin-top: 10px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 70px;
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
  height: 100px;
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
.swiper-slide-active .dateslider__iinner {
  /* background-color: red; */
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
