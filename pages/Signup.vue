<template>
  <div class="content mt-36">
    <h1>Sign Up</h1>
    <p class="p-4">Some of the content on this site is intended only for attendees of the San Marino High School class of 1970 reunions. Reach out to <a class="link" href="mailto:lynnebunch52@gmail.com">Lynne</a> for the Sign up token.</p>
    <form id="login" class="flex flex-col items-center gap-4 p-12">
      <input type="text" min="6" id="token" class="p-2 rounded-md w-80 shadow-md" placeholder="token" v-model="token" required />
      <p v-if="tokenRef.value && tokenRef.value !== 'SMHS70'" class="text-sm text-red-800 p-0" >Invalid Token</p>
      <input type="email" id="email" class="p-2 rounded-md w-80 shadow-md" placeholder="e-mail" v-model="email" required />
      <input type="password" min="6" id="password" class="p-2 rounded-md w-80 shadow-md" placeholder="password" v-model="password" required />
      <input type="password" min="6" id="confirm_password" class="p-2 rounded-md w-80 shadow-md" placeholder="confirm password" v-model="confirmPassword" required />
      <button v-if="
      emailCheck.email 
      && passwordLength.value
      && passwordMatch.conf
      && passwordLength.value > 5
      && passwordMatch.pass === passwordMatch.conf
      " id="signin" type="submit" @click="signInWithEmail" class="p-2 rounded-md w-80 bg-primary hover:shadow-lg text-white">Sign Up</button>
      <div v-else class="p-2 rounded-md w-80 bg-light  text-white text-center cursor-default">Sign Up</div>
    </form>
    <div class="h-20 -mt-8">
      <p v-if="passwordLength.value && passwordLength.value < 6" class="text-sm text-red-800" >Password must be at least 6 characters long.</p>
      <p v-if="passwordMatch.conf && passwordMatch.pass !== passwordMatch.conf" class="text-sm text-red-800" >Passwords do not match.</p>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Sign Up'
  })
const supabase = useSupabaseClient()

const email = ref("");
const password = ref("");
const confirmPassword = ref("")
const token = ref("")

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

const tokenRef = reactive({
  value: null
})

onUpdated(() => {
  passwordLength.value = password.value.length
  passwordMatch.pass = password.value
  passwordMatch.conf = confirmPassword.value
  emailCheck.email = email.value
  tokenRef.value = token.value
})


async function signInWithEmail(e) {
  e.preventDefault()
  if (password.value !== confirmPassword.value || token.value !== "SMHS70") return
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
