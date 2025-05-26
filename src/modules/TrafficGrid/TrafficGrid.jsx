import useStore from '../../store';
import React, { useEffect, useState } from 'react';
import {
  NoData,
  NoDataDescription,
  Table,
  TableCell,
  TableRow
} from './TrafficGrid.styles';

const TrafficGrid = () => {
  const simulation = useStore(state => state.simulation);

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:8080/traffic/stream';
    const eventSource = new EventSource(URL);

    eventSource.addEventListener('vehicle-update', event => {
      try {
        const data = JSON.parse(event.data);
        console.log('Evento recebido', data);

        setVehicles(prev => {
          const isExists = prev.find(vehicle => vehicle.id === data.id);

          if (isExists) {
            return prev.map(vehicle => {
              if (vehicle.id === data.id) {
                return {
                  ...vehicle,
                  active: data.active,
                  currentPosition: data.currentPosition
                };
              }
              return vehicle;
            });
          }

          return [...prev, data];
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

  const hasVehicle = (x, y) =>
    vehicles?.find(
      vehicle =>
        vehicle?.currentPosition?.x === x && vehicle?.currentPosition?.y === y
    );

  useEffect(() => {
    const inactive = vehicles?.find(vehicle => !vehicle.active);
    if (inactive) {
      setVehicles(prev => prev.filter(vehicle => vehicle.id !== inactive.id));
    }
  }, [vehicles]);

  if (!simulation) {
    return (
      <NoData>
        <NoDataDescription>Configure a simulação</NoDataDescription>
      </NoData>
    );
  }

  return (
    <Table>
      <tbody>
        {simulation.roadMap.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, colIndex) => (
              <TableCell key={colIndex} type={cell}>
                {hasVehicle(rowIndex, colIndex) ? '🚘' : ' '}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TrafficGrid;
