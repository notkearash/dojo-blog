import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('John');
    const [id, setId] = useState(0);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const blog = { title, body, author, id };
        setIsPending(true);

        fetch('http://localhost:8000/blogs/', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('blog added')
                setIsPending(false);
            })
            .catch(err => console.log(err))

        history.push('/')
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="John">John</option>
                    <option value="Jane">Jane</option>
                </select>
                <label>ID:</label>
                <input
                    type="number"
                    required
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                { !isPending && <button>Add blog</button>}
                { isPending && <button>Adding blog...</button>}
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;