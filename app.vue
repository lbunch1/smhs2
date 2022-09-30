<template>
  <div class="flex min-h-screen flex-col">
    <Heading />
    <div class="mt-14 flex flex-col min-h-screen">
      <div
        class="pb-8 flex-grow bg-image bg-cover bg-no-repeat bg-bottom "
        >
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
  useHead({
    titleTemplate: (title) => `SMHS '70::${title}`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'San Marino High School class of 1970 reunion', content: 'Info on past and future reunions will be posted here.'},
    ],
    link: [
      { rel: 'icon', href: 'assets/img/ico.svg', type: 'image/svg+xml'}
    ]
  })
</script>
<style>
  .bg-image {
    background-image: url('assets/img/background.svg');
  }
</style>