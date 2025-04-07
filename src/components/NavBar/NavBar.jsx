import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black text-white px-6 md:px-12 py-4 flex justify-between items-center z-50 shadow-md">
            {/* Logo */}
            <div className="text-xl font-semibold flex items-center gap-2">
                <span className="text-lg">📷</span>
                <span className="tracking-wide">Coy Koi</span>
            </div>

            {/* Mobile Burger Icon */}
            <button
                className="text-3xl z-50 relative md:hidden transition-transform duration-300 hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-lg font-medium">
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400 transition-all duration-300"
                >
                    About Me
                </ScrollLink>
                <ScrollLink
                    to="myworks"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400 transition-all duration-300"
                >
                    My Works
                </ScrollLink>
                <ScrollLink
                    to="myservices"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400 transition-all duration-300"
                >
                    Services
                </ScrollLink>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    } fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 text-xl transition-all duration-500 md:hidden`}
            >
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                >
                    About Me
                </ScrollLink>
                <ScrollLink
                    to="myworks"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                >
                    My Works
                </ScrollLink>
                <ScrollLink
                    to="myservices"
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                >
                    Services
                </ScrollLink>
            </div>
        </nav>
    );
};

export default NavBar;
