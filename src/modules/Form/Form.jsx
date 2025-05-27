import api from '../../services/api';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Control,
  Error,
  FormContainer,
  Input,
  Label,
  Select,
  Spacer,
  Title,
  ToggleButton,
  ToggleContainer
} from './Form.styles';
import useStore from '../../store';
import { isEmpty, uniqueId } from 'lodash';

export const Form = () => {
  const simulation = useStore(state => state.simulation);

  const resetSimulation = useStore(state => state.resetSimulation);
  const startSimulation = useStore(state => state.startSimulation);

  const [maps, setMaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm();

  const selectedMechanism = watch('exclusionMechanism');

  const onSubmit = data => {
    const {
      exclusionMechanism,
      insertionTimeInterval,
      roadMapIndex,
      numberOfVehicles
    } = data;

    const payload = {
      exclusionMechanism,
      roadMapIndex: Number(roadMapIndex),
      numberOfVehicles: Number(numberOfVehicles),
      insertionTimeInterval: Number(insertionTimeInterval)
    };

    api.startSimulation(payload).then(() => {
      startSimulation({
        ...payload,
        id: uniqueId(),
        roadMap: maps[Number(roadMapIndex)]
      });
    });
  };

  const onStop = () => {
    api.stopSimulation().then(() => {
      reset();
      resetSimulation();
    });
  };

  const onStopVehicleInsertion = () => {
    api.stopVehicleInsertion().then(() => null);
  };

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    api
      .getMaps()
      .then(data => {
        if (isMounted) {
          setMaps(data);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>Simulation Setup</Title>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !isEmpty(maps) && (
        <>
          <Control>
            <Label>Model</Label>
            <Select
              {...register('roadMapIndex', { required: 'Campo obrigatório' })}>
              <option value="">Selecione um mapa</option>
              {maps.map((_, i) => (
                <option key={i} value={i}>
                  Map {i + 1}
                </option>
              ))}
            </Select>
            {errors.map && <Error>{errors.map.message}</Error>}
          </Control>
          <Control>
            <Label>Number of vehicles</Label>
            <Input
              type="number"
              {...register('numberOfVehicles', {
                required: 'Campo obrigatório',
                min: { value: 1, message: 'Deve ser no mínimo 1' },
                max: { value: 100, message: 'Máximo de 100 veículos' }
              })}
              placeholder="Type number of vehicles"
            />
            {errors.numberOfVehicles && (
              <Error>{errors.numberOfVehicles.message}</Error>
            )}
          </Control>
          <Control>
            <Label>Insertion time interval (MS)</Label>
            <Input
              type="number"
              {...register('insertionTimeInterval', {
                required: 'Campo obrigatório',
                min: { value: 100, message: 'Mínimo 100ms' },
                max: { value: 1000, message: 'Máximo 1000ms' }
              })}
              placeholder="Type interval (MS)"
            />
            {errors.insertionTimeInterval && (
              <Error>{errors.insertionTimeInterval.message}</Error>
            )}
          </Control>
          <Control>
            <Label>Mutual exclusion mechanism</Label>
            <ToggleContainer>
              <ToggleButton
                type="button"
                isActive={selectedMechanism === 'semaphore'}
                onClick={() =>
                  setValue('exclusionMechanism', 'semaphore', {
                    shouldValidate: true
                  })
                }>
                Semaphore
              </ToggleButton>
              <ToggleButton
                type="button"
                isActive={selectedMechanism === 'monitor'}
                onClick={() =>
                  setValue('exclusionMechanism', 'monitor', {
                    shouldValidate: true
                  })
                }>
                Monitor
              </ToggleButton>
            </ToggleContainer>
            {errors.exclusionMechanism && (
              <Error>{errors.exclusionMechanism.message}</Error>
            )}
          </Control>
          <input
            type="hidden"
            {...register('exclusionMechanism', {
              required: 'Campo obrigatório'
            })}
          />
          <Spacer />
          <ButtonGroup>
            <Button type="submit" disabled={!!simulation}>
              Iniciar simulação
            </Button>
            <Button
              type="button"
              onClick={onStopVehicleInsertion}
              disabled={!simulation}>
              Encerrar inserção
            </Button>
            <Button type="button" onClick={onStop} disabled={!simulation}>
              Encerrar simulação
            </Button>
          </ButtonGroup>
        </>
      )}
    </FormContainer>
  );
};

export default Form;
