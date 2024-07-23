import { Link } from 'react-router-dom';

import './header.css'

function Header(){
    return(
        <navbar className='header'>
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
            </ul>
        </navbar>
    );
}

export { Header };