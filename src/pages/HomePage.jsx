import React from "react";
import { motion } from "framer-motion";
import ContactUs from "../components/ContactUs";
import MiddlePage from "./MiddlePage";
import AILogo from "../assets/bg-aiexecute.png";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 lg:scale-110 xl:scale-120 transition-transform duration-500">
      <motion.img
        src={AILogo}
        alt="AIExecute Logo"
        className="w-72 sm:w-80 md:w-[22rem] lg:w-[26rem] xl:w-[28rem] h-auto mb-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.p
        className="text-white text-sm sm:text-base md:text-lg lg:text-base xl:text-base sm:max-w-md md:max-w-2xl lg:max-w-xl tracking-widest font-light uppercase mb-8"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        YOUR ONE-STOP PLATFORM TO BUILD AI,
        <br className="sm:hidden" /> DRIVE INNOVATION AND LEARN TECH
        <br className="sm:hidden" /> SHAPING THE FUTURE.
      </motion.p>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="rainbow-text font-semibold tracking-[0.2em] sm:tracking-[0.35em] text-sm sm:text-base md:text-lg lg:text-base uppercase whitespace-nowrap">
          Learn • Build • Grow • Execute
        </p>
      </motion.div>
    </div>
  );
};



const HomePage = () => {
  return (
    <div className="home-background relative overflow-hidden bg-transparent">
      <HeroSection />
      <div className="bg-inherit relative z-10">
        <section id="middle">
          <MiddlePage />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
