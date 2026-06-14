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
    <section className="bg-slate-950 py-32 px-6">

      <h2 className="text-center text-yellow-400 text-6xl mb-24">
        Our Journey
      </h2>

      <div className="max-w-5xl mx-auto relative">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-yellow-500/40 -translate-x-1/2"></div>

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`mb-24 flex items-center ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
          >
            <div className="w-full md:w-[45%] bg-slate-900 border border-yellow-500/20 rounded-2xl p-8 shadow-xl">

              <p className="text-yellow-400 mb-2">
                {event.date}
              </p>

              <h3 className="text-3xl text-white mb-4">
                {event.title}
              </h3>

              <p className="text-slate-300">
                {event.desc}
              </p>

            </div>

            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-yellow-400 rounded-full border-4 border-slate-950"></div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Timeline;