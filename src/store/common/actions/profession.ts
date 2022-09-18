import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfessionListAPI } from "../../../api/common/profession";

export const getProfessionList: any = createAsyncThunk(
  "getProfessionList",
  async (data: any) => {
    try {
      const response = await getProfessionListAPI();
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response);

      return response.data;
    } catch (error) {
      return error;
    }
  }
);
