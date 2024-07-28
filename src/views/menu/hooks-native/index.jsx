import { Outlet, useLocation } from "react-router-dom";
import { RedirectionButton } from "../../../components/button-hook";
import { BackButtonMenu } from "../../../components/back-button-menu";

import '../menu.css'

function MenuHooksNative(){

    const location = useLocation();

    const showButtons = location.pathname === '/menu-hooks-native';
    const showButtonBack = location.pathname.startsWith('/menu-hooks-native/') && location.pathname !== '/menu-hooks-native/';

    return(
        <>
            {showButtons && (
                <>
                    <div className="container-redirection-buttons">
                        <div className="container-redirection-buttons--buttons">
                            <RedirectionButton url='useState' nameHook='useState Hook' />
                            <RedirectionButton url='useEffect' nameHook='useEffect Hook' />
                            <RedirectionButton url='useContext' nameHook='useContext Hook' />
                            <RedirectionButton url='useMemo' nameHook='useMemo Hook' />
                            <RedirectionButton url='useRef' nameHook='useRef Hook' />
                        </div>
                    </div>
                </>
            )}
            <div>
                <Outlet />
                {showButtonBack && (
                    <BackButtonMenu url='/menu-hooks-native' />
                )}
            </div>
        </>
    );
}

export { MenuHooksNative }