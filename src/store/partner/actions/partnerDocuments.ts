import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPartnerDocumentsAPI, getPartnerDocumentsAPI } from "../../../api/partner/partnerDocuments";

export const addPartnerDocuments: any = createAsyncThunk(
  "partnerDocuments",
  async (data: any) => {
    try {
      const response = await addPartnerDocumentsAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getPartnerDocuments: any = createAsyncThunk(
  "partnerDocuments",
  async (data: any) => {
    try {
      const response = await getPartnerDocumentsAPI(data);
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response)
      
      return response.data;
    } catch (error) {
      return error;
    }
  }
);