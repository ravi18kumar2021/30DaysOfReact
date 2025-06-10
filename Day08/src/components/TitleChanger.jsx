import { useEffect, useState } from "react"

function TitleChanger() {
    const [title, setTitle] = useState('');
    const defaultText = 'React App';
    const maxLength = 50;
    useEffect(() => {
        document.title = title || defaultText;
    }, [title]);
    const handleChange = (e) => {
        let character = e.target.value;
        if (character.length <= maxLength) {
            setTitle(character);
        }
    }
    const handleReset = () => {
        setTitle('');
    }
    return (
        <div>
            <h2>Webpage Title Changer</h2>
            <div style={{
                width: "300px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <input type="text" 
                style={{
                    height: "36px",
                    width: "150px",
                    borderRadius: "5px",
                    outline: "none",
                    border: "none",
                    fontSize: "18px",
                    padding: "0 10px"
                }}
                value={title} 
                onChange={handleChange} />
                <button onClick={handleReset} 
                disabled={title.trim() === ''}
                style={{
                    background: "maroon",
                    cursor: title.trim() === '' ? 'default' : 'pointer'
                }}>RESET</button>
            </div>
            <p>Character Count : 
                <span style={{
                color: title.length < 50 ? 'green' : 'red',
                margin: "0 5px"
            }}>{title.length}</span>/ {maxLength}</p>
            {(title.length === maxLength) && (
                <p>Max Length Reached !!!</p>
                )
            }
        </div>
    )
};

export default TitleChanger;