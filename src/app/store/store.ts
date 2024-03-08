import { combineReducers, configureStore } from '@reduxjs/toolkit';
import offersList from 'src/app/reducers/offers-list/offers-list-slice';
import reviewsList from 'src/app/reducers/reviews-list/reviews-list-slice';

const rootReducer = combineReducers({
  offersList,
  reviewsList,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
