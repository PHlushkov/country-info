import { ref } from 'vue';

import { type Country, fetchCountries } from '~/entities/country/model/fetchCountries';
import { type Holiday, fetchHolidays } from '~/entities/country/model/fetchHolidays';

interface HolidayInfo {
  country: string;
  holiday: Holiday;
}

export const useRandomHolidays = () => {
  const randomCountries = ref<Country[]>([]);
  const holidays = ref<HolidayInfo[]>([]);

  const loadRandomHolidays = async () => {
    try {
      const countries = await fetchCountries();
      randomCountries.value = countries.sort(() => 0.5 - Math.random()).slice(0, 3);

      for (const country of randomCountries.value) {
        const holidayData = await fetchHolidays(country.countryCode, new Date().getFullYear());
        const upcomingHoliday = holidayData
          .map((holiday: Holiday) => ({
            ...holiday,
            date: new Date(holiday.date)
          }))
          .filter((holiday: { date: Date }) => holiday.date >= new Date())
          .sort((a: { date: Date }, b: { date: Date }) => +a.date - +b.date)[0];

        if (upcomingHoliday) {
          holidays.value.push({
            country: country.name,
            holiday: {
              name: upcomingHoliday.name,
              date: upcomingHoliday.date.toISOString().split('T')[0],
              countryCode: country.countryCode
            }
          });
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  return { randomCountries, holidays, loadRandomHolidays };
};
