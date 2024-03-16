<template>
  <div class="Main container py-3 mx-auto">
    <div style="display: flex">
      <span><IconsBell /></span>
      <span><IconsBell /></span>
    </div>
    <!-- <img src="/2.png" alt="aaa" /> -->
    <Alert />
    <ProfileHeaderAvatar />
    <ContentDoc />
  </div>
</template>
<script setup>
const { say } = useUtils();
say();
const { $hello } = useNuxtApp();
$hello('plugins');
</script>
