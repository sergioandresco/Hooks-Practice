import React, { useState, createContext, useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import '../../states/state/state.css';

// Create a Context for the theme
const ThemeContext = createContext();

function HookContext() {
  // Create a state to hold the current theme
  const [theme, setTheme] = useState('light');
  const [copy, setCopy] = useState(false);

  const codeString = `import React, { useState, createContext, useContext } from 'react';
  
  // Create a Context for the theme
  const ThemeContext = createContext();
  
  function HookContext() {

    // Create a state to hold the current theme
    const [theme, setTheme] = useState('light');
  
    // Function to toggle the theme
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      // Provide the theme and toggleTheme function to the context
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="useState-Example">
          <ThemedContent>
            <h1 className="content--title">useContext Hook</h1>
            <h2 className="content--subtitle">Example</h2>
            <div className="container-example-button">
              <ThemedComponent />
            </div>
          </ThemedContent>
        </div>
      </ThemeContext.Provider>
    );
  }
  
  function ThemedContent({ children }) {
    const { theme } = useContext(ThemeContext);
  
    const backgroundColor = theme === 'light' ? '#fff' : '#333';
    const color = theme === 'light' ? '#000' : '#fff';
  
    return (
      <div className="useState-Example--content" style={{ backgroundColor, color }}>
        {children}
      </div>
    );
  }
  
  function ThemedComponent() {
      
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div>
        <p>The current theme is {theme}</p>
        <button
          onClick={toggleTheme}
          style={{
            background: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Toggle Theme
        </button>
      </div>
    );
  }
  
  export { HookContext };`;

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Provide the theme and toggleTheme function to the context
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="useState-Example">
        <ThemedContent>
          <h1 className="content--title">useContext Hook</h1>
          <div className="content--description">
            <p>The useContext Hook is a React Hook that allows you to access the value of a context directly in a functional component. Context is used to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.</p>
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
                    setCopy(true);
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
            <ThemedComponent />
          </div>
        </ThemedContent>
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedContent({ children }) {
  const { theme } = useContext(ThemeContext);

  const backgroundColor = theme === 'light' ? '#fff' : '#333';
  const color = theme === 'light' ? '#000' : '#fff';

  return (
    <div className="useState-Example--content" style={{ backgroundColor, color }}>
      {children}
    </div>
  );
}

function ThemedComponent() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <p>The current theme is {theme}</p>
      <button
        onClick={toggleTheme}
        style={{
          background: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          padding: '6px 12px',
          border: '1px solid black',
          cursor: 'pointer',
          borderRadius: '5px',
          height: '30px'
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export { HookContext };