import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const slideIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.6, ease: "easeOut" },
    },
});

const MyServices = () => {
    return (
        <section id="myservices" className="bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 overflow-hidden">
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h3 className="text-sm text-purple-300 uppercase font-semibold tracking-wider mb-2">
                        My Services
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What can I do</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Any type of commercial or personal photo or video shooting. Any
                        conditions, a personalized approach to each.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Service 1 */}
                    <motion.div
                        className="text-center md:text-left"
                        variants={slideIn(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="text-purple-500 text-4xl font-bold mb-4">1</h1>
                        <h3 className="text-lg font-semibold mb-2">Wedding Photography</h3>
                        <p className="text-gray-400">
                            Capture Your Most Unforgettable Moments In Tender And Emotional
                            Frames – Wedding Photography That Will Stay With You Forever
                        </p>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        className="text-center md:text-left border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-6"
                        variants={slideIn(0.4)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="text-purple-500 text-4xl font-bold mb-4">2</h1>
                        <h3 className="text-lg font-semibold mb-2">Commercial Photography</h3>
                        <p className="text-gray-400">
                            Elevate Your Brand With Stunning Commercial Photography That Tells
                            Your Unique Story And Captures Your Product In Its Best Light
                        </p>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        className="text-center md:text-left border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-6"
                        variants={slideIn(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="text-purple-500 text-4xl font-bold mb-4">3</h1>
                        <h3 className="text-lg font-semibold mb-2">Video Production</h3>
                        <p className="text-gray-400">
                            Transform Your Ideas Into Captivating Visual Stories With My
                            Expertise In Video Production. Let's Bring Your Vision To Life
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MyServices;
