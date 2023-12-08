<template>
  <div>
    <metainfo></metainfo>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path"></component>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </RouterView>
  </div>
</template>

<script setup>
import { useMeta } from 'vue-meta'
import { RouterView } from 'vue-router'

useMeta({
  title: 'vue3 sample !',
  htmlAttrs: {
    lang: 'ko',
  },
  meta: [
    {
      vmid: 'og:title',
      property: 'og:title',
      name: 'og:title',
      content: 'vue3 sample !',
    },
    {
      vmid: 'og:description',
      property: 'og:description',
      name: 'og:description',
      content: 'vue3 연습&배포 프로젝트입니다.',
    },
  ],
})
</script>
