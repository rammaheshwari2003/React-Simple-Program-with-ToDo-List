import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
            <div id="nav">
            <Link to="home"> Home </Link> |
            <Link to="counterApp"> Counter App </Link> |
            <Link to="themechange"> Theme Change App </Link> |
            <Link to="todoApp"> ToDo List App </Link> |
            <Link to="contact"> Contact Us </Link>
            </div>

            <hr />
            <Outlet/>

            
        </>
    )
}
export default Layout;