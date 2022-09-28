<template>
  <div class="p-6 flex flex-row nav z-50">
    <nuxt-link to="/"
      ><img src="../assets/img/smhs.svg" alt="logo" class="w-20 mx-3"
    /></nuxt-link>
    <div class="hidden sm:block">
      <Nav />
    </div>
    <div class="flex flex-grow"></div>
    <div>
      <div v-if="user" class="nav-link">
        <button @click="logOut">Log Out</button>
      </div>
      <div v-else class="nav-link">
        <nuxt-link to="/Login">Log In</nuxt-link>
      </div>
    </div>
    <div class="flex flex-col items-end sm:hidden">
      <button @click="toggleMenu = (toggleMenu === 'hidden') ? '' : 'hidden'"><HamburgerIcon /></button>
      <Nav class="transition" :class="toggleMenu" />
    </div>
  </div>
</template>

<script setup>
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';

const supabase = useSupabaseClient()


const user = useSupabaseUser()

async function logOut() {
  console.log()
  await supabase.auth.signOut()
}

console.log()

const toggleMenu = ref("hidden")

</script>


