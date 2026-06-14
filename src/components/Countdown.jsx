import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Countdown.css";

function Countdown() {
  const weddingDate = new Date("August 30, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#020B2D] py-32 px-6">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-6xl mx-auto text-center"
      >

        <p className="tracking-[8px] text-yellow-400 mb-6 uppercase">
          Counting Down
        </p>

        <h2
          className="text-5xl md:text-7xl text-yellow-100 mb-16"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Until Forever Begins
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <CountdownCard
            value={timeLeft.days}
            label="Days"
          />

          <CountdownCard
            value={timeLeft.hours}
            label="Hours"
          />

          <CountdownCard
            value={timeLeft.minutes}
            label="Minutes"
          />

          <CountdownCard
            value={timeLeft.seconds}
            label="Seconds"
          />

        </div>

      </motion.div>
    </section>
  );
}

function CountdownCard({ value, label }) {
  return (
    <div className="countdown-card">

      <div className="countdown-number">
        {value}
      </div>

      <div className="countdown-label">
        {label}
      </div>

    </div>
  );
}

export default Countdown;