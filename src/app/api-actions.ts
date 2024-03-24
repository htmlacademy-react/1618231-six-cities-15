import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { createAPI } from 'src/shared/api/apiRequest';
import { AuthData, DetailedOfferType, OfferType, UserReviewsType, UserType } from 'src/shared/app-types';
import { ApiActions, FetchRoutes } from 'src/shared/constans';


const api = createAPI();

export const fetchOffersList = createAsyncThunk(ApiActions.DataFetchOffers, async () => {
  const { data } = await api.get<OfferType[]>(FetchRoutes.Offers);
  return data;
});

export const fetchReviewsList = createAsyncThunk(ApiActions.DataFetchReviews, async (offerId: string) => {
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

export const fetchAuthStatus = createAsyncThunk(ApiActions.AuthFetchStatus, async () => {
  try {
    const { data } = await api.get<UserType>(FetchRoutes.Login);
    return data;
  } catch {
    const {error} = Response;
    console.log(error());
  }
});

// export const fetchUserLogin = createAsyncThunk<void, AuthData>(ApiActions.UserFetchLogin, async (loginData) => {
//   const {data} = await api.post<UserType>(FetchRoutes.Login, loginData);
//   return data;
// })
