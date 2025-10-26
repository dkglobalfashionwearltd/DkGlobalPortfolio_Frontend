import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { baseUrl } from "~/components/data";

import { apiRequest } from "~/redux/data/GetData";

export type ProductCategory = {
  id: number;
  name: string;
  description: string;
  link: string;
  icon: string;
  isActive: string;
};
interface CategoryData {
  statusCode: number;
  success: boolean;
  message: string;
  result: ProductCategory[];
}

interface StateType {
  loading: boolean;
  categoryData: CategoryData | null;
  error: string | null;
  refresh: boolean;
  statusChange: boolean;
}
const initialState: StateType = {
  loading: true,
  categoryData: null,
  error: null,
  refresh: false,
  statusChange: false,
};

export const getAllProductCategory = createAsyncThunk(
  "product-category/getAllProductCategory",
  async ({ token }: { token: string | null }, { rejectWithValue }) => {
    try {
      const res = await apiRequest(
        "get",
        `${baseUrl}/api/products/category/getall`,
        token,
        "application/json",
        {},
        null
      );
      return res;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to get product-category data"
      );
    }
  }
);

export const getProductCategory = createAsyncThunk(
  "product-category/getProductCategory",
  async (
    { token, id }: { token: string | null; id: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await apiRequest(
        "get",
        `${baseUrl}/api/products/category/get`,
        token,
        "application/json",
        { id },
        null
      );
      return res;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to get product-category data"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllProductCategory.fulfilled,
        (state, action: PayloadAction<CategoryData>) => {
          state.loading = false;
          state.categoryData = action.payload;
        }
      )
      .addCase(getAllProductCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
