import React from "react";
import { motion } from "framer-motion";

const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut", delay: 0.4 },
    },
};

const Hero = () => {
    return (
        <section
            className="hero py-24 bg-gradient-to-r from-black via-gray-800 to-gray-500 text-white overflow-hidden relative"
            style={{ maxHeight: "100vh", overflowY: "hidden" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left overflow-hidden">
                {/* Left Content */}
                <motion.div
                    className="w-full md:w-1/2"
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-tight">
                        Hello, I am <br />
                        <span className="text-white">Katarina Spodna</span>
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                        And I create visuals that speak your brand's language
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black border-2 border-white rounded-lg transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-lg">
                            My Works
                        </button>
                        <button className="px-6 py-3 md:px-8 md:py-4 bg-purple-600 text-white border-2 border-purple-600 rounded-lg transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-lg">
                            ▶
                        </button>
                    </div>
                </motion.div>

                {/* Right Side Image */}
                <motion.div
                    className="hidden md:flex w-full md:w-1/2 justify-center mt-12 md:mt-0"
                    variants={imageVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src="src/assets/right-photo-hero.jpg"
                        alt="Hero"
                        className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl object-cover rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
