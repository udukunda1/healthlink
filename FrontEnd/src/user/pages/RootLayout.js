import { Outlet } from "react-router-dom";
import Navbar from "../../shared/components/navigation/Navbar";
import Footer from "../../shared/components/footers/footer";

function RootLayout(){

    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )

}

export default RootLayout;