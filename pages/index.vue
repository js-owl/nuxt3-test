<template>
  <div class="Main container py-3 mx-auto">
    <p>{{ pending ? 'Loading...' : products }}</p>
    <Counter />
    <Counter />
    <ContentDoc />
    <div style="display: flex">
      <span><IconsBell /></span>
      <span><IconsBell /></span>
    </div>
    <img src="/2.png" alt="aaa" />
    <Alert />
    <ProfileHeaderAvatar />
  </div>
</template>
<script setup>
// const { data: products, pending } = await useFetch('/api/products', {
//   transform: (_products) => _products.data
// });
const { data: products, pending } = await useLazyFetch('/api/products');

import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();
const counter = useState('counter', () => Math.round(Math.random() * 1000));
const { say } = useUtils();
say();
const { $hello } = useNuxtApp();
$hello('plugins');
</script>
