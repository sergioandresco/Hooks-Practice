import { Link } from 'react-router-dom';

function TestButton({ url, nameHook }){
    return(
        <Link to={url}>
            <button>
                {nameHook}
            </button>
        </Link>
    );
}

export { TestButton };