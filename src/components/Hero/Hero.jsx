const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black text-white text-center px-6 relative overflow-hidden">
            {/* Hero Heading with Letter Reveal Animation */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="inline-block animate-letterReveal">Capturing</span>
                <span className="inline-block animate-letterReveal delay-100"> Moments</span>
            </h1>

            {/* Hero Subheading with Delay and Scaling Effect */}
            <p className="mt-4 text-lg md:text-xl opacity-0 animate-pulseIn delay-400 transform group-hover:scale-110 transition-all duration-300 ease-in-out">
                Photography & Videography by Katarina Spodna
            </p>

            {/* View Portfolio Button with Neon Glow Effect */}
            <button className="mt-6 px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg transform transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white hover:text-black hover:shadow-lg hover:animate-neonGlow">
                View Portfolio
            </button>
        </section>
    );
};

export default Hero;
