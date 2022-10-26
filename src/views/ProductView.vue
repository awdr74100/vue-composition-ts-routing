<template>
  <h1>{{ title || 'Hello World' }}</h1>
  <p>編號: {{ id || 1 }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
  id?: string;
  title?: string;
}>();

console.log(props);
</script>
