import { useState } from "react";

function HookState(){

    const[count, setCount] = useState(0);

    return(
        <>
            <h1>useState Example</h1>
            <p>The amount of clics are <strong>{count}</strong></p>
            <button onClick={() => setCount(count + 1)}>Clic</button>
        </>
    )
}

export { HookState };