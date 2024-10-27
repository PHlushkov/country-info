<script setup lang="ts">
import { defineProps } from 'vue';

interface Holiday {
  date: string;
  name: string;
  type: string;
}
const props = defineProps<{ holidays: Holiday[] }>();
</script>

<template>
  <div>
    <ul>
      <li v-for="holiday in holidays" :key="holiday.date" class="border p-2 my-2">
        <strong>{{ holiday.name }}</strong>
        <p>Дата: {{ holiday.date }}</p>
      </li>
    </ul>
  </div>
</template>
