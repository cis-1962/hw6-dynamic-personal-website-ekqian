import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

type Post = {
  id: number;
  title: string;
  img: string;
  desc: string;
};

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [] as Post[],
  },
  reducers: {
    addPost: (state, action) => {
      const { id, title, img, desc } = action.payload as Post;
      state.posts = [...state.posts, { id, title, img, desc }];
    },
    modifyPost: (state, action) => {
      const { id, title, img, desc } = action.payload as Post;
      state.posts = state.posts.map((post) => {
        if (post.id === id) {
          return { id, title, img, desc };
        }
        return post;
      });
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const selectPosts = (state: RootState) => state.posts.posts;

export const { addPost, modifyPost, removePost } = postSlice.actions;
export default postSlice.reducer;
