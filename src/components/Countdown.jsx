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
   <section
  className="
    section-ivory
    py-20
    md:py-32
    px-4
    sm:px-6
    md:px-8
  "
>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-6xl mx-auto text-center"
      >

        <p
  className="
    tracking-[4px]
    sm:tracking-[6px]
    md:tracking-[8px]
    text-amber-700
    text-xs
    sm:text-sm
    mb-4
    md:mb-6
    uppercase
  "
>
          Counting Down
        </p>  

        <h2
          className="
  text-3xl
  sm:text-4xl
  md:text-5xl
  lg:text-7xl
  text-slate-800
  mb-10
  md:mb-16
"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Until Forever Begins
        </h2>

        <div
  className="
    grid
    grid-cols-2
    md:grid-cols-4
    gap-3
    sm:gap-4
    md:gap-6
  "
>

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
    <div
  className="
    countdown-card
    min-h-[130px]
    md:min-h-[180px]
  "
>

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