import axios from 'axios';

const PORT = 8080;

const http = axios.create({
  baseURL: `http://localhost:${PORT}/api`
});

const getMaps = () => {
  const url = `/map/maps`;
  return http
    .get(url)
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
};

const startSimulation = body => {
  const url = `/simulation/start`;
  return http
    .post(url, body)
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
};

const stopSimulation = () => {
  const url = `/simulation/stop`;
  return http
    .post(url)
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
};

const stopVehicleInsertion = () => {
  const url = `/simulation/insertion/stop`;
  return http
    .post(url)
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
};

export default {
  getMaps,
  startSimulation,
  stopSimulation,
  stopVehicleInsertion
};
