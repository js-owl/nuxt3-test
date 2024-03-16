<template>
  <div class="Main container py-3 mx-auto">
    <pre>{{ data.name }}</pre>
    <Counter />
    <Counter />
    <ContentDoc />
    <div style="display: flex">
      <span><IconsBell /></span>
      <span><IconsBell /></span>
    </div>
    <!-- <img src="/2.png" alt="aaa" /> -->
    <Alert />
    <ProfileHeaderAvatar />
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/hello');
import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();
const counter = useState('counter', () => Math.round(Math.random() * 1000));
const { say } = useUtils();
say();
const { $hello } = useNuxtApp();
$hello('plugins');
</script>
