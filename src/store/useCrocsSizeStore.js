import { create } from "zustand";
import { Sizes } from "../data/CrocsSizeData";

export const useCrocsSizeStore = create((set) => ({
  crocsSizes: [],
  selectedSizes: [],

  onFetchSize: () => {
    const allSizes = Array.from(new Set(Sizes.flatMap((s) => s.sizes))).sort(
      (a, b) => a - b
    );
    set({ crocsSizes: allSizes });
  },

  setSelectedSizes: (sizes) => set({ selectedSizes: sizes }),
  clearSizes: () => set({ selectedSizes: [] }),
}));
