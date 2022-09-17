import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCatagoryListAPI } from "../../../api/common/catagory";

export const getCatagoryList: any = createAsyncThunk(
  "getCatagoryList",
  async (data: any) => {
    try {
      const response = await getCatagoryListAPI();
      console.log("🚀 ~ file: auth.ts ~ line 23 ~ response", response);

      return response.data;
    } catch (error) {
      return error;
    }
  }
);
