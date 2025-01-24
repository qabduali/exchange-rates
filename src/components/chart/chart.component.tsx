import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartContainer, ChartAreaWrapper } from './chart.styles';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
  customStyles?: React.CSSProperties;
}

const Chart: React.FC<ChartProps> = ({ data, options, customStyles }) => {
  return (
    <ChartContainer style={customStyles}>
      <ChartAreaWrapper>
        <Line data={data} options={options} />
      </ChartAreaWrapper>
    </ChartContainer>
  );
};

export default Chart;
