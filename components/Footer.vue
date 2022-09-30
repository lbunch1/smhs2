<template>
  <footer class="bg-dark-primary flex flex-col items-center self-stretch p-6 bottom-0 left-0 right-0">
    <img src="../assets/img/smhs.svg" alt="logo" class="w-4/12" />
    <div class="flex flex-wrap justify-between items-stretch">
      <nav class="p-12 mx-auto">
        <ul>
          <li class="nav-link">
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li class="nav-link">
            <nuxt-link to="Events">Events</nuxt-link>
          </li>
          <li class="nav-link" v-if="user">
            <nuxt-link to="Photos">Photos</nuxt-link>
          </li>
          <li class="nav-link" v-if="user">
            <nuxt-link to="Resources">Resources</nuxt-link>
          </li>
          <li class="nav-link">
            <nuxt-link to="Contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="p-12 flex mx-auto items-center justify-center">
        <a href="https://www.facebook.com/groups/133430159762"
          ><img src="../assets/img/facebook.svg" alt="facebook" class="w-10"
        /></a>
      </div>
    </div>
    <p class="text-soft text-sm">
      SMHS class of 1970 Copyright &copy; {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>
<script setup>
const user = useSupabaseUser();
</script>
