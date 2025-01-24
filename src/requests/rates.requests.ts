import axios from 'axios';
import { IExchangeRate } from '../types';

const BASE_URL = 'https://api.frankfurter.app';

export const fetchExchangeRates = async (
  startDate: string,
  endDate: string,
  from: string,
  to: string
): Promise<IExchangeRate[]> => {
  const { data } = await axios.get(`${BASE_URL}/${startDate}..${endDate}`, {
    params: { from, to },
  });

  return Object.entries(data.rates).map(([date, rate]) => ({
    date,
    rate: (rate as Record<string, number>)[to],
  }));
};
