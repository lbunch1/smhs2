<template>
  <div>
    <div class="jumbotron bg-jumbo bg-cover">
      <div class="jumbo-banner">
        <h1>San Marino High School</h1>
        <p>class of 1970</p>
      </div>
    </div>
    <div class="content">
      <div class="card">
        <div class="card-header">
          <h1>The 50ish Reunion</h1>
        </div>
        <div class="card-body">
          <h1>Sept 9-11, 2022 • Newport Beach, California</h1>
          <h2>It's a wrap!</h2>
          <p>We started off Friday, Sept. 9th at the home of Terry and Jan Shea in Costa Mesa. It was a casual, hosted cocktail party with wonderful appetizers, beverages, and conversation.</p>
          <p>Saturday, Sept. 10th was at the American Legion post in Newport Beach. Everyone enjoyed appetizers, dinner, a no-host bar and lots of socializing on the patio overlooking the marina.</p>
          <p>The sun came out on Sunday, Sept. 11th at Lynne’s beachfront rental for light refreshments and fond farewells.</p>
          <p>Photos from the weekend will be available soon. If you took pictures and would like them posted, please <nuxt-link to="Contact" class="link">send them in!</nuxt-link></p>
        </div>
      </div>
      <div class="flex flex-wrap justify-center items-center">
        <div class="snippet">
          <div class="card-body">
            <h1>Check out photos from past events!</h1>
            <p v-if="user">Head over to <nuxt-link to="Photos" class="link">the Photo gallery</nuxt-link> to see photos from past events.</p>
            <p v-else><nuxt-link to="Signup" class="link">Sign up here</nuxt-link> to view photos from past events. Or <nuxt-link to="Login" class="link">Log in</nuxt-link> if you are already registered.</p>
          </div>
        </div>
        <div class="snippet">
          <div class="card-body">
            <h2>Keep an eye out for upcoming events</h2>
            <p>We'll try to reach out to all alumni members as information becomes available but just in case, be sure to check in often</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  useHead({
    title: 'Home'
  })

  const user = useSupabaseUser()
</script>

<style>
  .bg-jumbo {
    background-image: url('../assets/img/home-jumbotron.jpg');
  }
</style>
