import { combineReducers, configureStore } from '@reduxjs/toolkit';
import offersList from 'src/app/reducers/offers-list/offers-list-slice';
import reviewsList from 'src/app/reducers/reviews-list/reviews-list-slice';
import detailedOffer from 'src/app/reducers/detailed-offer/detailed-offer-slice';
import nearbyOffers from 'src/app/reducers/nearby-list/nearby-list-slice';

const rootReducer = combineReducers({
  offersList,
  reviewsList,
  detailedOffer,
  nearbyOffers,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
