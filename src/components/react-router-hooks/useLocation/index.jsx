import { useState } from "react";
import { useLocation } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import '../../states/state/state.css';

function HookLocation(){

    let location = useLocation();
    const[copy, setCopy] = useState(false);

    const codeString = `
    import { useLocation } from 'react-router-dom';
    
    function HookLocation(){
    
        let location = useLocation();
    
        return(
    
            <div className="container-example">
                <p>Current location: <strong>{location.pathname}</strong></p>
            </div>
    
        )
    }
    
    export { HookLocation };`;

    return(
        <div className="useState-Example">

            <div className="useState-Example--content">

                <h1 className="content--title">useLocation Hook</h1>

                <div className="content--description">
                    <p>The useLocation hook is a part of the react-router-dom library in React, providing access to the current location object, which represents the current URL in the web browser. This hook is particularly useful for reading the current path, search query, and hash values, as well as for accessing state passed during navigation.</p>
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
                    <p>Current location: <strong>{location.pathname}</strong></p>
                </div>

            </div>

        </div>
    )
}

export { HookLocation };