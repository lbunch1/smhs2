<template>
  <div class="content mt-36">
    <h1>Log in</h1>
    <form id="login" class="flex flex-col items-center gap-4 p-12">
      <input type="email" id="email" class="p-2 rounded-md w-80 drop-shadow-md" placeholder="e-mail" v-model="email" required />
      <input type="password" min="6" id="password" class="p-2 rounded-md w-80 drop-shadow-md" placeholder="password" v-model="password" required />
      <button v-if="
      emailCheck.email 
      && passwordLength.value
      " id="signin" type="submit" @click="signInWithEmail" class="p-2 rounded-md w-80 bg-primary drop-shadow-md text-white">Log In</button>
      <div v-else class="p-2 rounded-md w-80 bg-light drop-shadow-md text-white text-center cursor-default">Log In</div>
    </form>
    <div class="h-20 -mt-8">Not registered yet? <nuxt-link to="/Signup" class="text-primary hover:text-bold">Sign up here</nuxt-link></div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const email = ref("");
const password = ref("");

const passwordLength = reactive({
  value: null
})

const emailCheck = reactive({
  email: null
})

onUpdated(() => {
  passwordLength.value = password.value.length
  emailCheck.email = email.value
})

async function signInWithEmail(e) {
  e.preventDefault()
  try{
    const { user, session, error } = await supabase.auth.signIn({
      email: email.value,
      password: password.value
    }, {
      redirectTo: 'https://localhost:3000/'
    })
    if (error) throw error
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    await navigateTo('/')
  }
  }

</script>