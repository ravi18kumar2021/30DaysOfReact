import PostForm from "../components/PostForm";

export default function CreatePost() {
    return (
        <div className="w-lg mx-auto my-10 text-center">
            <h1 className="text-3xl">Write a new blogpost</h1>
            <PostForm type={"create"}/>
        </div>
    )
}