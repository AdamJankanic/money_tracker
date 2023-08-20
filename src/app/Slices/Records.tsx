import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: "728ed52f",
    amount: 30,
    date: "2021-09-01",
    category: "food",
    color: "#3f51b5",
    note: "Dinner at Basilico",
  },

  {
    id: "14fae579",
    amount: 20,
    date: "2021-09-02",
    category: "cinema",
    color: "#795432",
    note: "Movie night with friends",
  },

  {
    id: "a1b2c3d4",
    amount: 50,
    date: "2021-09-03",
    category: "games",
    color: "#f44336",
    note: "Bought a new game",
  },
];

type Record = {
  id: string;
  date: string;
  amount: number;
  category: string;
  color: string;
  note: string;
};

const recordSlice = createSlice({
  name: "records",
  initialState: {
    // allRecords: [] as Record[],
    allRecords: data as Record[],
    nieco: false,
  },
  reducers: {
    addRecord: (state, action: PayloadAction<Record>) => {
      state.allRecords.push(action.payload);
    },
  },
});
export const { addRecord } = recordSlice.actions;
export default recordSlice.reducer;
