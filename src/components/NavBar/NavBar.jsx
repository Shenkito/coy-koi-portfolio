import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-black text-white p-4 flex justify-between items-center z-50 shadow-md transition-all duration-300">
            {/* Logo */}
            <h1 className="text-2xl font-bold">Coy Koi</h1>

            {/* Burger Icon - Mobile */}
            <button
                className="text-3xl z-50 relative md:hidden transform transition-all duration-300 ease-in-out hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300"
                >
                    About Me
                </ScrollLink>

                <ScrollLink
                    to="myworks"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300"
                >
                    My Works
                </ScrollLink>

                <ScrollLink
                    to="myservices"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400 hover:scale-105 transition-all duration-300"
                >
                    My Services
                </ScrollLink>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    } fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 transition-all duration-500 ease-in-out md:hidden`}
            >
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="text-white text-xl cursor-pointer hover:text-gray-400 transform transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                >
                    About Me
                </ScrollLink>

                <ScrollLink
                    to="myworks"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="text-white text-xl cursor-pointer hover:text-gray-400 transform transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                >
                    My Works
                </ScrollLink>

                <ScrollLink
                    to="myservices"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="text-white text-xl cursor-pointer hover:text-gray-400 transform transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                >
                    My Services
                </ScrollLink>
            </div>
        </nav>
    );
};

export default NavBar;
