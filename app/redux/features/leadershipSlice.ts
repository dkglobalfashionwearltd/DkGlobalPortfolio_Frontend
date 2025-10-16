import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { baseUrl } from "~/components/data";

import { apiRequest } from "~/redux/data/GetData";

export type Leadership = {
  id: number;
  name: string;
  designation: string;
  email: string;
  phoneNumber: string;
  imageUrl: string;
  isActive: string;
};
interface Data {
  statusCode: number;
  success: boolean;
  message: string;
  result: Leadership[];
}
interface StateType {
  loading: boolean;
  data: Data | null;
  error: string | null;
  refresh: boolean;
  statusChange: boolean;
}
const initialState: StateType = {
  loading: false,
  data: null,
  error: null,
  refresh: false,
  statusChange: false,
};

export const getAllLeadership = createAsyncThunk(
  "leadership/getAllLeadership",
  async ({ token }: { token: string | null }, { rejectWithValue }) => {
    try {
      const res = await apiRequest(
        "get",
        `${baseUrl}/api/leadership/getall`,
        token,
        "application/json",
        {},
        null
      );
      return res;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to get leader data"
      );
    }
  }
);

export const getLeadership = createAsyncThunk(
  "leadership/getLeadership",
  async (
    { token, id }: { token: string | null; id: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await apiRequest(
        "get",
        `${baseUrl}/api/leadership/get`,
        token,
        "application/json",
        { id },
        null
      );
      return res;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to get leader data"
      );
    }
  }
);

const leadershipSlice = createSlice({
  name: "leadership",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllLeadership.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllLeadership.fulfilled,
        (state, action: PayloadAction<Data>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAllLeadership.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default leadershipSlice.reducer;
