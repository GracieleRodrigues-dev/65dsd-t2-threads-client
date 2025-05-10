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
  Control,
  Spacer,
  Select
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
      <Title>Simulation Setup</Title>
      <Control>
        <Label>Model</Label>
        <Select>
          <option>Modelo 1</option>
          <option>Modelo 2</option>
        </Select>
        {errors.interval && <Error>Obrigatório</Error>}
      </Control>
      <Control>
        <Label>Number of vehicles</Label>
        <Input
          type="number"
          {...register('quantity', { required: true })}
          placeholder="Type number of vehicles"
        />
        {errors.quantity && <Error>Obrigatório</Error>}
      </Control>
      <Control>
        <Label>Insertion time interval (MS)</Label>
        <Input
          type="number"
          {...register('interval', { required: true })}
          placeholder="Type interval (MS)"
        />
        {errors.interval && <Error>Obrigatório</Error>}
      </Control>
      <Control>
        <Label>Mutual exclusion mechanism</Label>
        <ToggleContainer>
          <ToggleButton
            type="button"
            isActive={selectedMechanism === 'semaphore'}
            onClick={() => setValue('exclusionMechanism', 'semaphore')}>
            Semaphore
          </ToggleButton>
          <ToggleButton
            type="button"
            isActive={selectedMechanism === 'monitor'}
            onClick={() => setValue('exclusionMechanism', 'monitor')}>
            Monitor
          </ToggleButton>
        </ToggleContainer>
      </Control>
      <Spacer />
      <ButtonGroup>
        <Button type="submit">Iniciar simulação</Button>
        <Button type="button">Encerrar inserção</Button>
        <Button type="button">Encerrar simulação</Button>
      </ButtonGroup>
    </FormContainer>
  );
};

export default Form;
