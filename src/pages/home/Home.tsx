import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton } from '@mantine/core';
import {
    fetchPostsAsync,
    selectAllPosts,
} from '../../features/posts/slice/postsSlice.ts';
import { AppDispatch, RootState } from '../../app/store.ts';
import { PostsGrid } from '../../features/posts/components/postsGrid/PostsGrid.tsx';
import classes from './Home.module.css';

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector((state: RootState) => state.posts.status);
    const error = useSelector((state: RootState) => state.posts.error);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPostsAsync());
        }
    }, [postStatus, dispatch]);

    const renderContent = () => {
        let content;
        switch (postStatus) {
            case 'loading':
                content = <Skeleton h={350} w={250} mt="sm" animate={true} />;
                break;
            case 'succeeded':
                content = <PostsGrid posts={posts} />;
                break;
            case 'failed':
                content = <>{error}</>;
                break;
            default:
                break;
        }

        return <>{content}</>;
    };

    return <div className={classes.posts}>{renderContent()}</div>;
};
