import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch('http://localhost:9001/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:9001/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/home');
        })
    }

    const handleEditClick = () => {
        history.push({
            pathname: '/create',
            search: `?id=${blog.id}`,
        });
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleEditClick}>edit</button>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;