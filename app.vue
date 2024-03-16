<template>
  <div class="bg-state-900 h-screen">
    <NuxtLayout>
      <header>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/events">Events</NuxtLink></li>
        </ul>
      </header>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
