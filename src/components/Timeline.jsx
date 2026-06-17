import { motion } from "framer-motion";

const events = [
  {
    date: "December 2025",
    title: "Engagement",
    desc: "A promise for a lifetime.",
  },
  {
    date: "August 2026",
    title: "Wedding",
    desc: "The day our forever begins.",
  },
];

function Timeline() {
  return (
    <section
      className="
        bg-slate-950
        py-20
        md:py-32
        px-4
        sm:px-6
        md:px-8
      "
    >
      <h2
        className="
          text-center
          text-yellow-400
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          mb-16
          md:mb-24
        "
      >
        Our Journey
      </h2>

      <div className="max-w-5xl mx-auto relative">

        {/* Desktop Center Line */}
        <div
          className="
            hidden
            md:block
            absolute
            left-1/2
            top-0
            h-full
            w-[2px]
            bg-yellow-500/40
            -translate-x-1/2
          "
        />

        {/* Mobile Line */}
        <div
          className="
            md:hidden
            absolute
            left-4
            top-0
            h-full
            w-[2px]
            bg-yellow-500/40
          "
        />

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`
              relative
              mb-12
              md:mb-24
              flex
              ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }
            `}
          >
            {/* Dot */}
            <div
              className="
                absolute
                left-4
                md:left-1/2
                top-8
                md:-translate-x-1/2
                w-4
                h-4
                md:w-5
                md:h-5
                bg-yellow-400
                rounded-full
                border-4
                border-slate-950
              "
            />

            <div
              className="
                ml-12
                md:ml-0
                w-full
                md:w-[45%]
                bg-slate-900
                border
                border-yellow-500/20
                rounded-2xl
                p-5
                md:p-8
                shadow-xl
              "
            >
              <p
                className="
                  text-yellow-400
                  text-sm
                  md:text-base
                  mb-2
                "
              >
                {event.date}
              </p>

              <h3
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  text-white
                  mb-3
                "
              >
                {event.title}
              </h3>

              <p
                className="
                  text-slate-300
                  text-sm
                  md:text-base
                "
              >
                {event.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;