import { useState } from "react";

function CharacterCounter() {
    const [text, setText] = useState('');
    return (
        <div style={{
            width: "300px",
            margin: "0 auto",
            border: "5px double yellow",
            borderRadius: "10px",
            padding: "10px"
        }}>
            <input type="text" placeholder="Type text here" style={{
                width: "200px",
                height: "20px",
                padding: "5px",
                outline: "none",
                fontSize: "18px"
            }} onChange={(e) => setText(e.target.value)} value={text} />
            <p style={{
                margin: "5px"
            }}>Count : {text.length}</p>
        </div>
    )
};

export default CharacterCounter;