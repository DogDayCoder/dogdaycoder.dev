import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchPostsAsync,
    selectAllPosts
} from '../../features/posts/slice/postsSlice.ts';
import { AppDispatch, RootState } from '../../app/store.ts';
import { NavigationPane } from '../../shared/components/navigationPane/NavigationPane.tsx';
import { PostArticle } from '../../features/posts/components/PostArticle.tsx';
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

    const renderPosts = () => {
        let content;
        if (postStatus === 'loading') {
            content = <div>Loading...</div>;
        } else if (postStatus === 'succeeded') {
            content = posts?.map((post) => (
                <PostArticle key={post.id} article={post} />
            ));
        } else if (postStatus === 'failed') {
            content = <div>{error}</div>;
        }

        return <div>{content}</div>;
    };

    return (
        <div>
            <h1>DogDayCoder | work-in-progress</h1>

            <div className={classes.container}>
                <NavigationPane className={classes.navigation} />

                <div className={classes.posts}>{renderPosts()}</div>
            </div>
        </div>
    );
};
