<template>
    VantComp:
    <van-image width="100" height="100" :src="logo" />
    <van-button>sdfds</van-button>
    <van-tabs>
        <van-tab>32432</van-tab>
    </van-tabs>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Image, Button, Tabs, Tab } from 'vant'
import logo from '@/assets/logo.png'
export default defineComponent({
    components: {
        [Image.name]: Image,
        [Button.name]: Button,
        [Tabs.name]: Tabs,
        [Tab.name]: Tab,
    },
    setup() {
        return {
            logo
        }
    }
})
</script>
  
  <style>
</style>
  