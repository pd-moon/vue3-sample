import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { getData } from '@/api/todo'

export const useToDoStore = defineStore('todo', () => {
  const toDoList = ref([])
  const total = computed(() => toDoList.value.length)

  const getToDoList = async (length = 10) => {
    const data = await getData(length)
    toDoList.value = data
  }

  return { toDoList, total, getToDoList }
})
