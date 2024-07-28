import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

import './button-back-menu.css';

function BackButtonMenu({ url }){
    return(
        <div className="back-button">
            <Link to={url}>
                <TiArrowBack className="back-button--icon" />
            </Link>
        </div>
    );
}

export { BackButtonMenu };