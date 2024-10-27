<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';

const props = defineProps<{ currentYear: number }>();
const emit = defineEmits(['yearSelected']);
const activeYear = ref(props.currentYear);

const selectYear = (year: number) => {
  activeYear.value = year;
  emit('yearSelected', year);
};
</script>

<template>
  <div class="flex gap-2 mt-4">
    <button
      v-for="year in 11"
      :key="props.currentYear - 5 + year"
      :class="{
        'bg-black text-white': props.currentYear - 5 + year === activeYear,
        'border rounded p-2': true
      }"
      @click="selectYear(props.currentYear - 5 + year)"
    >
      {{ props.currentYear - 5 + year }}
    </button>
  </div>
</template>
