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
        this.topBar = (this.topBar === "")? "translate-y-1 rotate-45" : ""
        this.middleBar = (this.middleBar === "")? "hidden" : ""
        this.bottomBar = (this.bottomBar === "")? "-translate-y-1 -rotate-45" : ""
      }
    }
  }
</script>
