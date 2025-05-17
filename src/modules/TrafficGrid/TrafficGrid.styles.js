import styled from 'styled-components';

export const Table = styled.table`
  flex: 1;
  border-collapse: separate;
  background-color: black;
  border: 2px solid black;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 20px;

  background-color: ${({ type }) => {
    switch (type) {
      case 0:
        return '#25a244'; // Grama
      case 1:
        return '#495057'; // Estrada Cima
      case 2:
        return '#495057'; // Estrada Direita
      case 3:
        return '#495057'; // Estrada Baixo
      case 4:
        return '#495057'; // Estrada Esquerda
      case 5:
        return '#495057'; // Cruzamento Cima
      case 6:
        return '#495057'; // Cruzamento Direita
      case 7:
        return '#495057'; // Cruzamento Baixo
      case 8:
        return '#495057'; // Cruzamento Esquerda
      case 9:
        return '#495057'; // Cruzamento Cima e Direita
      case 10:
        return '#495057'; // Cruzamento Cima e Esquerda
      case 11:
        return '#495057'; // Cruzamento Direita e Baixo
      case 12:
        return '#495057'; // Cruzamento Baixo e Esquerda
      default:
        return '#000';
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
