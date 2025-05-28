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
  color: black;
  font-weight: 700;
  background-color: ${({ type, devMode }) => {
    if (!devMode) {
      return type === 0 ? '#25a244' : '#495057';
    }
    switch (type) {
      case 0:
        return '#ffffff';
      case 1:
        return '#E16C22';
      case 2:
        return '#E16C22';
      case 3:
        return '#948A58';
      case 4:
        return '#948A58';
      case 5:
        return '#BFBFBF';
      case 7:
        return '#BFBFBF';
      case 8:
        return '#BFBFBF';
      case 9:
        return '#BFBFBF';
      case 10:
        return '#BFBFBF';
      case 11:
        return '#BFBFBF';
      case 12:
        return '#BFBFBF';
      case 13:
        return '#a64d79';
      case 14:
        return '#980000';
      case 15:
        return '#b45f06';
      case 16:
        return '#f4cccc';
      case 17:
        return '#d5a6bd';
      case 18:
        return '#8e7cc3';
      case 19:
        return '#741b47';
      default:
        return '#000000';
    }
  }};
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
  transition: transform 0.1s linear;
  will-change: transform;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
