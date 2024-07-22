import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './state.css';

function HookState(){

    const[count, setCount] = useState(0);

    const codeString = `import { useState } from "react";
    
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
    
    export { HookState };`;

    return(
        <div className="useState-Example">

            <div className="useState-Example--content">

                <h1 className="content--title">useState Hook</h1>

                <div className="content--description">
                    <p>The useState Hook is used to manage state in functional components in React. It returns an array with two values: the current state and a function to update it. The useState Hook is used to manage state in functional components in React. It returns an array with two values: the current state and a function to update it.</p>
                </div>

                <h2>Example</h2>

                <SyntaxHighlighter 
                    language="jsx" 
                    style={atomOneDark}
                    customStyle={{
                        padding: "25px"
                    }}
                >
                    {codeString}
                </SyntaxHighlighter>

                <div>
                    <p>The amount of clics are <strong>{count}</strong></p>
                    <button onClick={() => setCount(count + 1)}>Clic</button>
                </div>

            </div>

        </div>
    )
}

export { HookState };