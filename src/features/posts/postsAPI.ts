import { Post } from '../../app/types.ts';

const DEV_URL = 'https://67423f7be464749900902939.mockapi.io';
// const LIVE_URL = "https://dogdaycoder.dev";

const BASE_ENDPOINT = '/api/v1';

export async function fetchPosts(): Promise<Post[] | undefined> {
    try {
        const query = `${DEV_URL}${BASE_ENDPOINT}/posts`;

        const response = await fetch(query);
        const responseJson = await response.json();
        
        return responseJson as Promise<Post[]>;
    } catch (error) {
        console.error(error);
    }
}

export const createPost = async () => {};
export const updatePost = async () => {};
export const deletePost = async () => {};
