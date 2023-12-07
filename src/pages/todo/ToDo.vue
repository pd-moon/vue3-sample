<template>
  <v-row no-gutters>
    <v-col cols="6" class="pr-3">
      <Draggable
        v-model="sortableList"
        v-bind="{ animation: 200 }"
        :group="{ name: 'sortableList', pull: 'clone', put: false }"
        ghost-class="ghost"
        handle=".drag-handle"
        item-key="uq"
      >
        <template #item="{ element }">
          <v-list-item v-ripple="{ class: 'text-secondary' }" class="sortable-item">
            <div class="d-flex align-center justify-space-between">
              <div class="d-flex align-center item__header">
                <p class="ma-0 drag-handle" style="width: 130px">
                  <v-icon class="mr-2">mdi-menu</v-icon>
                  <span>{{ element.name }}</span>
                </p>
                <span class="mx-1">ㅣ</span>
                <span>{{ element.text }}</span>
              </div>

              <div class="item__icons">
                <v-icon @click="removeToDo(element)">mdi-trash-can</v-icon>
              </div>
            </div>
          </v-list-item>
        </template>
      </Draggable>
    </v-col>
    <v-col cols="6" class="pl-3">
      <v-row no-gutters>
        <v-col v-for="toDo in toDoList" :key="toDo.id" cols="4" class="px-1 pb-2">
          <ToDoCard :to-do="toDo">
            <template #activator="item">
              <v-btn prepend-icon="mdi-arrow-left" variant="tonal" @click="addToDo(item)">
                추가
              </v-btn>
            </template>
          </ToDoCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
import { useToDoStore } from '@/stores/todo'
import { storeToRefs } from 'pinia'

import Draggable from 'vuedraggable'
import ToDoCard from '@/components/todo/ToDoCard.vue'

const toDoStore = useToDoStore()
const { toDoList } = storeToRefs(toDoStore)
const { getToDoList } = toDoStore

const sortableList = ref([])

const addToDo = (toDo) => {
  const time = new Date().getTime()
  sortableList.value.push({ ...toDo, uq: `${toDo.name}_${time}` })
}

const removeToDo = (toDo) => {
  const index = sortableList.value.indexOf(toDo)
  sortableList.value.splice(index, 1)
}

getToDoList(10)
</script>

<style scoped>
.sortable-item {
  border: 1px solid black;
  border-radius: 4px;

  margin-bottom: 8px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.drag-handle {
  cursor: grab;
}
</style>
