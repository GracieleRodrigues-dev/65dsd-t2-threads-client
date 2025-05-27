import { FaCar } from 'react-icons/fa6';
import { VehicleContainer } from './TrafficGrid.styles';

const TrafficGridVehicle = ({ vehicle, cellSize: { width, height } }) => {
  if (!vehicle) return null;

  const { color, currentPosition } = vehicle;
  const x = currentPosition?.x ?? 0;
  const y = currentPosition?.y ?? 0;

  return (
    <VehicleContainer
      style={{
        width,
        height,
        transform: `translate(${y * width}px, ${x * height}px)`
      }}>
      <FaCar color={color || 'black'} size={30} />
    </VehicleContainer>
  );
};

export default TrafficGridVehicle;
