import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  checkPartnerAvailbilityAPI,
  loginAPI,
  logoutAPI,
  authAPI,
  verifyOTPAPI,
} from "../../../api/partner/auth";

export const authUser = createAsyncThunk(
  "auth",
  async (data: any) => {
    try {
      const response = await authAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const verifyOtp: any = createAsyncThunk(
  "register",
  async (data: any) => {
    try {
      const response = await verifyOTPAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const checkPartnerAvailbility: any = createAsyncThunk(
  "checkPartnerAuthenticated",
  async () => {
    try {
      const response = await checkPartnerAvailbilityAPI();
      if (typeof response.data === "string") {
        return false;
      }
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

// not in use

export const loginUser = createAsyncThunk("login", async (data: any) => {
  try {
    const response = await loginAPI(data);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const logoutUser = createAsyncThunk("logout", async () => {
  try {
    const response = await logoutAPI();
    return response.data;
  } catch (error) {
    return error;
  }
});
