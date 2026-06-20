import { motion } from "framer-motion";

function Invitation() {
  return (
    <section className="invitation-section">

      <motion.p
        className="invitation-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        WITH JOYFUL HEARTS
      </motion.p>

      <motion.h2
        className="invitation-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        We Invite You
      </motion.h2>

      <motion.p
        className="invitation-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 1
        }}
      >
        Together with our families,
        we joyfully invite you to celebrate
        the beginning of our forever.
      </motion.p>

<div className="ring-divider">

  <motion.div
    className="ring"
    initial={{ x: -40, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 1
    }}
  >
    ○
  </motion.div>

<motion.div
  className="heart"
  initial={{ scale: 0 }}
  whileInView={{
    scale: [1, 1.15, 1]
  }}
  viewport={{ once: true }}
  transition={{
    delay: 0.6,
    duration: 1.2
  }}
>
  ♥
</motion.div>

  <motion.div
    className="ring"
    initial={{ x: 40, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 1
    }}
  >
    ○
  </motion.div>

</div>

      <motion.p
        className="invitation-text invitation-text-small"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 1
        }}
      >
        Your presence, love and blessings
        would mean the world to us.
      </motion.p>

    </section>
  );
}

export default Invitation;