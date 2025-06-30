import SongItem from "./SongItem";

export default function SongList({ songs, setEditingSong, deleteSong }) {
    if (songs.length === 0) {
        return <p className="text-center text-white text-lg italic">No Songs in your playlist</p>
    }
    return (
        <div>
            <ul className="w-xl mx-auto">
            {songs.length > 0 && <h2 className="text-orange-300 text-center text-2xl">Music Library</h2>}
                {songs.map((song, index) => (
                    <li key={index}>
                        <SongItem song={song} setEditingSong={setEditingSong} deleteSong={deleteSong}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}