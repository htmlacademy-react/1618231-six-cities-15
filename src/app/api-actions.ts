import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAPI } from 'src/shared/api/apiRequest';
import { OfferType } from 'src/shared/app-types';
import { ApiActions, FetchRoutes } from 'src/shared/constans';


const api = createAPI();

export const fetchOffersList = createAsyncThunk(ApiActions.DataFetchOffers, async () => {
  const {data} = await api.get<OfferType[]>(FetchRoutes.Offers);
  return data;
});
