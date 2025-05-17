import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 300px;
  border: 2px solid #000;
  padding: 10px;
  font-family: 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-right: 6px solid black;
  border-bottom: 6px solid black;
`;

export const Title = styled.legend`
  font-weight: bold;
  font-size: 16px;
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid #000;
  background: #fff;
  font-family: inherit;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid #000;
  background: #fff;
  font-family: inherit;
`;

export const Error = styled.span`
  color: red;
  font-size: 11px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  margin-top: 0px;
`;

export const ToggleButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: 2px solid #000;
  font-family: inherit;
  background-color: ${({ isActive }) => (isActive ? '#000' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  cursor: pointer;

  &:first-child {
    border-right: none;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border: 2px solid #000;
  background: #fff;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background: #000;
    color: #fff;
  }

  &:disabled {
    pointer-events: none;
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;
