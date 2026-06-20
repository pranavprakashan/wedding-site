import { motion } from "framer-motion";
import "./Hero.css";

import couplePhoto from "../assets/sketch.png";
import FloatingParticles from "./FloatingParticles";

function Hero() {
  return (
    <section className="hero">

      <FloatingParticles />

      <motion.div
        className="hero-image-wrapper"
        initial={{
          opacity: 0,
          y: 40,
          scale: 1.03
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        transition={{
          duration: 2,
          ease: "easeOut"
        }}
      >
        <div className="hero-image-crop">
          <img
            src={couplePhoto}
            alt="Pranav and Doniya"
            className="hero-image"
          />
        </div>
      </motion.div>

      <div className="hero-content">

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.3,
            duration: 1
          }}
        >
          TWO SOULS • ONE STORY
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.6
          }}
        >
          Pranav
        </motion.h1>

        <motion.div
          className="hero-ampersand"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.8
          }}
        >
          &
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2
          }}
        >
          Doniya
        </motion.h1>

        <motion.div
          className="hero-divider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.2
          }}
        />

        <motion.p
          className="hero-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.4
          }}
        >
          30 AUGUST 2026
        </motion.p>

      </div>

    </section>
  );
}

export default Hero;