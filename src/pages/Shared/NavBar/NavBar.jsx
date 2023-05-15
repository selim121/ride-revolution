import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link to={'/'} className="hover:text-primary">Home</Link></li>
        <li><Link to={'/about'} className="hover:text-primary">About</Link></li>
        {
            user?.email ? <>
                <li><Link to={'/bookings'} className="hover:text-primary">My Bookings</Link></li>
                <li><Link onClick={handleLogOut} to={'/login'} className="hover:text-primary">Logout</Link></li>
            </>
                : <li><Link to={'/signup'} className="hover:text-primary">Login</Link></li>
        }
    </>


    return (
        <>
            <div className="navbar bg-[#BBC7C9] h-28 mb-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={user ? '/' : '/login'}><button className="btn btn-outline btn-primary">Appointment</button></Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;