<template>
  <h1>UserView Component</h1>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();

console.log(route.params.id);
</script>

<style></style>
