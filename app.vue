<template>
  <div>
    <NuxtLayout>
      <header>
        <ul style="display: flex; border: 1px solid blue">
          <li style="margin-right: 10px"><NuxtLink to="/">Home</NuxtLink></li>
          <li style="margin-right: 10px">
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
          <li><NuxtLink to="/custom">Custom</NuxtLink></li>
        </ul>
      </header>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
