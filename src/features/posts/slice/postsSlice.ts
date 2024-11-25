import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store.ts';
import { Post } from '../types/post.ts';
import { fetchPosts } from '../api/postsAPI.ts';

export interface PostsState {
    posts: Post[] | undefined;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string | undefined;
}

const initialState: PostsState = {
    posts: [],
    status: 'idle',
    error: undefined,
};

export const fetchPostsAsync = createAsyncThunk(
    'posts/fetchPosts',
    async () => (await fetchPosts()) as Post[],
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPostsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPostsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
