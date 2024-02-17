import { combineReducers, configureStore } from '@reduxjs/toolkit';
import offersList from 'src/app/reducers/offers-list/offers-list-slice';

const rootReducer = combineReducers({
  offersList,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
