import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{
            width: "350px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly"
        }}>
            <div style={{
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                border: "5px double yellow",
                borderRadius: "5px"
            }}>
                <button style={{
                    background: "violet"
                }} onClick={() => setCount(count - 1)}>-</button>
                <h3>{count}</h3>
                <button style={{
                    background: "green"
                }} onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button style={{
                marginTop: "10px",
                background: "red"
            }} onClick={() => setCount(0)}>RESET</button>
        </div>
    )
}

export default Counter;