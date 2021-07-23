<template>
  <div class="page-404">
    <van-image class="icon" :src="img_bg" />
    <div class="tip">闯入了一片未知领域</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Image } from 'vant'
import img_bg from './img/404.png'
export default defineComponent({
  name: '404',
  components: {
    [Image.name]: Image,
  },
  data() {
    return {
      img_bg,
    }
  },
  methods: {},
})
</script>
