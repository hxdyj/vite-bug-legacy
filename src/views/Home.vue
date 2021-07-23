

<template>
    <div>
        <h1>Home</h1>
        <button @click="goToCustom">Go to Custom comp page</button>
        <button @click="goToVant">Go to Vant comp page</button>
    </div>
</template>
  
  <script setup lang="ts" >
import { useRouter } from "vue-router";

let router = useRouter()
function goToCustom() {
    router.push({
        name: 'custom'
    })
}
function goToVant() {
    router.push({
        name: 'vant'
    })
}
</script>
  
  <style>
</style>
  