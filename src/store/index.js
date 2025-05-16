import { create } from 'zustand';

const DEFAULT_VALUES = {
  simulation: null
};

const useStore = create(set => ({
  ...DEFAULT_VALUES,
  setSimulation: simulation => set({ simulation })
}));

export default useStore;
