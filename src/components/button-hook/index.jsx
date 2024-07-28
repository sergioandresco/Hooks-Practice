import { useNavigate } from "react-router-dom";

import './redirectionButton.css';

function RedirectionButton({ url, nameHook }){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    }

    return(
        <button className="redirection-btn" type="button" onClick={handleClick}>
            <strong className="redirection-btn--name-button">{nameHook}</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>
        
            <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </button>
      
    );
}

export { RedirectionButton };