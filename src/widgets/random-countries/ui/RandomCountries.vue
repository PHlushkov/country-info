<script setup lang="ts">
import { onMounted } from 'vue';

import { useRandomHolidays } from '~/widgets/random-countries/model/useRandomHolidays';

const { holidays, loadRandomHolidays } = useRandomHolidays();

onMounted(() => {
  loadRandomHolidays();
});
</script>

<template>
  <div class="p-2">
    <h2>Random Countries Widget</h2>
    <ul v-if="holidays.length">
      <li v-for="(item, index) in holidays" :key="index" class="mt-2 border p-1">
        <router-link :to="`/country/${item.holiday.countryCode}/${item.country}`">
          <p><strong>Country name:</strong> {{ item.country }}</p>
          <p><strong>Next Holiday:</strong> {{ item.holiday.name }}<br /></p>
          <p><strong>Date:</strong> {{ item.holiday.date }}</p>
        </router-link>
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>
