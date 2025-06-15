// import { Link } from "react-router";
import { NavLink } from "react-router";

function Navbar() {
    // const navStyle = ({isActive}) => ({
    //     fontSize: isActive ? "18px" : "",
    //     fontWeight: isActive ? "bold" : "",
    //     textDecoration: isActive ? "underline" : "",
    //     color: isActive ? "orange" : ""
    // })
    return (
        <nav className="my-4 flex justify-evenly">
            {/* <a href="/">Home </a>
            <a href="/about"> About </a>
            <a href="/contact"> Contact</a> */}
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
            {/* <NavLink to="/" style={navStyle}>Home</NavLink>
            <NavLink to="/about" style={navStyle} >About</NavLink>
            <NavLink to="/contact" style={navStyle} >Contact</NavLink> */}
            <NavLink to="/" className={({isActive}) => (
                isActive ? "text-xl font-bold text-orange-400" : "hover:underline"
            )}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => (
                isActive ? "text-xl font-bold text-orange-400" : "hover:underline"
            )} >About</NavLink>
            <NavLink to="/contact" className={({isActive}) => (
                isActive ? "text-xl font-bold text-orange-400" : "hover:underline"
            )} >Contact</NavLink>
        </nav>
    )
}

export default Navbar;