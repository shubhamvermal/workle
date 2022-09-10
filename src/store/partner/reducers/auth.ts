import { createSlice } from "@reduxjs/toolkit";

import { authUser, checkPartnerAvailbility } from "../actions/auth";

const initialState = {
  user: [],
  loading: true,
  isPartnerLoggedIn: false,
  // openCollapse: true,
};

// Then, handle actions in your reducers:
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeFieldError: (state: any) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(authUser.fulfilled, (state: any, action: any) => {
        if (!action.payload.success) {
          state.loading = false;
          state.isPartnerLoggedIn = false;
          state.user = action.payload;
        } else {
          state.loading = false;
          state.isPartnerLoggedIn = true;
          state.user = action.payload.data;
        }
      })
      .addCase(authUser.rejected, (state: any) => {
        state.loading = false;
        state.isPartnerLoggedIn = false;
        state.user = [];
      })
      .addCase(checkPartnerAvailbility.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(checkPartnerAvailbility.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.isPartnerLoggedIn = action.payload ? true : false;
        state.user = action.payload ? action.payload : [];
      })
      .addCase(checkPartnerAvailbility.rejected, (state: any) => {
        state.loading = false;
        state.isPartnerLoggedIn = false;
      })
  },
});

export const { removeFieldError } = auth.actions;
// export const selectCount = (state: any) => state.auth


export default auth.reducer;
