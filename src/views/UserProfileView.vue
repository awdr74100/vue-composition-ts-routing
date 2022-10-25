<template>
  <h1>{{ message }}</h1>
  <h1>{{ $route.params.id }} 的個人資料</h1>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const message = computed(() => `${route.params.id} 的個人資料`);
</script>

<style></style>
