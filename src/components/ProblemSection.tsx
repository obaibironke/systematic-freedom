import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  "Your business can't run without you",
  "You work 60+ hour weeks with no end in sight",
  "New hires take forever to train (because nothing is documented)",
  "You've tried to delegate but it always comes back to you",
  "Your company valuation is lower because you're irreplaceable",
  "You can't take a real vacation without everything falling apart",
  "Growth feels impossible because you're maxed out",
];

const ProblemSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-destructive/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
              The Problem We Solve
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Does This Sound Like{" "}
              <span className="text-gradient-cyan">You?</span>
            </h2>
          </motion.div>

          {/* Problems Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 lg:p-12 mb-12"
          >
            <div className="grid gap-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-destructive/5 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center group-hover:bg-destructive/30 transition-colors">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground-muted text-lg group-hover:text-foreground transition-colors">
                    {problem}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Root Cause & Solution */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Root Cause */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-8 border border-destructive/20"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                The Root Cause
              </h3>
              <p className="text-foreground-muted text-lg leading-relaxed">
                Your business processes live in your head, not in documented systems.
                Critical knowledge is trapped, making you the bottleneck to your own success.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-8 border border-primary/30"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Check className="w-6 h-6 text-primary" />
                The Solution
              </h3>
              <p className="text-foreground-muted text-lg leading-relaxed mb-6">
                Permasize transforms tribal knowledge into executable systems. 
                We document, delegate, and scale - so you can work ON your business, not IN it.
              </p>
              <Button 
                variant="hero" 
                className="group"
                onClick={() => window.open("https://calendly.com/emmanuelking2525/permasize_discovery_session?", "_blank")}
              >
                Start Unbottling
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
