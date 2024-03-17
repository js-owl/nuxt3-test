<template>
  <div>
    <NuxtLayout>
      <Header />
      <header>
        <ul
          style="
            display: flex;
            border-bottom: 1px solid #aaa;
            padding-bottom: 10px;
          "
        >
          <li class="link"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="link">
            <NuxtLink to="/dateslider">Slider</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style scoped>
.link {
  margin: 0 10px;
}
</style>
