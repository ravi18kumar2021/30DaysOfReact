import { useEffect, useRef, useState } from "react"

export default function SongForm({addSong, editingSong, updateSong, setEditingSong}) {
    const [title, setTitle] = useState('');
    const [artists, setArtists] = useState('');
    const [album, setAlbum] = useState('');
    const [actors, setActors] = useState('');
    const [year, setYear] = useState('');
    const [cover, setCover] = useState('');

    const titleInput = useRef(null);
    const artistsInput = useRef(null);
    const albumInput = useRef(null);
    const actorsInput = useRef(null);
    const yearInput = useRef(null);

    const [titleError, setTitleError] = useState(false);
    const [artistsError, setArtistsError] = useState(false);
    const [albumError, setAlbumError] = useState(false);
    const [actorsError, setActorsError] = useState(false);
    const [yearError, setYearError] = useState(false);

    useEffect(() => {
        if (editingSong) {
            setTitle(editingSong.title);
            setArtists(editingSong.artists);
            setAlbum(editingSong.album);
            setActors(editingSong.actors);
            setYear(editingSong.year);
            setCover(editingSong.cover || '');
        }
    }, [editingSong]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const songData = {
            id: editingSong?.id || Date.now(),
            title: title.trim(),
            artists: artists.trim(),
            album: album.trim(),
            actors: actors.trim(),
            year: year.trim(),
            cover: cover.trim()
        };
        const checked = validateInputs(songData.title, songData.artists, songData.album, songData.actors, songData.year);
        if (!checked) return
        if (editingSong) {
            updateSong(songData);
        } else {
            addSong(songData);
        }
        handleReset();
    }
    const validateInputs = (titleText, artistsText, albumText, actorsText, yearText) => {
        let isValid = true;
        if (yearText === '') {
            yearInput.current.focus();
            setYearError(true);
            isValid = false;
        } else {
            yearInput.current.blur();
            setYearError(false);
        }
        if (actorsText === '') {
            actorsInput.current.focus();
            setActorsError(true);
            isValid = false;
        } else {
            actorsInput.current.blur();
            setActorsError(false);
        }
        if (albumText === '') {
            albumInput.current.focus();
            setAlbumError(true);
            isValid = false;
        } else {
            albumInput.current.blur();
            setAlbumError(false);
        }
        if (artistsText === '') {
            artistsInput.current.focus();
            setArtistsError(true);
            isValid = false;
        } else {
            artistsInput.current.blur();
            setArtistsError(false);
        }
        if (titleText === '') {
            titleInput.current.focus();
            setTitleError(true);
            isValid = false;
        } else {
            titleInput.current.blur();
            setTitleError(false);
        }
        return isValid;
    }
    const handleReset = () => {
        setTitle('');
        setArtists('');
        setAlbum('');
        setActors('');
        setYear('');
        setCover('');
        setEditingSong(null);
    }
    return (
        <div className="w-xl mx-auto text-white py-6">
            <h2 className="text-3xl my-10">
                {editingSong
                ?
                "Edit Song Info"
                :
                "Add a Song in your Music Library"
                }
            </h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="grid grid-cols-2 gap-4">
                    <input className={`border rounded-sm text-lg p-1 ${titleError ? "border-red-700 outline-red-700 placeholder-red-700" : ""}`} 
                    type="text" placeholder={titleError ? "Enter a Song Title" : "Song Title"}
                    value={title} onChange={(e) => {
                        setTitle(e.target.value);
                        if (titleError) setTitleError(false);
                    }} 
                    ref={titleInput}/>
                    <input className={`border rounded-sm text-lg p-1 ${artistsError ? "border-red-700 outline-red-700 placeholder-red-700" : ""}`} 
                    type="text" placeholder={artistsError ? "Enter Song Artists" : "Song Artists"}
                    value={artists} onChange={(e) => {
                        setArtists(e.target.value);
                        if (artistsError) setArtistsError(false);
                    }} ref={artistsInput}/>
                    <input className={`border rounded-sm text-lg p-1 ${albumError ? "border-red-700 outline-red-700 placeholder-red-700" : ""}`} 
                    type="text" placeholder={albumError ? "Enter a Song Album" : "Song Album"}
                    value={album} onChange={(e) => {
                        setAlbum(e.target.value);
                        if (albumError) setAlbumError(false);
                    }} ref={albumInput}/>
                    <input className={`border rounded-sm text-lg p-1 ${actorsError ? "border-red-700 outline-red-700 placeholder-red-700" : ""}`} 
                    type="text" placeholder={actorsError ? "Enter Album Actors" : "Album Actors"}
                    value={actors} onChange={(e) => {
                        setActors(e.target.value);
                        if (actorsError) setActorsError(false);
                    }} ref={actorsInput}/>
                    <input className={`border rounded-sm text-lg p-1 ${yearError ? "border-red-700 outline-red-700 placeholder-red-700" : ""}`} 
                    type="text" placeholder={yearError ? "Enter Album Year" : "Album Year"}
                    value={year} onChange={(e) => {
                        setYear(e.target.value);
                        if (yearError) setYearError(false);
                    }} ref={yearInput}/>
                    <input className="border rounded-sm text-lg p-1" type="text" placeholder="Cover Image URL (optional)" value={cover} onChange={(e) => setCover(e.target.value)}/>
                </div>
                <div className="my-4">
                    <input type="submit" value={editingSong ? "Update" : "Add"} className="bg-blue-600 px-5 py-1 rounded-sm"/>
                    <input type="reset" value={editingSong ? "Cancel" : "Clear"} className="bg-red-600 px-5 py-1 rounded-sm ml-4"/>
                </div>
            </form>
            <hr />
        </div>
    )
}