<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import RandomCountries from '~/widgets/random-countries';

import { fetchCountries } from '~/entities/country/model/fetchCountries';
import type { Country } from '~/entities/country/model/fetchCountries';
import CountryList from '~/entities/country/ui/CountryList.vue';

const countries = ref<Country[]>([]);
const searchQuery = ref('');

onMounted(async () => {
  countries.value = await fetchCountries();
});

const filteredCountries = computed(() =>
  countries.value.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>

<template>
  <div class="m-2.5">
    <input class="border p-1" v-model="searchQuery" placeholder="Search country..." />
    <div class="flex justify-between gap-x-2.5">
      <CountryList class="w-6/12" :countries="filteredCountries" />
      <RandomCountries class="w-6/12 border" />
    </div>
  </div>
</template>
