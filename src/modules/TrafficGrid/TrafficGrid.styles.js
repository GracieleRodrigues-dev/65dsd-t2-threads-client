import styled from 'styled-components';

export const Table = styled.table`
  flex: 1;
  border-collapse: collapse;
  background-color: black;
  border: 2px solid black;
`;

export const TableRow = styled.tr``;

const getColor = options => {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

const grassColors = [
  '#4ad66d',
  '#2dc653',
  '#25a244',
  '#208b3a',
  '#155d27',
  '#10451d'
];

const roadColors = ['#495057', '#343a40'];

export const TableCell = styled.td`
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 20px;
  border: 2px solid black !important;

  background-color: ${({ type }) => {
    switch (type) {
      case 0:
        return getColor(grassColors); // Grama
      case 1:
        return getColor(roadColors); // Estrada Cima
      case 2:
        return getColor(roadColors); // Estrada Direita
      case 3:
        return getColor(roadColors); // Estrada Baixo
      case 4:
        return getColor(roadColors); // Estrada Esquerda
      case 5:
        return getColor(roadColors); // Cruzamento Cima
      case 6:
        return getColor(roadColors); // Cruzamento Direita
      case 7:
        return getColor(roadColors); // Cruzamento Baixo
      case 8:
        return getColor(roadColors); // Cruzamento Esquerda
      case 9:
        return getColor(roadColors); // Cruzamento Cima e Direita
      case 10:
        return getColor(roadColors); // Cruzamento Cima e Esquerda
      case 11:
        return getColor(roadColors); // Cruzamento Direita e Baixo
      case 12:
        return getColor(roadColors); // Cruzamento Baixo e Esquerda
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
