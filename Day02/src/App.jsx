import './App.css'
import ProfileCard from './components/ProfileCard'
import teamMembers from './data'

function App() {

    return (
        <>
            <h1>Welcome to 30daysofreact journey</h1>
            <div style={{
                width: "600px",
                margin: "0 auto"
            }}>
                <h3>This is Day 2</h3>
                <h4>Goal of the day:</h4>
                <ul style={{
                    listStyle: "circle",
                    textAlign: "left"
                }}>
                    <li>Learn how to pass data (props) from parent to child components.</li>
                    <li>Understand how to reuse a component by feeding it different data</li>
                    <li>Build a Team Member Cards component that displays multiple profiles using the same ProfileCard.</li>
                </ul>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                border: "2px solid yellow",
                width: "600px",
                margin: "0 auto"
            }}>
                {teamMembers.map((item, index) => (
                    <ProfileCard key={index} image={item.image} name={item.name} role={item.role} location={item.location} />
                ))}
            </div>
        </>
    )
}

export default App
