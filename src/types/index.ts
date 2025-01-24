export interface IExchangeRate {
  date: string;
  rate: number;
}

export interface IRatesResponse {
  rates: Record<string, number>;
  date: string;
}
