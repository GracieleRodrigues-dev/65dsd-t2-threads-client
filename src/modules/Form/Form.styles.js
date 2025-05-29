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

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DevModeButton = styled.button`
  appearance: none;
  border: 1px solid black;
  background-color: white;
  width: 30px;
  height: 20px;
  cursor: pointer;
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

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid #000;
  background: #fff;
  font-family: inherit;

  &:disabled {
    cursor: not-allowed;
  }
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

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 5px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: 2px solid #000;
  background: #fff;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
  gap: 5px;
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
