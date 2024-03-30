import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from 'src/shared/api/token';
import { AuthData, DetailedOfferType, OfferType, UserReviewsType, UserType } from 'src/shared/app-types';
import { ApiActions, FetchRoutes } from 'src/shared/constans';


export const fetchOffersList = createAsyncThunk<OfferType[], void, {extra: AxiosInstance}>(ApiActions.DataFetchOffers, async (_arg, {extra: api}) => {
  const { data } = await api.get<OfferType[]>(FetchRoutes.Offers);
  return data;
});

export const fetchReviewsList = createAsyncThunk<UserReviewsType[], string, {extra: AxiosInstance}>(ApiActions.DataFetchReviews, async (offerId: string, {extra: api}) => {
  const { data } = await api.get<UserReviewsType[]>(`${FetchRoutes.Comments}/${offerId}`);
  return data;
});

export const fetchDetailedOffer = createAsyncThunk<DetailedOfferType, string, {extra: AxiosInstance}>(ApiActions.DataFetchDetailedOffer, async (offerId: string, {extra: api}) => {
  const { data } = await api.get<DetailedOfferType>(`${FetchRoutes.Offers}/${offerId}`);
  return data;
});

export const fetchNearbyOffers = createAsyncThunk<OfferType[], string, {extra: AxiosInstance}>(ApiActions.DataFetchNearbyOffers, async (offerId: string, {extra: api}) => {
  const { data } = await api.get<OfferType[]>(`${FetchRoutes.Offers}/${offerId}/${FetchRoutes.Nearby}`);
  return data;
});

export const fetchAuthStatus = createAsyncThunk<UserType, void, {extra: AxiosInstance}>(ApiActions.AuthFetchStatus, async (_arg, {extra: api}) => {
  const { data } = await api.get<UserType>(FetchRoutes.Login);
  return data;
});

export const fetchUserLogin = createAsyncThunk<UserType, AuthData, {extra: AxiosInstance}>(ApiActions.UserFetchLogin, async (loginData, {extra: api}) => {
  const {data} = await api.post<UserType>(FetchRoutes.Login, loginData);
  saveToken(data.token);
  return data;
});

export const fetchUserLogout = createAsyncThunk<void, void, {extra: AxiosInstance}>(ApiActions.UserFetchLogout, async(_arg, {extra: api}) => {
  const response = await api.delete(FetchRoutes.Logout);
  dropToken();
});
