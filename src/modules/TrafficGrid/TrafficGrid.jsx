import React from 'react';
import { Table, TableCell, TableRow } from './TrafficGrid.styles';

const TrafficGrid = ({ grid }) => {
  return (
    <Table>
      <tbody>
        {grid.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, colIndex) => (
              <TableCell key={colIndex} type={cell}>
                {cell === 1 ? '🚘' : ''}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TrafficGrid;
