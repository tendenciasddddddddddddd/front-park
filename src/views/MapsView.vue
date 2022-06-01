<template>
   <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="shape-container d-flex " style="    margin-top: -200px;">
          <iframe width="100%" height="660px" :src="iframeSrc"  allow="geolocation"></iframe>
        </div>
       
      </section>
    </div>
</template>

<script>

export default {
 name: "MapsView",
  data() {
    return {
      iframeSrc: "https://rositas.netlify.app",
    };
  },

}
</script>

<style>

</style>