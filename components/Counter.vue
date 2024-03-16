<template>
  <div>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
  </div>
</template>
<script setup>
const counter = useCounter();
</script>
