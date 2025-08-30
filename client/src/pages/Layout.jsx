import {Outlet} from "react-router-dom";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

export default function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
