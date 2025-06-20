import { useState } from "react"

export default function Home() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleReset = () => {
        setTitle('');
        setContent('');
    }
    const handleForm = (e) => {
        e.preventDefault();
        const titleText = title.trim();
        const contentText = content.trim();
        if (titleText === '' || contentText === '') {
            alert('Please fill the data');
            return
        }
        const notesList = [...notes];
        notesList.push({title: titleText, content: contentText});
        setNotes(notesList);
        handleReset();
    }
    const viewNote = (indexOfNote) => {
        setNoteViewing(true);
        const currentNote = notes.find((_, index) => index === indexOfNote);
        setTitle(currentNote.title);
        setContent(currentNote.content);
    }
    const cancelNote = () => {
        setTitle('');
        setContent('');
        setNoteViewing(false);
    }
    const deleteNote = (indexOfNote) => {
        const updatedNotes = notes.filter((_, index) => index !== indexOfNote);
        setNotes(updatedNotes);
    }
    const [noteViewing, setNoteViewing] = useState(false);
    return (
        <div className="bg-gray-100 min-h-screen py-5">
            <form className="w-xl mx-auto text-center" onSubmit={handleForm} onReset={handleReset}>
                <div className="my-5">
                    <label htmlFor="title" className="text-xl mx-4">Set a Note Title : </label>
                    <input type="text" className={`border border-gray-500 rounded-sm ${noteViewing ? "bg-gray-200" : "bg-yellow-50"} p-2 text-lg`} value={title} onChange={(e) => setTitle(e.target.value)} disabled={noteViewing}/>
                </div>
                <div>
                    <textarea className={`w-lg h-60 border border-gray-500 rounded-sm p-2 ${noteViewing ? "bg-gray-200" : "bg-yellow-50"}`}
                        placeholder="Write down here..." value={content} onChange={(e) => setContent(e.target.value)} disabled={noteViewing}></textarea>
                </div>
                <div className="flex justify-evenly my-4">
                    <button type="submit" className={`border rounded-sm px-4 py-2 ${noteViewing ? "bg-gray-200" : "bg-blue-300"} font-bold`} disabled={noteViewing}>Save</button>
                    <div>
                        {noteViewing
                        ? <button className="border rounded-sm px-4 py-2 bg-red-300 font-bold" onClick={cancelNote}>Cancel</button>
                        : <button type="reset" className="border rounded-sm px-4 py-2 bg-red-300 font-bold">Clear</button>
                        }
                    </div>
                </div>
            </form>
            <hr className="w-2xl mx-auto my-8 text-gray-300" />
            <div className="w-lg mx-auto">
                {notes.length > 0 ? (notes.map((item, index) => (
                    <div key={index} className="p-3 my-2 bg-violet-200 rounded-sm">
                        <h2 className="mb-4 text-2xl">{item.title}</h2>
                        <div className="text-right">
                            <button className="bg-orange-300 px-3 py-1 rounded-sm" onClick={() => viewNote(index)}>View</button>
                            <button className="bg-red-600 text-white px-3 py-1 rounded-sm mx-3" onClick={() => deleteNote(index)}>Delete</button>
                        </div>
                    </div>
                ))
                ) : <p className="text-center text-xl">No Notes Yet. Add one!</p>}
            </div>
        </div>
    )
}