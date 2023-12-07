<template>
  <v-card class="mx-auto" max-width="344" variant="outlined">
    <v-card-item>
      <div>
        <div class="text-overline mb-1">ToDo Card</div>
        <div class="text-h5 mb-1">{{ toDo.name }}</div>
        <div class="text-caption">
          <p class="text-h6 mb-1">{{ toDo.text }}</p>
          <p class="text-h6 ma-0">{{ $filters.numberFormat(toDo.price) }} 원</p>
        </div>
      </div>
    </v-card-item>

    <v-card-actions>
      <slot name="activator" v-bind="toDo">
        <v-btn variant="outlined"> 액션 버튼 </v-btn>
      </slot>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  toDo: {
    type: Object,
    default: () => {},
  },
})

const { toDo } = props
</script>
