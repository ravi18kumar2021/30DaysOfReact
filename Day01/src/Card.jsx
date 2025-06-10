import './Card.css'

function Card() {
    return (
        <div>
            <h1>Welcome to 30daysofreact journey</h1>
            <div style={{width: "400px", margin: "0 auto"}}>
                <h2>This is Day 1</h2>
                <h4>Goal of the day:</h4>
                <ul style={{listStyle: "circle"}}>
                    <li className='left'>Set up the development environment with Vite + React.</li>
                    <li className='left'>Understand JSX and how React components work.</li>
                    <li className='left'>Build the first mini project to display a static card</li>
                </ul>
            </div>
            <div>
                <h2>My name is Ravi Kumar</h2>
                <p>I am a React Developer</p>
            </div>
        </div>
    )
}

export default Card;