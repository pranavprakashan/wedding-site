import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import "./Hero.css";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#020B2D] flex items-center justify-center">

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
      <div className="relative z-10 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="tracking-[12px] text-yellow-400 text-sm md:text-base mb-10 uppercase"
        >
          Two Souls • One Story
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
          className="mt-10 tracking-[8px] text-yellow-200 text-sm md:text-base"
        >
          {weddingData.date}
        </motion.p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-14 text-yellow-300 text-3xl"
        >
          ❦
        </motion.div>

      </div>

    </section>
  );
}

export default Hero;