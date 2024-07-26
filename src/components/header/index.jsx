import { Link } from 'react-router-dom';

import './header.css'

function Header(){
    return(
        <div className='header'>
            <ul className='header--container-opts'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/useState'>
                        useState
                    </Link>
                </li>
                <li>
                    <Link to='/useEffect'>
                        useEffect
                    </Link>
                </li>
                <li>
                    <Link to='/useContext'>
                        useContext
                    </Link>
                </li>
                <li>
                    <Link to='/useMemo'>
                        useMemo
                    </Link>
                </li>
                <li>
                    <Link to='/useRef'>
                        useRef
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export { Header };