import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glow orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground-muted">
              Human Intelligence First. Artificial Intelligence Second.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Be </span>
            <span className="text-gradient-cyan glow-cyan-text">Replaceable</span>
          </motion.h1>

          {/* Framework Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-3 sm:gap-6 mb-8"
          >
            {["Document", "Delegate", "Scale"].map((word, index) => (
              <div key={word} className="flex items-center">
                <span className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground-muted hover:text-primary transition-colors duration-300">
                  {word}
                </span>
                {index < 2 && (
                  <span className="text-primary text-2xl sm:text-3xl">, </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We help businesses scale revenue by transforming tribal knowledge into documented systems, then delegate and automate to multiply results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => window.open("https://calendly.com/emmanuelking2525/permasize_discovery_session?", "_blank")}
            >
              Get Your Free System Analysis
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="group"
              onClick={() => window.open("https://documentation.permasize.com/", "_blank")}
            >
              <Play className="w-5 h-5" />
              See How It Works
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "20-40", label: "Hours Reclaimed/Week" },
              { value: "2-10x", label: "Valuation Increase" },
              { value: "77%", label: "Turnover Reduction" },
              { value: "2x", label: "Revenue in 18-24mo" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="font-display text-3xl sm:text-4xl font-bold text-primary glow-cyan-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground-muted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
