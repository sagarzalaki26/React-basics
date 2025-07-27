import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="text-2xl font-bold">MyWebsite</div>

                {/* Center Nav */}
                <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
                    <NavLink to="/" className={({isActive})=>isActive? "text-amber-500" :" hover:underline"}>
                        Home
                    </NavLink>
                    <NavLink to={"/about"} className={({isActive})=>isActive? "text-amber-500" :" hover:underline"}>
                     About
                    </NavLink>
                    <NavLink to={"/service"} className={({isActive})=>isActive? "text-amber-500" :" hover:underline"}>
                       Services
                    </NavLink>
                    <NavLink to={"/contact"} className={({isActive})=>isActive? "text-amber-500" :" hover:underline"}>
                     Contact
                    </NavLink>
                    <NavLink to={"/github"} className={({isActive})=>isActive? "text-amber-500" :" hover:underline"}>
                        Github
                    </NavLink>


                 
                </nav>

                {/* Right Buttons */}
                <div className="space-x-2 hidden md:flex">
                    <NavLink to={"/login"}>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">Login</button>
                    </NavLink>
                    <NavLink to={"/signup"}>
                         <button className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
                    </NavLink>
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>
        </header>
    );
}

export default Header;
