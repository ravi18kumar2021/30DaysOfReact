import { NavLink } from 'react-router'

export default function Navbar() {
    return (
        <nav className='mx-auto p-3 flex justify-evenly bg-violet-800 text-white'>
            <NavLink to="/" className={({isActive}) => 
            isActive ? "text-yellow-300 font-bold" : "hover:underline"
            }>Home</NavLink>
            <NavLink to="/blogs" className={({isActive}) => 
            isActive ? "text-yellow-300 font-bold" : "hover:underline"
            }>Blogs</NavLink>
        </nav>
    )
}