import { Header } from "../../components/header";
import { Outlet } from "react-router-dom";
import { Signature } from "../../components/signature";

export default function MainLayout(){
    return(
        <>
            <Header />
            <Outlet />
            <Signature />
        </>
    );
}