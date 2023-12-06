<template>
  <v-row no-gutters>
    <v-col cols="6">
      <v-row no-gutters class="sortable-list">
        <v-col cols="12" class="sortable-items"></v-col>
      </v-row>
    </v-col>
    <v-col cols="6">
      <v-row no-gutters>
        <v-col v-for="toDo in toDoList" :key="toDo.id" cols="4" class="px-1 py-1">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  {{ toDo.name }}
                </div>
                <div class="text-h6 mb-1">Headline</div>
                <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn> <v-icon icon="mid-arrow-left"></v-icon> </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { useToDoStore } from '@/stores/todo'
import { storeToRefs } from 'pinia'

const toDoStore = useToDoStore()
const { toDoList } = storeToRefs(toDoStore)
const { getToDoList } = toDoStore

getToDoList(8)
</script>

<style lang="scss" scoped></style>
