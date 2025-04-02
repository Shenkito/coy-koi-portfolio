const Hero = () => {
    return (
        <section className="hero h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black via-gray-800 to-gray-500 text-white px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 text-center md:text-left relative overflow-hidden">
            {/* Left Side Content */}
            <div className="w-full md:w-1/2 max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-tight">
                    Hello, I am <br />
                    <span className="text-white">Katarina Spodna</span>
                </h1>
                <p className="mt-4 text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                    And I create visuals that speak your brand's language
                </p>
                <div className="mt-6 flex justify-center md:justify-start space-x-4">
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black border-2 border-white rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110">
                        My Portfolio
                    </button>
                    <button className="px-6 py-3 md:px-8 md:py-4 bg-purple-600 text-white border-2 border-purple-600 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110">
                        ▶
                    </button>
                </div>
            </div>

            {/* Right Side Image - Hidden on Mobile & Slides in on Load */}
            <div className="hidden md:flex w-full md:w-1/2 max-w-lg lg:max-w-xl xl:max-w-2xl justify-center md:mt-0">
                <img
                    src="src/assets/right-photo-hero.jpg"
                    alt="Hero Image"
                    className="w-full object-cover rounded-lg shadow-lg hero-slide"
                />
            </div>
        </section>
    );
};

export default Hero;
