import React, { useState, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import '../../states/state/state.css';

function HookRef(){

    const [time, setTime] = useState(0);
    const timerId = useRef(null);
    const[copy, setCopy] = useState(false);

    const codeString = `import React, { useState, useRef } from 'react';
    
    function HookRef(){
    
        const [time, setTime] = useState(0);
        const timerId = useRef(null);
    
        const startTimer = () => {
            if (timerId.current === null) {
                timerId.current = setInterval(() => {
                    setTime(prevTime => prevTime + 1);
                }, 1000);
            }
        };
    
        const stopTimer = () => {
            clearInterval(timerId.current);
            timerId.current = null;
        };
    
        const resetTimer = () => {
            stopTimer();
            setTime(0);
        };
    
        return(
    
            <div>
                <h1>Cronómetro</h1>
                <p>{time} segundos</p>
                <button onClick={startTimer}>Iniciar</button>
                <button onClick={stopTimer}>Detener</button>
                <button onClick={resetTimer}>Reiniciar</button>
            </div>
    
        );
    }
    
    export { HookRef }`;

    const startTimer = () => {
        if (timerId.current === null) {
            timerId.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = null;
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };

    return(

        <div className="useState-Example">

            <div className="useState-Example--content">

                <h1 className="content--title">useRef Hook</h1>

                <div className="content--description">
                    <p>The useRef hook in React is used to create a mutable reference object that persists for the lifetime of a component. It provides a way to directly access and interact with DOM elements or store any mutable value without causing re-renders when updated.</p>
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
                    <h2>Chronometer</h2>
                    <p>{time} seconds</p>
                    <button onClick={startTimer}>Start</button>
                    <button onClick={stopTimer}>Stop</button>
                    <button onClick={resetTimer}>Restart</button>
                </div>

            </div>

        </div>

    );
}

export { HookRef }