import { create } from 'zustand';

const DEFAULT_VALUES = {
  simulation: null
};

const useStore = create(set => ({
  ...DEFAULT_VALUES,
  resetSimulation: () => set(DEFAULT_VALUES),
  startSimulation: simulation => set({ simulation })
}));

export default useStore;
