import { Post } from '../../types/post.ts';
import { PostArticle } from '../postArticle/PostArticle.tsx';

export interface PostListProps {
    posts: Post[] | undefined;
}

export const PostsGrid = (props: PostListProps) => {
    const { posts } = props;

    const renderSlides = () => {
        return posts?.map((post) => (
            <PostArticle key={post.id} article={post} />
        ));
    };

    return <>{renderSlides()}</>;
};
