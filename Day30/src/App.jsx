import { useEffect, useState } from 'react'
import './App.css'
import SongForm from './components/SongForm'
import SongList from './components/SongList'

function App() {
  const [songs, setSongs] = useState(() => {
    const saved = localStorage.getItem('songs');
    return saved ? JSON.parse(saved) : [];
  });
  const [editingSong, setEditingSong] = useState(null);

  useEffect(() => {
    localStorage.setItem('songs', JSON.stringify(songs));
  }, [songs]);

  const addSong = (song) => {
    setSongs([{id: Date.now(), ...song}, ...songs]);
  }

  const updateSong = (updatedSong) => {
    setSongs(songs.map(song => song.id === updatedSong.id ? updatedSong : song));
    setEditingSong(null);
  }

  const deleteSong = (index) => {
    const response = confirm('Are You sure to delete the song?');
    if (response) setSongs(songs.filter(song => song.id !== index));
  }

  return (
    <>
    <div className='min-h-screen bg-gray-700 py-6'>
      <h1 className='text-4xl text-center text-pink-400'>🎵 Playlist Manager</h1>
      <SongForm addSong={addSong} editingSong={editingSong} updateSong={updateSong} setEditingSong={setEditingSong}/>
      <SongList songs={songs} setEditingSong={setEditingSong} deleteSong={deleteSong}/>
    </div>
    </>
  )
}

export default App
