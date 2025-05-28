import { forwardRef, memo, useMemo } from 'react';
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

const TrafficGridCell = forwardRef(({ cell, devMode }, ref) => {
  const Icon = iconByCellType[cell];

  const content = useMemo(() => {
    if (devMode) {
      return cell;
    }
    if (Icon) {
      return <Icon size={20} />;
    }
    return null;
  }, [cell, devMode, Icon]);

  return (
    <TableCell type={cell} devMode={devMode} ref={ref}>
      {content}
    </TableCell>
  );
});

export default memo(TrafficGridCell);
