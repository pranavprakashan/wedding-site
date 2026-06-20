import { motion } from "framer-motion";
import "./WeddingDetails.css";

function WeddingDetails() {
  return (
    <section className="details-section">

      <div className="details-container">

        {/* LEFT SIDE */}

        <motion.div
          className="details-date"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >

          <div className="date-circle"></div>

          <div className="date-sparkle sparkle-1">✦</div>
          <div className="date-sparkle sparkle-2">✦</div>
          <div className="date-sparkle sparkle-3">✦</div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              type: "spring"
            }}
          >
            30
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            AUGUST
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            2026
          </motion.span>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          className="details-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >

          <div className="watermark">
            ❀
          </div>

          <motion.div
            className="details-divider"
            initial={{ width: 0 }}
            whileInView={{ width: 180 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="divider-star">✦</span>
          </motion.div>

          <motion.h3
            className="venue-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Aurea Auditorium
          </motion.h3>

          <motion.p
            className="venue-location"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Opposite KINFRA Small Industries Park
            <br />
            Chungam, Eranholi
            <br />
            Thalassery
          </motion.p>

          <motion.div
            className="muhurtham-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >

            <span>Muhurtham</span>

            <h4>11:15 AM – 12:00 PM</h4>

          </motion.div>

          <motion.a
            href="https://maps.app.goo.gl/BJa1JjhxRM7nx6PT9"
            target="_blank"
            rel="noreferrer"
            className="venue-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <span className="pin">📍</span>

            Open Venue

          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}

export default WeddingDetails;