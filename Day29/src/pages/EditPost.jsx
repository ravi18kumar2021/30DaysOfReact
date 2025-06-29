import { useOutletContext, useParams } from "react-router";
import PostForm from "../components/PostForm";

export default function EditPost() {
    const {posts} = useOutletContext();
    const {postId} = useParams();
    const postToEdit = posts.find(post => post.id === Number(postId));
    if (!postToEdit) return alert('Post not found');
    return (
        <div className="w-lg mx-auto my-10 text-center">
            <h1 className="text-3xl">Edit your blogpost</h1>
            <PostForm type={"edit"} existingPost={postToEdit}/>
        </div>
    )
}