import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addPartnerPersonalDetailsAPI,
} from "../../../api/partner/personalDetails";

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
