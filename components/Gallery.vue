<template>
  <div class="flex flex-wrap gap-6 justify-center card p-3">
    <h1 class="w-full px-8">{{ props.albumTitle }}</h1>
    <div v-for="photo of props.albumFolder.arrThumb">
      <div
        @click="
          () =>
            showImage(
              props.albumFolder.arr[props.albumFolder.arrThumb.indexOf(photo)]
            )
        "
        class="cursor-pointer"
      >
        <img :src="photo" :key="photo" width="100" class="rounded-md" />
      </div>
    </div>
    <div
      v-if="showModal.value"
      class="flex justify-center items-center top-0 right-0 bottom-0 left-0 z-50 fixed"
    >
      <div
        class="bg-black/80 top-0 right-0 bottom-0 left-0 z-50 fixed"
        @click="hideModal"
      ></div>
      <div class="flex flex-col">
        <button @click="hideModal" class="z-99">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="white"
            class="w-12 h-12 relative top-14 float-right mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <GalleryModal
          class="z-55"
          :imageSource="currentImage.src"
          :albumArray="props.albumFolder.arr"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  albumFolder: Object,
  albumTitle: String,
});

const showModal = reactive({ value: false });
const currentImage = reactive({ src: "" });

function showImage(src) {
  showModal.value = true;
  currentImage.src = src;
}
function hideModal() {
  showModal.value = false;
}
</script>
