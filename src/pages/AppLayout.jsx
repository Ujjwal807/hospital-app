import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function AppLayout() {
    return (
        <div className="font-poppin">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default AppLayout
