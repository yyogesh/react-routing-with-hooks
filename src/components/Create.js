import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('ABC');
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search);
    const id = query.get('id');

    const { data: blog, error, isPending } = useFetch('http://localhost:9001/blogs/' + id);

    console.log('URLSearchParams', blog);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:9001/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog addedd');
            history.push('/home');
        })
        console.log(blog);
    }


    console.log('author', author)
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="ABC">ABC</option>
                    <option value="XYZ">XYZ</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div >
    )
}

export default Create
