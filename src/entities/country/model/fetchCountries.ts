import { api } from '~/shared/api';

export type Country = {
  name: string;
  countryCode: string;
};

export async function fetchCountries(): Promise<Country[]> {
  try {
    const response = await api.get('/api/v3/AvailableCountries');
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
}
