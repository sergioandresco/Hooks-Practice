import { Outlet, useLocation } from "react-router-dom";
import { RedirectionButton } from "../../../components/button-hook";

import '../menu.css'

function MenuHooksNative(){

    const location = useLocation();

    const showButtons = location.pathname === '/menu-hooks-native';

    return(
        <>
            {showButtons && (
                <div className="container-redirection-buttons">
                    <div className="container-redirection-buttons--buttons">
                        <RedirectionButton url='useState' nameHook='useState Hook' />
                        <RedirectionButton url='useEffect' nameHook='useEffect Hook' />
                        <RedirectionButton url='useContext' nameHook='useContext Hook' />
                        <RedirectionButton url='useMemo' nameHook='useMemo Hook' />
                        <RedirectionButton url='useRef' nameHook='useRef Hook' />
                    </div>
                </div>
            )}
            <Outlet />
        </>
    );
}

export { MenuHooksNative }