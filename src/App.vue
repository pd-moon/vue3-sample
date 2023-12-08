<template>
  <div>
    <metainfo></metainfo>
    <Suspense>
      <RouterView />
    </Suspense>
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
      content: 'vue3 sample !',
    },
    {
      vmid: 'og:description',
      property: 'og:description',
      content: 'vue3 연습용 페이지입니다.',
    },
  ],
})
</script>
