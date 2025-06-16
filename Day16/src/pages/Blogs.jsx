import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    async function getPosts() {
        setLoading(true);
        setError('');
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        try {
            const response = await fetch(URL);
            if (!response) throw new Error("Network Issue");
            const data = await response.json();
            setPosts(data.splice(0, 10));
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getPosts();
    }, []);
    return (
        <div>
            <h1 className="text-5xl my-4">Blogs List</h1>
            <div>
                {posts.length > 0 && posts.map((post, index) => (
                    <div key={index}
                        className="border-1 my-3 p-3 bg-gray-400 rounded-lg">
                        <h2 className="text-xl my-3">{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`../blog/${post.id}`}><button className="border-2 py-1 px-4 my-3 bg-blue-300">View</button></Link>
                    </div>
                ))}
                {loading && (
                    <div className="w-24 h-24 rounded-full border-8 border-orange-300 border-t-transparent animate-spin mx-auto"></div>
                )}
                {error && (
                    <p className="text-lg w-sm mx-auto bg-red-600 text-white">{error}</p>
                )}
            </div>
        </div>
    )
}