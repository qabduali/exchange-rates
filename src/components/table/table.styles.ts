import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow: auto;
  border: 1px solid ${(p) => p.theme.darkGray};
  background: ${(p) => p.theme.white}
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    ${(p) => p.theme.p1Bold};
    background: ${(p) => p.theme.gray2};
  }

  th,
  td {
    border: 1px solid ${(p) => p.theme.darkGray};
    padding: .5rem;
    text-align: left;
  }

  tbody tr {
    &:hover {
      background: ${(p) => p.theme.lightBlueGradient};
    }

    &:nth-child(odd) {
      background-color: ${(p) => p.theme.lightGray}; 
    }
    
    ${(p) => p.theme.p1Regular};
  }
`;