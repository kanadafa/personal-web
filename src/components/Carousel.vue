<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="carousel">
    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
      <div v-for="image in dataImages" :key="image.src">
        <b-carousel-slide :caption=image.caption :img-src=image.src ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: 'CarouselComp',
  data(){
    return {
      dataImages: this.images,
    }
  },
  props: {
    images: {
      type: Array,
    }
  },
}
</script>
<style scoped lang="scss">
    .carousel{
      max-width: 700px;
      margin: 0 auto;
    }
</style>