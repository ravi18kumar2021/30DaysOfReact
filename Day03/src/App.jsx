import './App.css'
import Counter from './components/Counter'

function App() {

    return (
        <>
            <h1>Welcome to 30daysofreact journey</h1>
            <div style={{
                width: "400px",
                margin: "0 auto"
            }}>
                <h3>This is Day 3</h3>
                <h4>Goal of the day:</h4>
                <ul style={{
                    listStyle: "circle",
                    textAlign: "left"
                }}>
                    <li>Learn how to use React’s useState hook.</li>
                    <li>Understand the concept of component state.</li>
                    <li>Build a Counter App with increment, decrement and reset functionality.</li>
                </ul>
            </div>
            <Counter />
        </>
    )
}

export default App
