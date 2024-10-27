import { ref } from 'vue';

export function useYearSwitcher() {
  const currentYear = new Date().getFullYear();
  const selectedYear = ref(currentYear);

  const selectYear = (year: number) => {
    selectedYear.value = year;
  };

  return { selectedYear, selectYear, currentYear };
}
