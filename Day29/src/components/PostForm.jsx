import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router"

export default function PostForm({type, existingPost}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {setPosts} = useOutletContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (type === 'edit' && existingPost) {
            setTitle(existingPost.title);
            setContent(existingPost.content);
        }
    }, [type, existingPost]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const titleText = title.trim();
        const contentText = content.trim();
        if (titleText === '' || contentText === '') {
            alert('Please fill out the fields');
            return
        }
        if (type === 'create') createPost(titleText, contentText);
        if (type === 'edit') updatePost(titleText, contentText);
        navigate('/');
    }
    const handleReset = () => {
        setTitle('');
        setContent('');
    }
    const createPost = (titleText, contentText) => {
        const newPost = {id: Date.now(), title: titleText, content: contentText}
        setPosts(prev => [newPost, ...prev]);
        alert('Post submitted successfully. Redirecting to homepage!');
    }
    const updatePost = (titleText, contentText) => {
        setPosts(prev => prev.map(post => (
            post.id === existingPost.id ? {...post, title: titleText, content: contentText} : post
        )));
        alert('Post updated successfully. Redirecting to homepage');
    }
    return (
        <div className="border-2 border-gray-100 rounded-md my-6 p-6 bg-green-700">
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="text-left">
                    <p className="italic">Title : </p>
                    <input type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-1 rounded-sm w-full mt-1 mb-4 p-1 text-lg"/>
                </div>
                <div className="text-left">
                    <p className="italic">Content : </p>
                    <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border-1 rounded-sm w-full mt-1 mb-4 p-1 text-lg" rows={6}></textarea>
                </div>
                <div>
                    <button className="bg-orange-400 px-4 py-1 mx-1" type="submit">{type === 'create' ? "Create" : "Update"}</button>
                    <button className="bg-red-600 px-4 py-1 mx-1" type="reset">Reset</button>
                </div>
            </form>
        </div>
    )
}