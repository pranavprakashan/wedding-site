import { motion } from "framer-motion";

function Invitation() {
  return (
    <section className="py-24 px-6 invitation-section">

      <div className="max-w-4xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            tracking-[8px]
            uppercase
            text-xs
            invitation-subtitle
          "
        >
          With Love & Blessings
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            invitation-title
            mt-6
          "
        >
          We Cordially Invite You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="
            invitation-text
            mt-8
          "
        >
          Together with our families, we invite you to join us
          as we celebrate the beginning of our forever.
          Your presence, love, and blessings will make our day
          truly unforgettable.
        </motion.p>

      </div>

    </section>
  );
}

export default Invitation;