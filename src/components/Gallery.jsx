import { motion } from "framer-motion";
import "./Gallery.css";

import img1 from "../assets/gallery-1.png";
import img2 from "../assets/gallery-2.png";
import img3 from "../assets/gallery-3.png";
import img4 from "../assets/gallery-4.png";
import img5 from "../assets/gallery-5.png";
import img6 from "../assets/gallery-6.png";

const photos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
];

function Gallery() {
  return (
    <section className="gallery-section">

      <p className="gallery-subtitle">
        OUR MEMORIES
      </p>

      <h2 className="gallery-title">
        Moments We Treasure
      </h2>

      <div className="gallery-grid">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`gallery-item item-${index + 1}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1
            }}
          >
            <img src={photo} alt="" />
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;