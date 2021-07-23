<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition>
        <keep-alive>
          <component :is="Component" v-if="route.meta.keepAlive" :key="route.path" />
        </keep-alive>
      </transition>
      <transition :name="route.meta.transition">
        <component :is="Component" v-if="!route.meta.keepAlive" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts" >
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
