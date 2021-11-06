<template>
  <div>
    <cv1 /><hr>
    <cv2 />
  </div>
</template>

<script>
  import cv1 from './components/cv1.vue'
  import cv2 from './components/cv2.vue'
    export default {
  name: '#app',
  components: {
    cv1,
    cv2
  }
}
</script>