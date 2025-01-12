import { useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Post } from '../../types/post.ts';
import { PostArticle } from '../postArticle/PostArticle.tsx';
import classes from './PostsGrid.module.css';

export interface PostListProps {
    posts: Post[] | undefined;
}

export const PostsGrid = (props: PostListProps) => {
    const { posts } = props;
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const renderSlides = () => {
        return posts?.map((post) => (
            <PostArticle key={post.id} article={post} />
        ));
    };

    return <>{renderSlides()}</>;
};
