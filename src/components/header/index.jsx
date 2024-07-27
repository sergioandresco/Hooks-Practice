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
                    <Link to='/menu-hooks-native'>
                        Hooks Native
                    </Link>
                </li>
                <li>
                    <Link to='/menu-hooks-react-router'>
                        Hooks React Router
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export { Header };