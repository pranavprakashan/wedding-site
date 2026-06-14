import { motion } from "framer-motion";

function Story() {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center justify-center px-8">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >

        <div className="w-32 h-px bg-yellow-500 mx-auto mb-10"></div>

        <p className="tracking-[8px] text-yellow-500 text-sm mb-6">
          OUR STORY
        </p>

        <h2 className="text-white text-3xl md:text-5xl leading-relaxed font-light">
          “Every love story is beautiful,
          <br />
          but ours is my favorite.”
        </h2>

        <p className="text-slate-400 mt-10 text-lg leading-8">
          From the first hello to forever,
          this is the journey that brought us here.
        </p>

        <div className="w-32 h-px bg-yellow-500 mx-auto mt-10"></div>

      </motion.div>

    </section>
  );
}

export default Story;