import React from "react";
import { motion } from "framer-motion";

const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
};

const Hero = () => {
    return (
        <section id="about" className="hero w-full text-white overflow-hidden pt-20 sm:pt-24 md:pt-0">
            <div className="flex flex-col md:flex-row h-auto md:h-[90vh] max-w-screen-2xl mx-auto">
                {/* Left - Text Section */}
                <motion.div
                    className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-0"
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-lg text-center md:text-left">
                        <h2 className="text-xl text-gray-300 mb-2">Hello, I am</h2>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                            Katarina Spodna
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            And I Create Visuals That Speak Your Brand's Language
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                            <button className="px-6 py-3 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-600 hover:text-white transition-all">
                                My Portfolio
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center bg-purple-600 hover:bg-purple-700 rounded-lg transition-all">
                                <span className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-[2px]" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right - Image Section */}
                <motion.div
                    className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto"
                    variants={imageVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src="src/assets/right-photo-hero.jpg"
                        alt="Portrait of Katarina Spodna"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
