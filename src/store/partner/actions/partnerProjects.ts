import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPartnerProjectsAPI, getPartnerProjectsAPI } from "../../../api/partner/partnerProjects";

export const getPartnerProjects: any = createAsyncThunk(
  "partnerProjects",
  async (data: any) => {
    try {
      const response = await getPartnerProjectsAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const addPartnerProjects: any = createAsyncThunk(
  "partnerProjects",
  async (data: any) => {
    try {
      const response = await addPartnerProjectsAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
