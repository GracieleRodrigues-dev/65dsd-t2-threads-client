import styled from 'styled-components';

export const Table = styled.table`
  flex: 1;
  border-collapse: collapse;
  background-color: black;
`;

export const TableRow = styled.tr``;

const getColor = options => {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

export const TableCell = styled.td`
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 20px;
  border: 2px solid black;

  background-color: ${({ type }) => {
    switch (type) {
      case 0:
        return getColor(['#155d27', '#155d27', '#1a7431']); // Grama
      case 1:
        return getColor(['#495057', '#343a40']); // Estrada Cima
      case 2:
        return getColor(['#495057', '#343a40']); // Estrada Direita
      case 3:
        return getColor(['#495057', '#343a40']); // Estrada Baixo
      case 4:
        return getColor(['#495057', '#343a40']); // Estrada Esquerda
      case 5:
        return '#f4a460'; // Cruzamento Cima
      case 6:
        return '#f4a460'; // Cruzamento Direita
      case 7:
        return '#f4a460'; // Cruzamento Baixo
      case 8:
        return '#f4a460'; // Cruzamento Esquerda
      case 9:
        return '#ffa500'; // Cruzamento Cima e Direita
      case 10:
        return '#ffa500'; // Cruzamento Cima e Esquerda
      case 11:
        return '#ffa500'; // Cruzamento Direita e Baixo
      case 12:
        return '#ffa500'; // Cruzamento Baixo e Esquerda
      default:
        return '#000';
    }
  }};

  color: ${({ type }) => (type === 0 ? '#000' : '#111')};
`;
