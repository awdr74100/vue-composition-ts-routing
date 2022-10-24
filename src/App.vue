<template>
  <nav>
    <RouterLink to="/">首頁</RouterLink>
    <RouterLink to="/about?a=a&b=b">關於</RouterLink>
  </nav>
  <nav>
    <RouterLink :to="{ path: '/' }">首頁</RouterLink>
    <RouterLink :to="{ path: '/about', query: { a: 'aa', b: 'bb' } }">關於</RouterLink>
  </nav>
  <nav>
    <button @click.prevent="pushWithQuery('/')">首頁</button>
    <button @click.prevent="pushWithQuery('/about', { a: 'aaa', b: 'bbb' })">關於</button>
  </nav>
  <nav>
    <a href="#" @click.prevent="router.push('/')">首頁</a>
    <a href="#" @click.prevent="router.push('/about?a=aaaa&b=bbbb')">關於</a>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const pushWithQuery = (path: string, query?: { [prop: string]: string }) => {
  router.push({ path, query });
};

watch(
  () => route.query.a,
  (a) => {
    console.log(a);
  },
);
</script>

<style></style>
