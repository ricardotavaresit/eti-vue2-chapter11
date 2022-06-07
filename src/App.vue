<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link v-bind:to="{ name: 'route_products' }">Products</router-link>
    <router-link to="/tasks">Tasks</router-link>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Chapter 11",
    };
  },
};
</script>
