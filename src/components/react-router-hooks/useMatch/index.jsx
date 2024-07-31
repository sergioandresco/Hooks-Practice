import { useState } from "react";
import { useMatch } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import '../../states/state/state.css';

function HookMatch(){

    let match = useMatch('/menu-hooks-react-router/useMatch');
    const[copy, setCopy] = useState(false);

    const codeString = `
    import { useMatch } from 'react-router-dom';
    
    function HookMatch(){
    
        let match = useMatch('/menu-hooks-react-router/useMatch');
    
        return(
            <div className="useState-Example">
    
                <div className="container-example">
                    <p>Is matched: <strong>{match ? 'Yes' : 'No'}</strong></p>
                </div>
    
            </div>
        )
    }
    
    export { HookMatch };`;

    return(
        <div className="useState-Example">

            <div className="useState-Example--content">

                <h1 className="content--title">useMatch Hook</h1>

                <div className="content--description">
                    <p>The react-router-dom useMatch hook is used to check if the current URL matches a specific route pattern and get detailed information about that match.</p>
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
                    <p>Is matched: <strong>{match ? 'Yes' : 'No'}</strong></p>
                </div>

            </div>

        </div>
    )
}

export { HookMatch };