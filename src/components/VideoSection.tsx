import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-primary/20 glow-cyan-sm">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MjRzvF64Lyk"
              title="Permasize Discovery"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;