import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from 'src/shared/app-types';
import { FetchStatus } from 'src/shared/constans';

type FavoritesListState = {
  favoritesOffers: OfferType[];
  status: FetchStatus;
};

const initialState: FavoritesListState = {
  favoritesOffers: [],
  status: FetchStatus.Idle,
};


const favoritesListSlice = createSlice({
  name: 'favoritesList',
  initialState,
  reducers: {},
  extraReducers(builder) {

  }
});


export default favoritesListSlice.reducer;
