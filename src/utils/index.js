import randomColor from 'randomcolor';

export const createVehicle = data => ({
  ...data,
  color: randomColor({ luminosity: 'light' })
});
