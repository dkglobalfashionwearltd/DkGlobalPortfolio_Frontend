import { configureStore } from "@reduxjs/toolkit";
import leadershipReducer from "../features/leadershipSlice";
import companyInfoReducer from "../features/companyInfoSlice";
import blogReducer from "../features/blogSlice";
import ProfileImagesReducer from "../features/ProfileImageSlice";
export const store = configureStore({
  reducer: {
    leader: leadershipReducer,
    companyInfo: companyInfoReducer,
    blog: blogReducer,
    profile_images: ProfileImagesReducer,
  },
});
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
