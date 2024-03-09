import { createSlice } from '@reduxjs/toolkit';
import { fetchDetailedOffer } from 'src/app/api-actions';
import { DetailedOfferType } from 'src/shared/app-types';
import { FetchStatus } from 'src/shared/constans';


type DetailedOfferState = {
  offer: DetailedOfferType ;
  status: FetchStatus;
}

const initialState: DetailedOfferState = {
  offer: {
    id: '',
    title: '',
    type: '',
    price: 0,
    city: {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0
      },
      name: '',
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1,
    description: '',
    bedrooms: 0,
    goods: [''],
    host: {
      name: '',
      avatarUrl: '',
      isPro: false
    },
    images: [''],
    maxAdults: 0,
  },
  status: FetchStatus.Idle,
};


const detailedOfferSlice = createSlice({
  name: 'detailedOffer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDetailedOffer.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchDetailedOffer.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.offer = action.payload;
      })

      .addCase(fetchDetailedOffer.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  }
});

export default detailedOfferSlice.reducer;
