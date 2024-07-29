import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import '../../states/state/state.css';

function HookNavigate(){

    let history = useNavigate();
    const[copy, setCopy] = useState(false);

    const codeString = `
    import { useNavigate } from 'react-router-dom';
    
    function HookHistory(){
    
        let history = useNavigate();
    
        function handleClick(){
            history.push('/menu-hooks-native');
        }
    
        return(
    
            <div className="container-example-button">
                <p>Go to Hooks Native</p>
                <button className="btn-23" onClick={handleClick}>
                    <span className="text">Go</span>
                    <span aria-hidden="" className="marquee">Go</span>
                </button>
            </div>
    
        )
    }
    
    export { HookHistory };`;

    function handleClick(){
        history.push('/menu-hooks-native');
    }

    return(
        <div className="useState-Example">

            <div className="useState-Example--content">

                <h1 className="content--title">useNavigate Hook</h1>

                <div className="content--description">
                    <p>The useNavigate hook is a part of the react-router-dom V6 library in React, which provides access to the history instance used for navigation. This hook allows you to programmatically navigate, push, replace, and manipulate the history stack within your React components.</p>
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
                    <p>Go to Hooks Native</p>
                    <button className="btn-23" onClick={handleClick}>
                        <span className="text">Go</span>
                        <span aria-hidden="" className="marquee">Go</span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export { HookNavigate };