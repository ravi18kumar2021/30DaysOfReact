import { useEffect, useState } from "react"

function QuoteFetcher() {
    const [quote, setQuote] = useState('');
    const [category, setCategory] = useState('inspirational');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const categories = [
        "inspirational",
        "famous-quotes",
        "technology",
        "education",
        "wisdom",
        "life"
    ]

    const Loader = () => (
        <>
            <div style={{
                width: "40px",
                height: "40px",
                border: "6px solid #ccc",
                borderTop: "6px solid rgb(247, 107, 32)",
                borderRadius: "50%",
                margin: "0 auto",
                animation: "spin 1s linear infinite"
            }}></div>
            <style>
                {`
                    @keyframes spin {
                        0% {transform: rotate(0deg);}
                        100% {transform: rotate(360deg);}
                    }
                `}
            </style>
        </>
    );

    async function getData() {
        setLoading(true);
        setError('');
        setQuote('');
        try {
            const response = await fetch(`https://api.quotable.io/random?tags=${category}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setQuote(data);
            setError('');
        } catch (error) {
            setError(error.message);
            setQuote('');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [category]);

    return (
        <div>
            <h1>Quotes Dictionary</h1>
            <h3>Discover by Category</h3>
            <select value={category} 
            style={{
                height: "36px",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "30px"
            }}
            onChange={(e) => setCategory(e.target.value)}>
                {categories.map((item, index) => (
                    <option key={index} value={item}>{item.replace('-', ' ').toUpperCase()}</option>
                ))}
            </select>
            <button onClick={getData}>Get a Quote</button>
            <div style={{
                marginTop: "20px",
                minHeight: "150px"
            }}>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {loading && <Loader />}
                {quote && (
                    <div style={{
                        border: "5px double orange",
                        borderRadius: "10px",
                        background: "#5a5a5a",
                        fontSize: "18px",
                        width: "500px",
                    }}>
                        <blockquote style={{ fontStyle: "italic" }}>"{quote.content}"<footer style={{ textAlign: "right" }}>- {quote.author || 'UNKNOWN'}</footer></blockquote>
                    </div>
                )}
            </div>
        </div>
    )
};

export default QuoteFetcher;