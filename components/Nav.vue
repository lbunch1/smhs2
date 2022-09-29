<template>
  <nav>
    <ul class="mr-3 flex flex-col items-end sm:flex-row">
      <li class="nav-link">
        <nuxt-link to="/" >Home</nuxt-link>
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
</template>
<script setup>
const user = useSupabaseUser()
</script>