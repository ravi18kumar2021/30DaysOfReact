export default function SongItem({ song, setEditingSong, deleteSong }) {
    const coverImage = 'https://images.unsplash.com/photo-1723961617032-ef69c454cb31?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    return (
        <div className="bg-pink-400 my-2 rounded-md p-3 flex justify-around items-center">
            <div className="flex flex-col items-center w-3/8">
                <img src={song.cover ? song.cover : coverImage} alt={song.title}
                    className="size-16 rounded-full border-2" />
                <p><strong>🎤 Artists -</strong> {song.artists}</p>
            </div>
            <div className="w-4/8">
                <h3><strong>🎵 Song Title - </strong>{song.title}</h3>
                <p><strong>💿 Album - </strong>{song.album}</p>
                <p><strong>📅 Year - </strong>{song.year}</p>
                <p><strong>👥 Actors - </strong>{song.actors}</p>
            </div>
            <div className="w-1/8 flex flex-col gap-2 border-l">
                <button onClick={() => setEditingSong(song)}>✏️</button>
                <button onClick={() => deleteSong(song.id)}>❌</button>
            </div>
        </div>
    )
}