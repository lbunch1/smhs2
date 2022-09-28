<template>
  <div class="content">
    <h1>Sign up here</h1>
    <p class="p-4">Some of the content on this site is intended only for attendees of the San Marino High School class of 1970 reunions. Sign up here to be granted access.</p>
    <form id="login" class="flex flex-col items-center gap-4 p-12">
      <input type="email" id="email" class="p-2 rounded-md w-80 drop-shadow-md" placeholder="e-mail" v-model="email" required />
      <input type="password" min="6" id="password" class="p-2 rounded-md w-80 drop-shadow-md" placeholder="password" v-model="password" required />
      <input type="password" min="6" id="confirm_password" class="p-2 rounded-md w-80 drop-shadow-md" placeholder="confirm password" v-model="confirmPassword" required />
      <button v-if="
      emailCheck.email 
      && passwordLength.value
      && passwordMatch.conf
      && passwordLength.value > 6
      && passwordMatch.pass === passwordMatch.conf
      " id="signin" type="submit" @click="signInWithEmail" class="p-2 rounded-md w-80 bg-primary drop-shadow-md text-white">Sign Up</button>
      <div v-else class="p-2 rounded-md w-80 bg-light drop-shadow-md text-white text-center cursor-default">Sign Up</div>
    </form>
    <div class="h-20 -mt-8">
      <p v-if="passwordLength.value && passwordLength.value < 6" class="text-sm text-red-800" >Password must be at least 6 characters long.</p>
      <p v-if="passwordMatch.conf && passwordMatch.pass !== passwordMatch.conf" class="text-sm text-red-800" >Passwords do not match.</p>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const email = ref("");
const password = ref("");
const confirmPassword = ref("")

const passwordLength = reactive({
  value: null
})
const passwordMatch = reactive({
  pass: null,
  conf: null
})

const emailCheck = reactive({
  email: null
})

onUpdated(() => {
  passwordLength.value = password.value.length
  passwordMatch.pass = password.value
  passwordMatch.conf = confirmPassword.value
  emailCheck.email = email.value
})


async function signInWithEmail(e) {
  e.preventDefault()
  if (password.value !== confirmPassword.value) return
  try{
    const { user, session, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    if (error) throw error
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    email.value = ""
    password.value = ""
    confirmPassword.value = ""
  }
  }

</script>
