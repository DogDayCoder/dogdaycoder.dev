import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchPostsAsync,
    selectAllPosts,
} from '../../features/posts/slice/postsSlice.ts';
import { AppDispatch, RootState } from '../../app/store.ts';
import { NavigationPane } from '../../shared/components/navigationPane/NavigationPane.tsx';
import { PostList } from '../../features/posts/components/PostList.tsx';
import classes from './Home.module.css';
import { Footer } from '../../shared/components/footer/Footer.tsx';

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

    const renderPosts = () => {
        let content;
        switch (postStatus) {
            case 'loading':
                content = <>Loading...</>;
                break;
            case 'succeeded':
                content = <PostList posts={posts} />;
                break;
            case 'failed':
                content = <>{error}</>;
                break;
            case 'idle':
            default:
                break;
        }

        return <>{content}</>;
    };

    return (
        <>
            <h1>DogDayCoder | work-in-progress</h1>

            <div className={classes.container}>
                <NavigationPane className={classes.navigation} />

                <div className={classes.posts}>{renderPosts()}</div>
            </div>

            <Footer />
        </>
    );
};
