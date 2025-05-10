import React from 'react';
import { useForm } from 'react-hook-form';
import {
  FormContainer,
  Label,
  Input,
  Title,
  ToggleContainer,
  ToggleButton,
  ButtonGroup,
  Button,
  Control
} from './Form.styles';

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm();

  const selectedMechanism = watch('exclusionMechanism');

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>Configurações</Title>
      <Control>
        <Label>Quant. Veículos</Label>
        <Input
          type="number"
          {...register('quantity', { required: true })}
          placeholder="Informe a quantidade"
        />
        {errors.quantity && <Error>Obrigatório</Error>}
      </Control>
      <Control>
        <Label>Intervalo de Inserção (MS)</Label>
        <Input
          type="number"
          {...register('interval', { required: true })}
          placeholder="Informe o intervalo"
        />
        {errors.interval && <Error>Obrigatório</Error>}
      </Control>
      <Control>
        <Label>Mecanismo de exclusão mútua</Label>
        <ToggleContainer>
          <ToggleButton
            type="button"
            isActive={selectedMechanism === 'semaphore'}
            onClick={() => setValue('exclusionMechanism', 'semaphore')}>
            Semáforo
          </ToggleButton>
          <ToggleButton
            type="button"
            isActive={selectedMechanism === 'monitor'}
            onClick={() => setValue('exclusionMechanism', 'monitor')}>
            Monitor
          </ToggleButton>
        </ToggleContainer>
      </Control>
      <ButtonGroup>
        <Button type="submit">Iniciar simulação</Button>
        <Button type="button">Encerrar inserção</Button>
        <Button type="button">Encerrar simulação</Button>
      </ButtonGroup>
    </FormContainer>
  );
};

export default Form;
