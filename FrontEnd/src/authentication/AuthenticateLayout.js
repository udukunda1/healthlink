import { Outlet } from "react-router-dom";
import AuthenticateNavigation from "./AuthenticateNavigation";


function AuthenticateLayout() {
    return (
        <>
        <AuthenticateNavigation />
        <Outlet />
        </>
    )
}

export default AuthenticateLayout;