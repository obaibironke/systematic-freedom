import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background with strong glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark to-background" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      {/* Animated glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground-muted">
              Free 30-Minute Consultation
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Stop Being the{" "}
            <span className="text-gradient-cyan glow-cyan-text">Bottleneck?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Schedule a free consultation to discuss how our Document , Delegate , Scale 
            framework can transform your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
              onClick={() => window.open("https://calendly.com/emmanuelking2525/permasize_discovery_session?", "_blank")}
            >
              Contact Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border/50">
            {[
              { label: "Implementation Start", value: "Week 1" },
              { label: "Average Time Saved", value: "30+ hrs/week" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Valuation Increase", value: "2-10x" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display text-2xl font-bold text-primary mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-foreground-muted">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
