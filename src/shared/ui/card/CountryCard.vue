<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  country: {
    name: string;
    alpha2Code: string;
  };
}>();
</script>

<template>
  <div class="border rounded-lg p-4">
    <router-link
      :to="`/country/${country.alpha2Code}`"
      class="text-lg font-bold text-blue-500 underline"
    >
      {{ country.name }}
    </router-link>
    <p>Code: {{ country.alpha2Code }}</p>
  </div>
</template>
