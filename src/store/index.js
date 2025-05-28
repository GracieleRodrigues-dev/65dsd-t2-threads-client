import { create } from 'zustand';

const DEFAULT_VALUES = {
  simulation: null,
  devMode: false
};

const useStore = create(set => ({
  ...DEFAULT_VALUES,
  resetSimulation: () => set(DEFAULT_VALUES),
  startSimulation: simulation => set({ simulation }),
  toggleDevMode: () => set(prev => ({ ...prev, devMode: !prev.devMode }))
}));

export default useStore;
