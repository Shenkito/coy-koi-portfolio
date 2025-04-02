import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-black text-white p-4 flex justify-between items-center z-50 shadow-md transition-all duration-300">
            {/* Logo */}
            <h1 className="text-2xl font-bold">Coy Koi</h1>

            {/* Burger Icon - Visible only on Mobile */}
            <button
                className="text-3xl z-50 relative md:hidden transform transition-all duration-300 ease-in-out hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Desktop Menu - Always visible on medium and large screens */}
            <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-gray-400 hover:scale-105 transition-all duration-300">About Me</a>
                <a href="#" className="hover:text-gray-400 hover:scale-105 transition-all duration-300">My Works</a>
                <a href="#" className="hover:text-gray-400 hover:scale-105 transition-all duration-300">Services</a>
            </div>

            {/* Mobile Menu - Full-screen Overlay */}
            <div
                className={`${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    } fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-in-out md:hidden`}
            >
                <a href="#" className="text-white text-xl hover:text-gray-400 transform transition-all duration-300" onClick={() => setIsOpen(false)}>About Me</a>
                <a href="#" className="text-white text-xl hover:text-gray-400 transform transition-all duration-300" onClick={() => setIsOpen(false)}>My Works</a>
                <a href="#" className="text-white text-xl hover:text-gray-400 transform transition-all duration-300" onClick={() => setIsOpen(false)}>Services</a>
            </div>
        </nav>
    );
};

export default NavBar;
