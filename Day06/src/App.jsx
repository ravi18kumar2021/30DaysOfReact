import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicForm from './components/BasicForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to 30daysofreact journey</h1>
			<div style={{
				width: "450px",
				margin: "0 auto"
			}}>
				<h3>This is Day 6</h3>
				<h4>Goal of the day:</h4>
				<ul style={{
					listStyle: "circle",
					textAlign: "left"
				}}>
					<li>Learn how to build a basic form in React.</li>
					<li>Practice managing multiple input fields with <em>useState.</em></li>
					<li>Add simple validation (e.g. required fields, valid email).</li>
          <li>Show error or success messages based on form state.</li>
				</ul>
			</div>
      <BasicForm />
    </>
  )
}

export default App
