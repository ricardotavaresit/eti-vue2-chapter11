<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Parameter: {{ $route.params.id }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "Hi Task",
    };
  },
};
</script>
