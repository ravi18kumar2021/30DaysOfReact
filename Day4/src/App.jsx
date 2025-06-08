import './App.css'
import Toggle from './components/Toggle'

function App() {

    return (
        <>
            <h1>Welcome to 30daysofreact journey</h1>
            <div style={{
                width: "400px",
                margin: "0 auto"
            }}>
                <h3>This is Day 4</h3>
                <h4>Goal of the day:</h4>
                <ul style={{
                    listStyle: "circle",
                    textAlign: "left"
                }}>
                    <li>Learn how to handle events in React (like clicks).</li>
                    <li>Understand conditional rendering using state.</li>
                    <li>Build a Toggle Visibility component that shows/hides content.</li>
                </ul>
            </div>
            <Toggle />
        </>
    )
}

export default App
