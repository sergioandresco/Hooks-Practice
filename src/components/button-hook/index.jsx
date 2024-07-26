import { useNavigate } from "react-router-dom";

function RedirectionButton({ url, nameHook }){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    }

    return(
        <button onClick={handleClick}>
            {nameHook}
        </button>
    );
}

export { RedirectionButton };