import { useState, useEffect } from "react";

function HookEffect(){

    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])

    return(
        <>
            <h1>useEffect Example</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Clic</button>
        </>
    );
}

export { HookEffect };