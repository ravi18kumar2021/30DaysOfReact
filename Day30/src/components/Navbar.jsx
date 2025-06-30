import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav className="bg-blue-900 p-4">
            <div className="w-sm flex justify-around items-center text-xl text-white">
                <NavLink to='/' className={({ isActive }) => isActive ? 'bg-red-300 p-3 rounded-md text-gray-700' : 'p-3'}>Home</NavLink>
                <NavLink to='/' className={({ isActive }) => isActive ? 'bg-red-300 p-3 rounded-md text-gray-700' : 'p-3'}>Create a Song</NavLink>
            </div>
        </nav>
    )
}