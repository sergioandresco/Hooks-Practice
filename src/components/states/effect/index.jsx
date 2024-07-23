import { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import '../../states/state/state.css';

function HookEffect(){

    const[count, setCount] = useState(0);
    const[copy, setCopy] = useState(false);

    const codeString = `import { useState, useEffect } from "react";
    
    function HookState(){
    
        const[count, setCount] = useState(0);

        useEffect(() => {
            document.title = 'You clicked ${count} times';
        }, [count])
        
        return(
            <>
                <h1>useState Example</h1>
                <p>The amount of clics are <strong>{count}</strong></p>
                <button onClick={() => setCount(count + 1)}>Clic</button>
            </>
        )
    }
    
    export { HookState };`;

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count])

    return(

        <div className="useState-Example">

            <div className="useState-Example--content">

                <h1 className="content--title">useEffect Hook</h1>

                <div className="content--description">
                    <p>The useEffect Hook is used to perform side effects in functional components in React. It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components. The useEffect Hook allows you to perform side effects in function components. It accepts two arguments: a function and an optional array of dependencies. The useEffect Hook is called after every render of the component, and the function is only executed if the dependencies have changed since the last render.</p>
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
                    <p>The amount of clicks in the title of the web page are <strong>{count}</strong></p>
                    <button class="btn-23" onClick={() => setCount(count + 1)}>
                        <span class="text">Click</span>
                        <span aria-hidden="" class="marquee">Click</span>
                    </button>
                </div>

            </div>

        </div>
    );
}

export { HookEffect };