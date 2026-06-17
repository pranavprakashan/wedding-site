import { motion } from "framer-motion";

function Story() {
  return (
    <section
      className="
        min-h-screen
        bg-slate-900
        flex
        items-center
        justify-center
        px-5
        sm:px-8
        md:px-12
        py-20
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="
          max-w-4xl
          mx-auto
          text-center
        "
      >

        <div
          className="
            w-20
            md:w-32
            h-px
            bg-yellow-500
            mx-auto
            mb-8
            md:mb-10
          "
        />

        <p
          className="
            tracking-[4px]
            sm:tracking-[6px]
            md:tracking-[8px]
            text-yellow-500
            text-xs
            sm:text-sm
            mb-4
            md:mb-6
          "
        >
          OUR STORY
        </p>

        <h2
          className="
            text-white
            text-2xl
            sm:text-3xl
            md:text-5xl
            leading-relaxed
            font-light
          "
        >
          Every love story is beautiful,
          <br className="hidden sm:block" />
          but ours is my favorite.
        </h2>

        <p
          className="
            text-slate-400
            mt-6
            md:mt-10
            text-base
            md:text-lg
            leading-7
            md:leading-8
            max-w-2xl
            mx-auto
          "
        >
          From the first hello to forever,
          this is the journey that brought us here.
        </p>

        <div
          className="
            w-20
            md:w-32
            h-px
            bg-yellow-500
            mx-auto
            mt-8
            md:mt-10
          "
        />

      </motion.div>
    </section>
  );
}

export default Story;