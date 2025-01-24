import styled from 'styled-components';

export const ChartContainer = styled.div`
  padding: 1rem;
  border: 1px solid ${(p) => p.theme.darkGray};
  overflow: scroll;
  background: ${(p)=> p.theme.white};
`;

export const ChartAreaWrapper = styled.div`
  flex: 1; 
  min-width: 75rem; 
  height: 100%; 
`;
