import { motion } from "framer-motion";
import "./Couple.css";

function Couple() {
  return (
    <section className="couple-section">

      <motion.p
        className="couple-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        THE COUPLE
      </motion.p>

      <motion.div
        className="couple-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="couple-container">

        <motion.div
          className="person-card"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="role">Groom</span>

          <h2 className="person-name">
            Pranav Prakashan 
          </h2>

          <p className="relation">
            Son of
          </p>

          <p className="parents">
            Prakashan P M
            <br />
            &
            <br />
            Praseena K V
          </p>
        </motion.div>

 <div className="couple-center">♡</div>

        <motion.div
          className="person-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="role">Bride</span>

          <h2 className="person-name">
            Doniya Sajeevan
          </h2>

          <p className="relation">
            Daughter of
          </p>

          <p className="parents">
            Sajeevan M
            <br />
            &
            <br />
            Shini Sajeevan
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default Couple;