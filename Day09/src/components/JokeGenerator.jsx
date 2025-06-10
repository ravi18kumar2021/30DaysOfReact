import { useEffect, useState } from "react"

function JokeGenerator() {
    const [jokeSetup, setJokeSetup] = useState('');
    const [jokePunchline, setJokePunchline] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function getJoke() {
        setError('');
        setJokeSetup('');
        setJokePunchline('');
        setLoading(true);
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            if (!response.ok) throw new Error("Failed to fetch joke");
            const data = await response.json();
            setJokeSetup(`${data.setup}`);
            setJokePunchline(`${data.punchline} 😂`);
        } catch (error) {
            setError(error.message || 'ERROR 404: I am not joking');
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getJoke();
    }, []);
    return (
        <div>
            <h1>Random Joke Generator</h1>
            <button onClick={getJoke}>Generate</button>
            <div style={{
                fontSize: "20px"
            }}>
                {loading && <p style={{ color: "green" }}>Loading...</p>}
                {(jokeSetup && jokePunchline) &&
                    <div>
                        <p>{jokeSetup}</p>
                        <p>{jokePunchline}</p>
                    </div>
                }
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    )
};

export default JokeGenerator;