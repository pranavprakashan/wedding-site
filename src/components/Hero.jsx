import couplePhoto from "../assets/us.jpg";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import "./Hero.css";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#020B2D] flex items-center justify-center">

{/* Background Photo */}
{/* Background Photo */}
<motion.div
  className="hero-background"
  style={{
    backgroundImage: `url(${couplePhoto})`,
  }}
  initial={{
    opacity: 0,
    scale: 1.08,
  }}
  whileInView={{
    opacity: 0.18,
    scale: 1.03,
  }}
  viewport={{
    once: false,
    amount: 0.4,
  }}
  transition={{
    duration: 1.8,
    ease: [0.25, 0.46, 0.45, 0.94],
  }}
/>

{/* Dark Overlay */}
<motion.div
  className="hero-overlay"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{
    once: false,
    amount: 0.4,
  }}
  transition={{
    duration: 1.8,
  }}
/>

      {/* Glow */}
      <div className="absolute inset-0 hero-glow" />

      {/* Floating Stars */}
      <div className="stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Content */}
{/* Content */}
<div className="relative z-10 text-center px-6 sm:px-8">

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="
      tracking-[6px]
      sm:tracking-[8px]
      md:tracking-[12px]
      text-yellow-400
      text-[10px]
      sm:text-xs
      md:text-base
      mb-8
      md:mb-10
      uppercase
    "
  >
    • Two Souls • One Story •  
  </motion.p>

  <div className="hero-couple">
    <h1 className="hero-name">
      {weddingData.groom}
    </h1>

    <span className="hero-symbol">
      ✦
    </span>

    <h1 className="hero-name">
      {weddingData.bride}
    </h1>
  </div>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
    className="
      mt-8
      md:mt-10
      tracking-[3px]
      sm:tracking-[5px]
      md:tracking-[8px]
      text-yellow-200
      text-xs
      sm:text-sm
      md:text-base
    "
  >
    {weddingData.date}
  </motion.p>

  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 2,
    }}
    className="
      mt-10
      md:mt-14
      text-yellow-300
      text-2xl
      md:text-3xl
    "
  >
    ❦
  </motion.div>

</div>

    </section>
  );
}

export default Hero;