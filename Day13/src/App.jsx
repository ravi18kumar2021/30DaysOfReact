import './App.css'
import ProfilePage from './components/ProfilePage'

function App() {
  const profile = {
    name: 'David Kim',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    designation: 'Full Stack Developer',
    description: 'Passionate about solving problems and building scalable web apps.'
  }
  return (
    <>
      <ProfilePage name={profile.name} image={profile.image} designation={profile.designation} description={profile.description} />
    </>
  )
}

export default App
