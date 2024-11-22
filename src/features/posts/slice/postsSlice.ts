import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from '../postsAPI';
import { Post } from '../../../app/types.ts';

export interface PostsState {
    posts: Post[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error?: string | null;
}

const initialState: PostsState = {
    posts: [],
    status: 'idle',
    error: null,
};

export const fetchPostsAsync = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetchPosts();
        return response.data;
    },
);

// export const createPostAsync = createAsyncThunk(
//     'posts/createPost',
//     async (newPost) => {
//         const response = await createPost(newPost);
//         return response.data;
//     },
// );

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // fetchPosts: (state) => {
        //     state.status = 'loading';
        // },
        // createPost: (state, action: PayloadAction<number>) => {
        //     state.status = 'loading';
        // },
        // updatePost: (state) => {
        //     state.status = 'loading';
        // },
        // deletePost: (state) => {
        //     state.status = 'loading';
        // },
    },
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

// Action creators are generated for each case reducer function
// export const {} = postsSlice.actions;

export default postsSlice.reducer;
