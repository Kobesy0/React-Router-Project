import { NavLink } from "react-router-dom";

function Navbar(){
    return(
       <nav className="max-w-lg mx-auto mt-7 mb-20 app-navbar">
         <ul className="flex justify-between items-center"> 
            <li className=" rounded-md cursor-pointer duration-200">
                <NavLink className="px-3" to="/">Home</NavLink>
            </li>
            <li className=" rounded-md cursor-pointer duration-200">
                <NavLink className="px-3" to="/contact">Contact</NavLink>
            </li>
            <li className=" rounded-md cursor-pointe duration-200">
                <NavLink className="px-3" to="/about">About us</NavLink>
            </li>
            <li className=" rounded-md cursor-pointe duration-200">
                <NavLink className="px-3" to="/learn">Learn</NavLink>
            </li>
            <li className=" rounded-md cursor-pointe duration-200">
                <NavLink className="px-3" to="/contribute">Contribute</NavLink>
            </li>
            <li className=" rounded-md cursor-pointe duration-200">
                <NavLink className="px-3" to="/login">Log in</NavLink>
            </li>
        </ul>
       </nav>
    )
}

export default Navbar;