// import postList from '../data/postList.json';

import { useEffect, useState } from 'react';
import { Post } from '../app/types.ts';
import { fetchPosts } from '../features/posts/postsAPI.ts';

const Blog = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<Post[] | undefined>(undefined);

    const fetchPostsData = async () => {
        const data = await fetchPosts();
        setLoading(false);
        setPosts(data);
        debugger;
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            await fetchPostsData();
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            <h1>DogDayCoder - Blog</h1>

            {loading && <div>loading...</div>}

            <div>{posts?.map((post) => <div>{post.title}</div>)}</div>
        </div>
    );
};

export default Blog;
