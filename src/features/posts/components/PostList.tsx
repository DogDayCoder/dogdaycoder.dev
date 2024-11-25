import { Post } from '../types/post.ts';
import { PostArticle } from './PostArticle.tsx';

export interface PostListProps {
    posts: Post[] | undefined;
}

export const PostList = (props: PostListProps) => {
    const { posts } = props;

    return (
        <>
            {posts?.map((post) => <PostArticle key={post.id} article={post} />)}
        </>
    );
};
