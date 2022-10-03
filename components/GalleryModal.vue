<template>
    <div class="card p-6 "><img :src="imageSource" class="max-w-[90vw] max-h-[90vh]"/></div>
</template>
<script setup>
  defineProps(['imageSource'])
</script>