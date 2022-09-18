import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPartnerPersonalDetailsAPI,
  addPartnerProfilePicAPI,
  getPersonalDetailsAPI,
} from "../../../api/partner/personalDetails";

export const addPartnerProfilePic: any = createAsyncThunk(
  "partnerPersonalDetails",
  async (data: any) => {
    try {
      const response = await addPartnerProfilePicAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const addPartnerPersonalDetails: any = createAsyncThunk(
  "partnerPersonalDetails",
  async (data: any) => {
    try {
      const response = await addPartnerPersonalDetailsAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
export const getPersonalDetails: any = createAsyncThunk(
  "partnerPersonalDetails",
  async (data: any) => {
    try {
      const response = await getPersonalDetailsAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);