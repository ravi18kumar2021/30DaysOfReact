import { Link, useOutletContext } from "react-router"
import { truncateText } from "../utils/truncate";

export default function Home() {
    const { posts, setPosts } = useOutletContext();
    const deletePost = (postIndex) => {
        const updatedPosts = posts.filter(post => post.id !== postIndex);
        const response = confirm('Are you sure to delete the post?');
        if (response) setPosts(updatedPosts);
    }
    return (
        <div className="w-2xl mx-auto py-10">
            <h1 className="text-3xl text-center my-6">All Blog Posts</h1>
            <ul>
                {posts.length > 0
                    ? posts.map(post => (
                        <li key={post.id} className="bg-green-900 rounded-md my-4 p-4 flex flex-col gap-3">
                            <h2 className="text-2xl font-bold">{truncateText(post.title, 40)}</h2>
                            <p className="text-lg italic">{truncateText(post.content, 60)}</p>
                            <div className="flex justify-between">
                                <button className="bg-blue-300 text-gray-800 rounded-sm px-4 py-1">
                                    <Link to={`/blogpost/${post.id}`}>View</Link>
                                </button>
                                <div>
                                    <button className="bg-orange-300 text-gray-800 rounded-sm px-4 py-1 mx-3">
                                        <Link to={`/edit-post/${post.id}`}>Edit</Link>
                                    </button>
                                    <button className="bg-red-400 text-gray-800 rounded-sm px-4 py-1" onClick={() => deletePost(post.id)}><Link>Delete</Link></button>
                                </div>
                            </div>
                        </li>
                    ))
                    : <div>
                        <hr />
                        <p className="text-xl italic text-center my-4">Posts Not Available</p>
                    </div>
                }
            </ul>
        </div>
    )
}