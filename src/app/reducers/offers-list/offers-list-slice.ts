import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from 'src/shared/app-types';
import { FetchStatus } from 'src/shared/constans';


export type OffersListType = {
  offers: OfferType[];
  status: FetchStatus;
}


const initialState : OffersListType = {
  offers: [],
  status: FetchStatus.Idle,
}

const offersListSlise = createSlice({
  name: 'placesList',
  initialState,
  reducers: {},
  extraReducers: {}
});


export default offersListSlise.reducer;
