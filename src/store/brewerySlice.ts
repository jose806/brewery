import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import types from "../types";
import getBreweries from "../services/services/getBreweries";

const initialState: BrewerySlice = {
  breweries: [],
  isLoading: false,
};

export const fetchBreweries = createAsyncThunk(
  "get/fetchBreweries",
  async () => {
    const promise = await getBreweries();
    return promise;
  }
);

export const brewerySlice = createSlice({
  name: "brewerySlice",
  initialState,
  reducers: {
    addBrewery: (state, action: PayloadAction<types.Brewery>) => {
      const newState = [action.payload, ...state.breweries];
      return { ...state, breweries: newState };
    },
    removeSingleBrewery: (state, action: PayloadAction<string>) => {
      const filtered = state.breweries.filter(
        (single) => single.id !== action.payload
      );
      return { ...state, breweries: filtered };
    },
    editBrewery: (state, action: PayloadAction<EditPayload>) => {
      const editToggle = state.breweries.map((single) => {
        return single.id === action.payload.id
          ? { ...single, edit: action.payload.edit }
          : single;
      });
      return { ...state, breweries: editToggle };
    },
    onChangeOfName: (state, action: PayloadAction<OnChange>) => {
      const nameChange = state.breweries.map((single) =>
        single.id === action.payload.id
          ? { ...single, name: action.payload.value }
          : single
      );
      return { ...state, breweries: nameChange };
    },
    onChangeOfType: (state, action: PayloadAction<OnChange>) => {
      const typeChange = state.breweries.map((single) =>
        single.id === action.payload.id
          ? { ...single, type: action.payload.value }
          : single
      );
      return { ...state, breweries: typeChange };
    },
    onChangeOfCountry: (state, action: PayloadAction<OnChange>) => {
      const countryChange = state.breweries.map((single) =>
        single.id === action.payload.id
          ? { ...single, country: action.payload.value }
          : single
      );
      return { ...state, breweries: countryChange };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBreweries.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(
        fetchBreweries.fulfilled,
        (state, action: PayloadAction<types.Brewery[]>) => {
          return { ...state, isLoading: false, breweries: action.payload };
        }
      );
  },
});

export default brewerySlice.reducer;

export const {
  addBrewery,
  removeSingleBrewery,
  editBrewery,
  onChangeOfName,
  onChangeOfCountry,
  onChangeOfType,
} = brewerySlice.actions;

// ----- TYPES --------

type BrewerySlice = {
  breweries: types.Brewery[];
  isLoading: boolean;
};

interface EditPayload {
  id: string;
  edit: boolean;
}

interface OnChange {
  id: string;
  value: string;
}
