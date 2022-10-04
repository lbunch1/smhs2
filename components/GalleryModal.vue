<template>
  <div
    class="rounded-2xl shadow-lg mx-2 mt-6 bg-blackish p-6 min-w-[90vw] flex justify-center"
  >
    <img :src="image.src" class="max-w-[90vw] max-h-[90vh]" />
    <div class="flex absolute top-[50%] left-[5vw] right-[5vw] text-white">
      <button type="button" @click="prevImage">
        <svg class="h-16  opacity-50 hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{5}"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div class="mx-auto"></div>
      <button type="button" @click="nextImage">
        <svg class="h-16 opacity-50 hover:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{5}"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  imageSource: String,
  albumArray: Array,
});

const image = reactive({ src: props.imageSource });

function prevImage() {
  if (props.albumArray.indexOf(image.src) > 0) {
    image.src = props.albumArray[props.albumArray.indexOf(image.src) - 1];
  }
}
function nextImage() {
  if (props.albumArray.indexOf(image.src) < props.albumArray.length - 1) {
    image.src = props.albumArray[props.albumArray.indexOf(image.src) + 1];
    console.log(props.albumArray.length);
  }
}

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    e = e || window.event;
    if (e.key === "ArrowLeft") {
      prevImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  });
});
</script>
