<template>
  <h1>SUPER SPECIAL AWESOME TODO LIST!!</h1>
  <ImageRotater />
  <RouterLink to="/list">To the List!</RouterLink>
</template>

<script>
import ImageRotater from '@/components/ImageRotater.vue'

export default {
  name: 'HomeView',
  components: {
    ImageRotater,
  }
}
</script>
