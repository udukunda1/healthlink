import { Outlet } from "react-router-dom";
import Navbar from "../../shared/components/navigation/Navbar";
import Footer from "../../shared/components/footers/footer";
import FavouriteIcon from "../../shared/components/favouriteicon/FavouriteIcon";

function RootLayout(){

    return (
        <>
        <Navbar />
        <FavouriteIcon />
        <Outlet />
        <Footer />
        </>
    )

}

export default RootLayout;