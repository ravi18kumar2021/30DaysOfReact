import './App.css'
import CharacterCounter from './components/CharacterCounter'

function App() {

	return (
		<>
			<h1>Welcome to 30daysofreact journey</h1>
			<div style={{
				width: "400px",
				margin: "0 auto"
			}}>
				<h3>This is Day 5</h3>
				<h4>Goal of the day:</h4>
				<ul style={{
					listStyle: "circle",
					textAlign: "left"
				}}>
					<li>Learn how to handle input fields in React.</li>
					<li>Build a live character counter that updates as the user types.</li>
					<li>Use controlled components with useState.</li>
				</ul>
			</div>
			<CharacterCounter />
		</>
	)
}

export default App
