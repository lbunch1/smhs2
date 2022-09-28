<template>
  <div class="flex min-h-screen flex-col justify-between">
    <Heading />
    <div
      class="mt-14 pb-8 bg-[url('assets/img/background.svg')] bg-cover bg-no-repeat bg-bottom mt-auto"
      >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>
<script setup>
  useHead({
    titleTemplate: (title) => `SMHS '70::${title}'`,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'San Marino High School class of 1970 reunion', content: 'Info on past and future reunions will be posted here.'},
    ],
    link: [
      { rel: 'icon', href: 'ico.svg', type: 'image/svg+xml'}
    ]
  })
</script>