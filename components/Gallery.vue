<template>
  <div class="flex flex-wrap gap-6 justify-center card p-3">
    <h1 class="w-full px-8">{{ props.albumTitle }}</h1>
    <div v-for="photo of props.albumFolder.arrThumb">
      <div @click="() => showImage(props.albumFolder.arr[props.albumFolder.arrThumb.indexOf(photo)])" class="cursor-pointer">
        <img :src="photo" :key="photo" width="100" class="rounded-md" />
      </div>
    </div>
    <div
      :class="showModal.value"
      class="bg-black/80 top-0 right-0 bottom-0 left-0 z-50 fixed flex justify-center items-center"
      @click="hideModal"
    >
      <GalleryModal :imageSource="currentImage.src" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  albumFolder: Object,
  albumTitle: String,
});


const showModal = reactive({ value: "hidden" });
const currentImage = reactive({ src: "" });

function showImage(src) {
  showModal.value = "";
  currentImage.src = src;
}
function hideModal() {
  showModal.value = "hidden";
}
</script>
