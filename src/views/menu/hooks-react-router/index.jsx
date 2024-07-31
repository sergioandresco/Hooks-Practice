import { Outlet, useLocation } from "react-router-dom";
import { RedirectionButton } from "../../../components/button-hook";
import { BackButtonMenu } from "../../../components/back-button-menu";

import '../menu.css'

function MenuHooksReactRouter(){

    const location = useLocation();

    const showButtons = location.pathname === '/menu-hooks-react-router';
    const showButtonBack = location.pathname.startsWith('/menu-hooks-react-router/') && location.pathname !== '/menu-hooks-react-router/';

    return(
        <>
            {showButtons && (
                <>
                    <div className="container-redirection-buttons">
                        <div className="container-redirection-buttons--buttons">
                            <RedirectionButton url='useNavigate' nameHook='useNavigate Hook' />
                            <RedirectionButton url='useLocation' nameHook='useLocation Hook' />
                            <RedirectionButton url='useMatch' nameHook='useMatch Hook' />
                        </div>
                    </div>
                </>
            )}
            <div>
                <Outlet />
                {showButtonBack && (
                    <BackButtonMenu url='/menu-hooks-react-router' />
                )}
            </div>
        </>
    );
}

export { MenuHooksReactRouter }