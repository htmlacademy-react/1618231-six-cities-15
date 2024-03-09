import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAPI } from 'src/shared/api/apiRequest';
import { DetailedOfferType, OfferType, UserReviewsType } from 'src/shared/app-types';
import { ApiActions, FetchRoutes } from 'src/shared/constans';


const api = createAPI();

export const fetchOffersList = createAsyncThunk(ApiActions.DataFetchOffers, async () => {
  const {data} = await api.get<OfferType[]>(FetchRoutes.Offers);
  return data;
});

export const fetchReviewsList = createAsyncThunk(ApiActions.DataFetchReviews, async (offerId : string) => {
  const { data } = await api.get<UserReviewsType[]>(`${FetchRoutes.Comments}/${offerId}`);
  return data;
});

export const fetchDetailedOffer = createAsyncThunk(ApiActions.DataFetchDetailedOffer, async (offerId: string) => {
  const { data } = await api.get<DetailedOfferType>(`${FetchRoutes.Offers}/${offerId}`);
  return data;
});

export const fetchNearbyOffers = createAsyncThunk(ApiActions.DataFetchNearbyOffers, async (offerId: string) => {
  const { data } = await api.get<OfferType[]>(`${FetchRoutes.Offers}/${offerId}/${FetchRoutes.Nearby}`);
  return data;
});

