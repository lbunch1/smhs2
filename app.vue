<template>
  <div class="flex min-h-screen flex-col justify-between">
    <Heading />
    <div
      class="py-24 bg-[url('assets/img/background.svg')] bg-cover bg-no-repeat bg-bottom mt-auto"
      >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>
