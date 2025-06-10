import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h2>Welcome to 30daysofreact journey</h2>
			<div style={{
				width: "600px",
				margin: "0 auto"
			}}>
				<h3>This is Day 7</h3>
				<h4>Goal of the day:</h4>
				<ul style={{
					listStyle: "circle",
					textAlign: "left"
				}}>
					<li>Expand basic form skills by building a more complex form with 3+ fields.</li>
					<li>Practice conditional rendering: show/hide form fields or results based on input.</li>
					<li>Learn how to manage slightly more complex validation logic.</li>
					<li>Display a summary or preview of entered data after submission.</li>
				</ul>
			</div>
			<RegistrationForm />
		</>
	)
}

export default App
