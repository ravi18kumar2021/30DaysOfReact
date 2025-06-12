import './App.css'
import ProfileCard from '../components/ProfileCard'

function App() {

	return (
		<>
			<h1>Profile Page <br /><span className='italic text-3xl'>using Tailwind CSS</span></h1>
			{/* <div style={{
				display: "flex",
				gap: "20px",
				margin: "20px"
			}}>
				<ProfileCard
					name="Angelina Jackson"
					designation="React Developer"
					description="Passionate to create UI using React + CSS"
					image="https://randomuser.me/api/portraits/women/44.jpg"
				/>
			</div> */}
			<ProfileCard
				name="Angelina Jackson"
				designation="React Developer"
				description="Passionate to create UI using React + Tailwind CSS"
				image="https://randomuser.me/api/portraits/women/44.jpg"
			/>
		</>
	)
}

export default App
