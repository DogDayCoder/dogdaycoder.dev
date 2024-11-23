import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchPostsAsync,
    selectAllPosts,
} from '../features/posts/slice/postsSlice.ts';
import { AppDispatch, RootState } from '../app/store.ts';

const Blog = () => {
    const dispatch = useDispatch<AppDispatch>();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector((state: RootState) => state.posts.status);
    const error = useSelector((state: RootState) => state.posts.error);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPostsAsync());
        }
    }, [postStatus, dispatch]);

    const renderPosts = () => {
        let content;
        if (postStatus === 'loading') {
            content = <div>Loading...</div>;
        } else if (postStatus === 'succeeded') {
            content = posts?.map((post) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </article>
            ));
        } else if (postStatus === 'failed') {
            content = <div>{error}</div>;
        }

        return <div>{content}</div>;
    };

    return (
        <div>
            <h1>DogDayCoder - Blog</h1>

            <div>{renderPosts()}</div>
        </div>
    );
};

export default Blog;
