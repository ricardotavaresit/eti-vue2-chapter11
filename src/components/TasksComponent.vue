<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Parameter: {{ id }}</p>
  </div>
</template>


<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "Hi Task",
    };
  },
};
</script>
