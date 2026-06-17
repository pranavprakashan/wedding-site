import { motion } from "framer-motion";

function WeddingDetails() {
  return (
    <section className="py-24 px-6 wedding-details-section">

   <motion.div
  className="details-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 1 }}
>

  <motion.div
    className="ornament"
    animate={{ rotate: [0, 8, -8, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity
    }}
  >
    💍
  </motion.div>

  <div className="date-showcase">

    <span className="date-day">
      30
    </span>

    <span className="date-month">
      AUGUST
    </span>

    <span className="date-year">
      2026
    </span>

  </div>

  <motion.div
    className="gold-divider"
    initial={{ width: 0 }}
    whileInView={{ width: 140 }}
    viewport={{ once: false }}
    transition={{ duration: 1.2 }}
  />

  <div className="venue-block">

    <h3 className="venue-name">
      Aurea Auditorium
    </h3>

    <p className="venue-address">
      Thalassery
    </p>

  </div>

  <div className="muhurtham-box">

    <span>Muhurtham</span>

    <h4>
      11:15 AM – 12:00 PM
    </h4>

  </div>

  <a
    href="https://maps.app.goo.gl/BJa1JjhxRM7nx6PT9"
    target="_blank"
    rel="noreferrer"
    className="map-button"
  >
    📍 Open in Google Maps
  </a>

</motion.div>

    </section>
  );
}

export default WeddingDetails;