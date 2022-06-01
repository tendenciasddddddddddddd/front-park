<template>
    <div>
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
                <div class=" shape-container d-flex " style="    margin-top: -170px;">

                     <!-- <Unity :unity="unityContext" width="100%" height="600px" /> -->
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import UnityWebgl from 'unity-webgl'

const Unity = new UnityWebgl({
  loaderUrl: 'static/Build/fin2.loader.js',
  dataUrl: "static/Build/fin2.data.unityweb",
  frameworkUrl: "static/Build/fin2.framework.js.unityweb",
  codeUrl: "static/Build/fin2.wasm.unityweb"
})
export default {
  name: "LandingView",
  //components: {Unity: UnityWebgl.vueComponent },
  data() {
    return {
      unityContext: Unity
    }
  }
};
</script>
