<template>
  <div class="Home">
    <div>
      <Game></Game>
    </div>
    <!-- <div>
      <div>HDR Background</div>
      <div>https://galacean.antgroup.com/#/examples/0.9/hdr-loader</div>
      <HDRBackground></HDRBackground>
    </div>
    <div>
      <div>Video Background</div>
      <div>https://galacean.antgroup.com/#/examples/0.9/video-background</div>
      <VideoBackground></VideoBackground>
    </div>
    <div>
      <div>Scene Background</div>
      <div>https://galacean.antgroup.com/#/examples/0.9/background</div>
      <SceneBackgound></SceneBackgound>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import HDRBackground from '@/components/HDRBackground.vue'
import VideoBackground from '@/components/VideoBackground.vue'
import SceneBackgound from '@/components/SceneBackgound.vue'
import Test from '@/components/Test.vue'
import Game from '@/components/Game.vue'

</script>
<style lang="scss" scoped>
.Home {
  height: 100%;
  width: 100%;
}
</style>
