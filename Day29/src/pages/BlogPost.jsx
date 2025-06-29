import { Link, useOutletContext, useParams } from "react-router"
import { truncateText } from "../utils/truncate";

export default function BlogPost() {
    const {postId} = useParams();
    const {posts} = useOutletContext();
    const currentPost = posts.find(post => post.id === Number(postId));
    if (!currentPost) return alert('No post found');
    const recommendPosts = posts.filter(post => post.id !== Number(postId))
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
    return (
        <div className="w-2xl mx-auto py-10">
            <h1 className="text-3xl text-center my-6 text-green-400">{currentPost.title}</h1>
            <p className="text-xl italic border-2 border-gray-300 bg-yellow-800 p-3 rounded-md">{currentPost.content}</p>
            <hr className="my-4"/>
            <h2 className="text-2xl text-center text-green-400">Recommended Posts</h2>
            <div className="grid grid-cols-2 py-4 gap-3">
                {recommendPosts.map((post, index) => (
                    <div key={index} className="border-1 border-gray-200 bg-yellow-800 p-2 rounded-md">
                        <h3 className="text-xl text-blue-300">
                            <Link to={`/blogpost/${post.id}`}>{truncateText(post.title, 20)}</Link>
                        </h3>
                        <hr className="my-2"/>
                        <p>{truncateText(post.content, 100)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}