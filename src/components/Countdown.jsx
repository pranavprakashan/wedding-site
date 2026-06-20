import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Countdown.css";

function Countdown() {

  const weddingDate = new Date("2026-08-30T11:15:00");

  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">

      <div className="countdown-bg-number">
        {timeLeft.days}
      </div>

      <motion.p
        className="countdown-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        UNTIL FOREVER BEGINS
      </motion.p>

      <motion.h2
        className="countdown-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {timeLeft.days}
      </motion.h2>

      <p className="countdown-days-label">
        DAYS
      </p>

      <div className="countdown-grid">

        <motion.div
          className="time-card"
          whileHover={{ y: -6 }}
        >
          <span>{timeLeft.hours}</span>
          <small>Hours</small>
        </motion.div>

        <motion.div
          className="time-card"
          whileHover={{ y: -6 }}
        >
          <span>{timeLeft.minutes}</span>
          <small>Minutes</small>
        </motion.div>

        <motion.div
          className="time-card"
          whileHover={{ y: -6 }}
        >
          <span>{timeLeft.seconds}</span>
          <small>Seconds</small>
        </motion.div>

      </div>

      <div className="countdown-heart">
        ♡
      </div>

      <p className="countdown-message">
        Every passing moment brings us closer
        to our forever.
      </p>

    </section>
  );
}

export default Countdown;