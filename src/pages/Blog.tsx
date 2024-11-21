import postList from '../data/postList.json';

const Blog = () => {
    return (
        <div>
            <h1>DogDayCoder - Blog</h1>

            <div>
                {postList.post.map((post) => (
                    <div>{post.title}</div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
