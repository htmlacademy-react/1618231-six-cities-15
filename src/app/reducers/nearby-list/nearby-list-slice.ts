import { createSlice } from '@reduxjs/toolkit';
import { fetchNearbyOffers } from 'src/app/api-actions';
import { OfferType } from 'src/shared/app-types';
import { FetchStatus } from 'src/shared/constans';

type NearbyListState = {
  nearbyOffers: OfferType[];
  status: FetchStatus;
}

const initialState: NearbyListState = {
  nearbyOffers: [],
  status: FetchStatus.Idle,
};

const nearbyListSlice = createSlice({
  name: 'nearbyList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.nearbyOffers = action.payload;
      })

      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  }

});


export default nearbyListSlice.reducer;
