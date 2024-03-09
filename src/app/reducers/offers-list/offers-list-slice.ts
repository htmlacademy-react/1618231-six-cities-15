import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersList } from 'src/app/api-actions';
import { OfferType } from 'src/shared/app-types';
import { FetchStatus } from 'src/shared/constans';


export type OffersListState = {
  offers: OfferType[];
  status: FetchStatus;
}


const initialState : OffersListState = {
  offers: [],
  status: FetchStatus.Idle,
};

const offersListSlise = createSlice({
  name: 'placesList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersList.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchOffersList.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.offers = action.payload;
      })

      .addCase(fetchOffersList.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});


export default offersListSlise.reducer;
