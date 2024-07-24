import { useState, useMemo } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import '../../states/state/state.css';

function HookMemo(){

    const[count, setCount] = useState(0);
    const[copy, setCopy] = useState(false);

    const codeString = `import { useState, useMemo } from "react";
    
    function HookMemo(){
    
        const[count, setCount] = useState(0);
    
        // A mock function to simulate an expensive calculation
        const computeExpensiveValue = (num) => {
            console.log('Computing expensive value...');
            let result = 0;
            for (let i = 0; i < 1000000; i++) {  // Smaller loop count
              result += num;
            }
            return result;
        };
    
        // Use useMemo to memoize the expensive calculation
        const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);
    
        return(
    
            <div className="useState-Example">
    
                <div className="useState-Example--content">
    
                    <h1 className="content--title">useMemo Hook</h1>
    
                    <div className="container-example-button">
                        <p>Count: {count}</p>
                        <p>Expensive Value: {memoizedValue}</p>
                        <button onClick={() => setCount(count + 1)}>Increment Count</button>
                    </div>
    
                </div>
    
            </div>
    
        );
    }
    
    export { HookMemo };`;

    // A mock function to simulate an expensive calculation
    const computeExpensiveValue = (num) => {
        console.log('Computing expensive value...');
        let result = 0;
        for (let i = 0; i < 1000000; i++) {  // Smaller loop count
          result += num;
        }
        return result;
    };

    // Use useMemo to memoize the expensive calculation
    const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);

    return(

        <div className="useState-Example">

            <div className="useState-Example--content">

                <h1 className="content--title">useMemo Hook</h1>

                <div className="content--description">
                    <p>The useMemo Hook is used to memoize a computed value, meaning it only recalculates the value when one of its dependencies has changed. This can improve performance by avoiding expensive calculations on every render.</p>
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
                    <p>Count: {count}</p>
                    <p>Expensive Value: {memoizedValue}</p>
                    <button class="btn-23" onClick={() => setCount(count + 1)}>
                        <span class="text">Add</span>
                        <span aria-hidden="" class="marquee">Add</span>
                    </button>
                </div>

            </div>

        </div>

    );
}

export { HookMemo };