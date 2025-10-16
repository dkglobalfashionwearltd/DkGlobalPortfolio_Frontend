import { configureStore } from "@reduxjs/toolkit";
import leadershipReducer from "../features/leadershipSlice";
import companyInfoReducer from "../features/companyInfoSlice";
export const store = configureStore({
  reducer: {
    leader: leadershipReducer,
    companyInfo: companyInfoReducer,
  },
});
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
