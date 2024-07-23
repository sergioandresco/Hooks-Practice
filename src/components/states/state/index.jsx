import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import './state.css';

function HookState(){

    const[count, setCount] = useState(0);
    const[copy, setCopy] = useState(false);

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

                <h2 className="content--subtitle">Example</h2>

                <div className="container-example">
                    <div className="container-copy">
                        <p>Example code</p>
                        {
                            copy ? (

                                <button className="button-copy-code">
                                    <span>
                                        <FaCheck className="button-copy-code--icon" />
                                    </span>
                                    Copied!
                                </button>

                            ) : (
                                <button className="button-copy-code" onClick={() => {
                                    navigator.clipboard.writeText(codeString);
                                    setCopy(true)
                                    setTimeout(() => {
                                        setCopy(false);
                                    }, 3000);
                                }}>
                                    <span>
                                        <FiClipboard className="button-copy-code--icon" />
                                    </span>
                                    Copy code
                                </button>
                            )
                        }
                    </div>
                    <SyntaxHighlighter 
                        language="jsx" 
                        style={atomOneDark}
                        customStyle={{
                            padding: "18px",
                            margin: "0",
                            borderRadius: "0px 0px 13px 13px",
                            height: "220px",
                        }}
                        wrapLongLines={true}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>

                <div className="container-example-button">
                    <p>The amount of clicks are <strong>{count}</strong></p>
                    <button class="btn-23" onClick={() => setCount(count + 1)}>
                        <span class="text">Click</span>
                        <span aria-hidden="" class="marquee">Click</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export { HookState };