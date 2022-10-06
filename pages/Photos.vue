<template>
  <div class="content">
    <h1 class="text-4xl font-bold text-primary text-center p-10">
      Photos
    </h1>
    <div v-if="user">
      <Gallery :albumFolder="album50Sun" albumTitle="40th Reunion - Sunday" />
      <Gallery :albumFolder="album50Sat" albumTitle="40th Reunion - Saturday" />
      <Gallery :albumFolder="album40th" albumTitle="40th Reunion - Other" />
      <Gallery :albumFolder="album25th" albumTitle="25th Reunion" />
      <Gallery :albumFolder="albumMisc" albumTitle="Misc" />
    </div>
    <div v-else>
      <div class="card">
        <h3 class="card-body" >Please <nuxt-link class="link" to="Login">Log In</nuxt-link> to view content.</h3>
      </div>
    </div>
  </div>
    
</template>

<script setup>
  const user = useSupabaseUser()
function generateAlbum(title, length) {
  let arr = []
  let arrThumb = []
  for (let i = 1 ; i <= length ; i++) {
    let num = i.toString().padStart(3, '0')
    let item = `/photos/${title}/${title}_${num}.jpg`
    arr.push(item)
  }
  for (let i = 1 ; i <= length ; i++) {
    let num = i.toString().padStart(3, '0')
    let item = `/photos/${title}/thumb/${title}_${num}_thumb.jpg`
    arrThumb.push(item)
  }
  return { arr , arrThumb }
}
const album50Sun = generateAlbum('50ishSun', 28)
const album50Sat = generateAlbum('50ishSat', 154)
const album40th = generateAlbum('40th', 38)
const albumMisc = generateAlbum('misc', 66)
const album25th = generateAlbum('25th', 5)
</script>