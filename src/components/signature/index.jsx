import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import Logo from '../../assets/logo/serchtec-logo.png';

import './signature.css';

function Signature() {
    return ( 
        <div className='signature'>
            <div className="signature-content">
                <h6 className='signature--title'>Developed by Sergio Cobos</h6>
                <img className='signature--img' src={Logo} alt="Sergio Cobos Logo" />
            </div>
            <div className="signature--social-content">
                <a className="signature--social-media" href="https://www.instagram.com/sergioandresco/" target="_blank">
                    <FaInstagram className="signature--social-media-icon" />
                </a>
                <a className="signature--social-media" href="https://github.com/sergioandresco" target="_blank">
                    <FaGithub className="signature--social-media-icon" />
                </a>
                <a className="signature--social-media" href="https://www.linkedin.com/in/sergio-andres-cobos-suarez-942637219/" target="_blank">
                    <FaLinkedin className="signature--social-media-icon" />
                </a>
            </div>
        </div>
     );
}

export { Signature };