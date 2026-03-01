<template>
  <div class="site-shell">
    <NuxtRouteAnnouncer />
    <TheHeader />
    <main class="site-main">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.site-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.site-main {
  flex: 1;
}
</style>
