import { api } from '~/shared/api';

export async function fetchHolidays(countryCode: string, year: number) {
  const response = await api.get(`/api/v3/PublicHolidays/${year}/${countryCode}`);

  return response.data;
}

export interface Holiday {
  name: string;
  date: string;
  countryCode: string;
}
