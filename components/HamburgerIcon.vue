<template>
  <div class="p-1" @click="handleToggle">
    <div class="m-1 h-1 w-8 rounded-md bg-white transition " :class="topBar"></div>
  
    <div class="m-1 h-1 w-8 rounded-md bg-white transition " :class="middleBar"></div>
  
    <div class="m-1 h-1 w-8 rounded-md bg-white transition " :class="bottomBar"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        topBar: "",
        middleBar: "",
        bottomBar: ""
      }
    },
    methods: {
      handleToggle() {
        this.topBar = (this.topBar === "")? "rotate-top" : ""
        this.middleBar = (this.middleBar === "")? "hidden" : ""
        this.bottomBar = (this.bottomBar === "")? "rotate-bottom" : ""
      }
    }
  }
</script>

<style>
  .hidden {
    display: hidden
  }
  .rotate-top {
    transform: 
      rotate(45deg)
      translateY(.35em);
  }
  .rotate-bottom {
    transform: 
      rotate(-45deg)
      translateY(-.35em);
  }
</style>
