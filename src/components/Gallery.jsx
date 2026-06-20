import { motion } from "framer-motion";
import "./Gallery.css";

import img1 from "../assets/gallery-1.jpg";
import img2 from "../assets/gallery-2.jpg";
import img3 from "../assets/gallery-3.jpg";
import img4 from "../assets/gallery-4.jpg";
import img5 from "../assets/gallery-5.jpg";
import img6 from "../assets/gallery-6.jpg";

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