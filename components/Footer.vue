<template>
  <footer class="bg-dark-primary flex flex-col items-center self-stretch p-6">
    <img src="../assets/img/smhs.svg" alt="logo" class="w-4/12" />
    <div class="flex flex-wrap justify-between items-stretch">
      <nav class="p-12 mx-auto">
        <ul>
          <li class="nav-link">
            <nuxt-link >Home</nuxt-link>
          </li>
          <li class="nav-link">
            <nuxt-link >About</nuxt-link>
          </li>
          <li class="nav-link">
            <nuxt-link >Contact</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="p-12 flex mx-auto items-center justify-center"><a href="#"><img src="../assets/img/facebook.svg" alt="facebook" class="w-10"></a></div>
    </div>
    <p class="text-soft text-sm">SMHS class of 1970 Copyright &copy; {{ new Date().getFullYear() }}</p>
  </footer>

</template>