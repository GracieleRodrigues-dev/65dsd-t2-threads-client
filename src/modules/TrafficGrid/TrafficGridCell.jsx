import { forwardRef, memo } from 'react';
import { TableCell } from './TrafficGrid.styles';
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp
} from 'react-icons/fi';

const iconByCellType = {
  1: FiArrowUp,
  2: FiArrowRight,
  3: FiArrowDown,
  4: FiArrowLeft
};

const TrafficGridCell = forwardRef(({ cell, rowIndex, colIndex }, ref) => {
  const Icon = iconByCellType[cell];

  return (
    <TableCell
      key={colIndex}
      type={cell}
      ref={rowIndex === 0 && colIndex === 0 ? ref : null}>
      {Icon ? <Icon size={20} /> : null}
    </TableCell>
  );
});

export default memo(TrafficGridCell);
