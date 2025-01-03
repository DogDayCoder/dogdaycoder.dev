import { useMantineTheme } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Post } from '../../types/post.ts';
import { PostArticle } from '../postArticle/PostArticle.tsx';

export interface PostListProps {
    posts: Post[] | undefined;
}

export const PostsGrid = (props: PostListProps) => {
    const { posts } = props;
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const renderSlides = () => {
        return posts?.map((post) => (
            <Carousel.Slide key={post.title}>
                <PostArticle key={post.id} article={post} />
            </Carousel.Slide>
        ));
    };

    return (
        <Carousel
            slideSize={{ base: '100%', sm: '50%' }}
            slideGap={{ base: 2, sm: 'xl' }}
            align="start"
            withIndicators
            loop
            slidesToScroll={mobile ? 1 : 2}
        >
            {renderSlides()}
        </Carousel>
    );
};
