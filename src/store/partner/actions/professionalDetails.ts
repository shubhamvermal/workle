import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProfessionalDetailsAPI, getProfessionalDetailsAPI } from "../../../api/partner/professionalDetails";

export const addProfessionalDetails: any = createAsyncThunk(
  "ProfessionalDetails",
  async (data: any) => {
    try {
      const response = await addProfessionalDetailsAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getProfessionalDetails: any = createAsyncThunk(
  "ProfessionalDetails",
  async (data: any) => {
    try {
      const response = await getProfessionalDetailsAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);