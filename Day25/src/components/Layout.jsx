import { Suspense } from "react";
import { NavLink, Outlet } from "react-router";
import Loading from "./Loading";

export default function Layout() {
    return (
        <>
            <nav className="bg-blue-800">
                <div className="w-lg p-4 flex justify-around items-center text-xl text-white">
                    <NavLink to='/' className={({isActive}) => isActive ? 'bg-red-300 p-3 rounded-md text-gray-700':''}>Home</NavLink>
                    <NavLink to='/about' className={({isActive}) => isActive ? 'bg-red-300 p-3 rounded-md text-gray-700':''}>About</NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive ? 'bg-red-300 p-3 rounded-md text-gray-700':''}>Contact</NavLink>
                </div>
            </nav>
            <Suspense fallback={<Loading />}>
            <Outlet />
            </Suspense>
        </>
    )
}