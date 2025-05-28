import useStore from 'store';
import { createVehicle } from 'utils';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useMeasure } from '@uidotdev/usehooks';
import TrafficGridCell from './TrafficGridCell';
import TrafficGridVehicle from './TrafficGridVehicle';
import {
  Container,
  NoData,
  NoDataDescription,
  Table,
  TableRow
} from './TrafficGrid.styles';

const TrafficGrid = () => {
  const devMode = useStore(state => state.devMode);
  const roadMap = useStore(state => state.simulation?.roadMap);
  const [vehicles, setVehicles] = useState([]);

  const [ref, { width, height }] = useMeasure();

  useEffect(() => {
    const URL = 'http://localhost:8080/traffic/stream';
    const eventSource = new EventSource(URL);

    eventSource.addEventListener('vehicle-update', event => {
      try {
        const data = JSON.parse(event.data);

        setVehicles(prev => {
          const isExists = prev.find(vehicle => vehicle.id === data.id);
          if (isExists) {
            return prev.map(vehicle =>
              vehicle.id === data.id
                ? {
                    ...vehicle,
                    active: data.active,
                    currentPosition: data.currentPosition
                  }
                : vehicle
            );
          }

          const newVehicle = createVehicle(data);
          return [...prev, newVehicle];
        });
      } catch (err) {
        console.error('Erro ao processar evento', err);
      }
    });

    eventSource.onerror = err => {
      console.error('Erro na conexão SSE', err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    const inactive = vehicles?.find(vehicle => !vehicle.active);

    if (inactive) {
      setTimeout(
        () =>
          setVehicles(prev =>
            prev.filter(vehicle => vehicle.id !== inactive.id)
          ),
        inactive.speed
      );
    }
  }, [vehicles]);

  if (isEmpty(roadMap)) {
    return (
      <NoData>
        <NoDataDescription>Configure a simulação</NoDataDescription>
      </NoData>
    );
  }

  return (
    <Container>
      <Table>
        <tbody>
          {roadMap.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, colIndex) => (
                <TrafficGridCell
                  cell={cell}
                  devMode={devMode}
                  rowIndex={rowIndex}
                  colIndex={colIndex}
                  key={`vehicle-${rowIndex}-${colIndex}`}
                  ref={rowIndex === 0 && colIndex === 0 ? ref : null}
                />
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
      {vehicles.map(vehicle => (
        <TrafficGridVehicle
          key={vehicle.id}
          vehicle={vehicle}
          cellSize={{ width, height }}
        />
      ))}
    </Container>
  );
};

export default TrafficGrid;
