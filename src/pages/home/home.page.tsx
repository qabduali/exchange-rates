import React, { useState, useEffect, useMemo } from 'react';
import Table from '../../components/table/table.component';
import Chart from '../../components/chart/chart.component';
import { H1 } from '../../components/typography.component';
import { IExchangeRate } from '../../types';
import { fetchExchangeRates } from '../../requests/rates.requests';
import { calculateDateRange } from '../../utils/basic.utils';
import { columns, currencies, periodOptions } from '../../consts/rates.consts';
import {
  HomePageContainer,
  ChartContainer,
  TableContainer,
  Content,
  Controls,
  Loader,
  Error,
  PeriodButton,
  CurrencySelect,
} from './home.styles';

const HomePage: React.FC = () => {
  const [state, setState] = useState({
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    period: '1M',
  });
  const { fromCurrency, toCurrency, period } = state;
  const [rates, setRates] = useState<IExchangeRate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRates();
  }, [state]);

  const loadRates = async () => {
    setLoading(true);
    setError(null);
    try {
      const { startDate, endDate } = calculateDateRange(period);
      const data = await fetchExchangeRates(startDate, endDate, fromCurrency, toCurrency);
      setRates(data);
    } catch (err) {
      setError('Error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleStateChange = (key: keyof typeof state, value: string) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  const data = useMemo(
    () => ({
      labels: rates.map((rate) => rate.date),
      datasets: [
        {
          label: `${fromCurrency}-${toCurrency}`,
          data: rates.map((rate) => rate.rate),
          fill: false,
          borderColor: '#42a5f5',
        },
      ],
    }),
    [rates, fromCurrency, toCurrency],
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: `${fromCurrency}-${toCurrency} Exchange Rate`,
        },
      },
    }),
    [fromCurrency, toCurrency],
  );

  return (
    <HomePageContainer>
      <H1>Currencies Exchange Rates</H1>
      <Controls>
        {periodOptions.map(({ value, label }) => (
          <PeriodButton
            data-tooltip={!(period === value) ? 'Change period' : null}
            key={value}
            onClick={() => handleStateChange('period', value)}
            active={period === value}
          >
            {label}
          </PeriodButton>
        ))}
      </Controls>
      <Controls>
        <CurrencySelect>
          <label>From: </label>
          <select
            value={fromCurrency}
            onChange={(e) => handleStateChange('fromCurrency', e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency} disabled={currency === toCurrency}>
                {currency}
              </option>
            ))}
          </select>
        </CurrencySelect>
        <CurrencySelect>
          <label>To: </label>
          <select
            value={toCurrency}
            onChange={(e) => handleStateChange('toCurrency', e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency} disabled={currency === fromCurrency}>
                {currency}
              </option>
            ))}
          </select>
        </CurrencySelect>
      </Controls>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <Content>
          <TableContainer>
            <Table data={rates} columns={columns} />
          </TableContainer>
          <ChartContainer>
            <Chart options={options} data={data} />
          </ChartContainer>
        </Content>
      )}
    </HomePageContainer>
  );
};

export default HomePage;
