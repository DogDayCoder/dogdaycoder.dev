import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppShell, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    fetchPostsAsync,
    selectAllPosts,
} from '../../features/posts/slice/postsSlice.ts';
import { AppDispatch, RootState } from '../../app/store.ts';
import { NavigationPane } from '../../shared/components/navigationPane/NavigationPane.tsx';
import { PostList } from '../../features/posts/components/PostList.tsx';
import { Footer } from '../../shared/components/footer/Footer.tsx';
import { Header } from '../../shared/components/header/Header.tsx';
import classes from './Home.module.css';

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [opened] = useDisclosure();

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
                content = <Skeleton h={350} w={250} mt="sm" animate={true} />;
                break;
            case 'succeeded':
                content = <PostList posts={posts} />;
                break;
            case 'failed':
                content = <>{error}</>;
                break;
            default:
                break;
        }

        return <>{content}</>;
    };

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 150,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            footer={{ height: 60 }}
            padding="md"
            withBorder={false}
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>

            <AppShell.Navbar>
                <NavigationPane className={classes.navigation} />
            </AppShell.Navbar>

            <AppShell.Main>
                <div className={classes.posts}>{renderPosts()}</div>
            </AppShell.Main>

            <AppShell.Footer>
                <Footer />
            </AppShell.Footer>
        </AppShell>
    );
};
