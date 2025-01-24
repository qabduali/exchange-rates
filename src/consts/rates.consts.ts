import { IExchangeRate } from "types";

export const columns = [
  {
    header: 'Date',
    renderCell: (row: IExchangeRate) => row.date,
  },
  {
    header: 'Rate',
    renderCell: (row: IExchangeRate) => row.rate.toFixed(3),
  },
];

export const currencies = [
  'EUR', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'GBP', 'HKD',
  'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK',
  'NZD', 'PHP', 'PLN', 'RON', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR',
];

export const periodOptions = [
  { value: '1M', label: '1 Month' },
  { value: '3M', label: '3 Months' },
  { value: '6M', label: '6 Months' },
  { value: '12M', label: '12 Months' },
];