import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function BlogPost() {
    const [post, setPost] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const { postId } = useParams();
    async function getBlogPost() {
        setLoading(true);
        setError('');
        const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        try {
            const response = await fetch(URL);
            if (!response) throw new Error('Network Issue');
            const data = await response.json();
            setPost(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getBlogPost();
    }, []);
    return (
        <div>
            <h1 className="text-3xl my-4">Blog Post Page</h1>
            {post && (
                <div className="w-lg mx-auto">
                    <h2 className="text-2xl my-3 text-orange-200">{post.title}</h2>
                    <p className="text-green-300">{post.body}</p>
                </div>
            )}
            {loading && (
                <div className="w-24 h-24 rounded-full border-8 border-orange-300 border-t-transparent animate-spin mx-auto"></div>
            )}
            {error && (
                <p className="text-lg w-sm mx-auto bg-red-600 text-white">{error}</p>
            )}
        </div>
    )
}