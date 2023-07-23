import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiClient } from 'app/api/axios-instance';

export interface IPosts {
  posts: IPost[];
}

const initialState: IPosts = {
  posts: [],
};

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    setPostsReducer: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPostsReducer } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

let controller = new AbortController();
let signal = controller.signal;

export const fetchPosts = async (page: number, POSTS_PER_PAGE: number = 10) => {
  controller.abort();
  controller = new AbortController();
  signal = controller.signal;

  const { data } = await apiClient.get<IPost[]>(
    `${process.env.API_URL}posts?_limit=${POSTS_PER_PAGE}&_start=${
      page * POSTS_PER_PAGE - 10
    }`,
  );

  return data;
};
