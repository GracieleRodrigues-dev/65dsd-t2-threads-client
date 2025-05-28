import useStore from 'store';
import api from 'services/api';
import { useForm } from 'react-hook-form';
import { isEmpty, uniqueId } from 'lodash';
import { useEffect, useState } from 'react';
import { TbCarOff } from 'react-icons/tb';
import {
  Button,
  ButtonGroup,
  Control,
  DevModeButton,
  Error,
  FormContainer,
  FormHeader,
  Input,
  Label,
  Select,
  Spacer,
  Title,
  ToggleButton,
  ToggleContainer
} from './Form.styles';
import {
  PiCodeDuotone,
  PiMapTrifold,
  PiPauseDuotone,
  PiPlayDuotone
} from 'react-icons/pi';

export const Form = () => {
  const {
    devMode,
    toggleDevMode,
    simulation,
    resetSimulation,
    startSimulation
  } = useStore(state => state);

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
      <FormHeader>
        <Title>Simulation Setup</Title>
        <DevModeButton type="button" onClick={toggleDevMode}>
          {!devMode ? <PiCodeDuotone size={18} /> : <PiMapTrifold size={18} />}
        </DevModeButton>
      </FormHeader>
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
            {errors.roadMapIndex && (
              <Error>{errors.roadMapIndex.message}</Error>
            )}
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
              Start
              <PiPlayDuotone />
            </Button>
            <Button
              type="button"
              onClick={onStopVehicleInsertion}
              disabled={!simulation}>
              Stop Insertion
              <TbCarOff size={28} />
            </Button>
            <Button type="button" onClick={onStop} disabled={!simulation}>
              Stop
              <PiPauseDuotone />
            </Button>
          </ButtonGroup>
        </>
      )}
    </FormContainer>
  );
};

export default Form;
