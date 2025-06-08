import { useState } from "react";

function Toggle() {
    const [hideContainer, setHideContainer] = useState(false);
    return (
        <>
            <button style={{
                marginBottom: "10px",
                background: hideContainer ? "darkgreen" : "red"
            }} onClick={() => setHideContainer(!hideContainer)}>{hideContainer ? "Show" : "Hide"}</button>

            <div style={{
                minHeight: "120px"
            }}>
                {(!hideContainer) && (
                    <div style={{
                        border: "5px solid yellow",
                        width: "400px",
                        margin: "0 auto",
                    }}>
                        <h3>Hide/Show container</h3>
                        <p>These contents will hide or show on the button click.</p>
                    </div>

                )}
            </div>
        </>
    )
};

export default Toggle;