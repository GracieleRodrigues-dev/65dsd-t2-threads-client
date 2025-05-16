import React, { useState } from 'react';
import {
  NoData,
  NoDataDescription,
  Table,
  TableCell,
  TableRow
} from './TrafficGrid.styles';
import useStore from '../../store';

const defaultVehicles = [
  { id: 1, x: 8, y: 24 },
  { id: 2, x: 8, y: 23 }
];

const TrafficGrid = () => {
  const simulation = useStore(state => state.simulation);

  const [vehicles, setVehicles] = useState([...defaultVehicles]);

  // useEffect(() => {
  //   const eventSource = new EventSource('http://localhost:8080/traffic/stream');

  //   eventSource.addEventListener('vehicle-update', event => {
  //     try {
  //       const data = JSON.parse(event.data);
  //       setVehicles(prev => {
  //         return [...prev, data];
  //       });
  //     } catch (err) {
  //       console.error('Erro ao processar evento', err);
  //     }
  //   });

  //   eventSource.onerror = err => {
  //     console.error('Erro na conexão SSE', err);
  //     eventSource.close();
  //   };

  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  const hasVehicle = (x, y) =>
    vehicles.find(vehicle => vehicle.x === x && vehicle.y === y);

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
                {hasVehicle(colIndex, rowIndex) ? '🚘' : ''}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TrafficGrid;
