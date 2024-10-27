<script setup lang="ts">
import { defineProps } from 'vue';

import type { Country } from '~/entities/country/model/fetchCountries';

const props = defineProps<{ countries: Country[] }>();
</script>

<template>
  <div>
    <h2>Countries List</h2>
    <ul class="flex flex-col gap-y-2.5 mt-3 h-screen w-full overflow-x-auto">
      <li v-for="country in countries" :key="country.countryCode">
        <router-link :to="`/country/${country.countryCode}/${country.name}`">
          <div class="border text-center p-3">
            {{ country.name }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
