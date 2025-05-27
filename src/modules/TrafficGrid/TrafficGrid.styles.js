import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: black;
  overflow-y: auto;
`;

export const Table = styled.table`
  flex: 1;
  width: inherit;
  height: inherit;
  border-collapse: collapse;
  background-color: black;
  border: 2px solid black;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  width: 26px;
  height: 26px;
  text-align: center;
  border: 3px solid black;
  background-color: ${({ type }) => {
    if (type === 0) {
      return '#25a244'; // Grama
    } else {
      return '#495057'; // Estrada
    }
  }};

  color: ${({ type }) => (type === 0 ? '#000' : '#111')};
`;

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 2px solid black;
  border-bottom: 6px solid black;
  align-items: center;
  justify-content: center;
`;

export const NoDataDescription = styled.span`
  font-size: 22px;
  color: black;
`;

export const VehicleContainer = styled.div`
  position: absolute;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
