import styled, { keyframes } from 'styled-components';
import { H4 } from '../../components/typography.component';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1.5rem;
  gap: 1.5rem;
`;

export const Controls = styled.div`
  display: flex;
  gap: .5rem;
`;

export const PeriodButton = styled.button<{active: boolean}>`
  padding: .5rem 1rem;
  border: 1px solid ${(p) => p.theme.gray};
  cursor: pointer;
  border-radius: 5px;
  ${(p) => p.theme.p1Regular};

  background-color: ${({active, theme}) => active ? theme.blue : theme.lightGray};
  color: ${({active, theme}) => active ? theme.white : theme.black};

  &:hover {
    background-color: ${(p) => !p.active && p.theme.gray};
  }
`;

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Loader = styled(H4)`
  text-align: center;
  margin-top: 3rem;
  animation: ${blink} 1s infinite; 
`;

export const Error = styled(H4)`
  text-align: center;
  margin-top: 3rem;
  color: ${(p) => p.theme.red};
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  overflow: hidden;
`;

export const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const ChartContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const CurrencySelect = styled.div`
  margin: 0 1rem;

  label {
    margin-right: 0.5rem;
    ${(p) => p.theme.p1Regular};
  }

  select {
    padding: 0.5rem;
    border: 1px solid ${(p) => p.theme.darkGray};
    border-radius: 5px;
    outline: none;
    pointer: cursor;
  }
`;