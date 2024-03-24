import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthStatus } from 'src/app/api-actions';
import { UserType } from 'src/shared/app-types';
import { AutorizationStatus } from 'src/shared/constans';


export type UserState = {
  status: AutorizationStatus;
  user: UserType;
}

const initialState: UserState = {
  status: AutorizationStatus.Unkhown,
  user: {
    name: '',
    avatarUrl: '',
    isPro: false,
    email: '',
    token: '',
  }
};

const userSlice = createSlice({
  name: 'authStatus',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthStatus.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      .addCase(fetchAuthStatus.rejected, (state) => {
        state.status = AutorizationStatus.NoAuth;
      });
  },
});

export default userSlice.reducer;
