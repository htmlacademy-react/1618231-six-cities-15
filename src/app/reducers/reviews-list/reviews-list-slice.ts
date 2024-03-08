import { createSlice } from '@reduxjs/toolkit';
import { fetchReviewsList } from 'src/app/api-actions';
import { UserReviewsType } from 'src/shared/app-types';
import { FetchStatus } from 'src/shared/constans';

type ReviewsListType = {
  reviews: UserReviewsType[];
  status: FetchStatus;
}

const initialState : ReviewsListType = {
  reviews: [],
  status: FetchStatus.Idle,
};

const reviewsListSlice = createSlice({
  name: 'rewiewsList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsList.pending, (state) => {
        state.status = FetchStatus.Pending;
      })

      .addCase(fetchReviewsList.fulfilled, (state, action) => {
        state.status = FetchStatus.Fulfilled;
        state.reviews = action.payload;
      })

      .addCase(fetchReviewsList.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      });
  },
});

export default reviewsListSlice.reducer;
