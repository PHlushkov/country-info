<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useYearSwitcher } from '~/features/yearSwitcher/model/useYearSwitcher';
import YearSwitcher from '~/features/yearSwitcher/ui/YearSwitcher.vue';

import { fetchHolidays } from '~/entities/country/model/fetchHolidays';
import HolidayList from '~/entities/country/ui/HolidayList.vue';

const route = useRoute();

const countryCode = ref(route.params.code as string);
const countryName = ref(route.params.name as string);

const holidays = ref([]);

const { selectedYear, selectYear, currentYear } = useYearSwitcher();

const loadHolidays = async () => {
  holidays.value = await fetchHolidays(countryCode.value, selectedYear.value);
};

onMounted(loadHolidays);
watch(selectedYear, loadHolidays);
</script>

<template>
  <div class="p-4">
    <h1>Country: {{ countryName }}</h1>
    <HolidayList :holidays="holidays" />
    <YearSwitcher :currentYear="currentYear" @yearSelected="selectYear" />
  </div>
</template>
