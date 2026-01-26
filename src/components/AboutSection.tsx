import { motion } from "framer-motion";
import { Quote, CheckCircle } from "lucide-react";

const achievements = [
  "18+ years in enterprise technology & process optimization",
  "SAP, CRM, ERP implementations at scale",
  "Business process documentation expert",
  "AI integration & automation strategist",
  "Helped companies increase valuation 2-10x",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-dark" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
                
                {/* Main card */}
                <div className="relative glass rounded-3xl p-8 lg:p-10 h-full flex flex-col justify-center border border-primary/20">
                  <Quote className="w-12 h-12 text-primary/50 mb-6" />
                  <blockquote className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-relaxed mb-6">
                    "If you can't make yourself replaceable, your business will run your life."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                      EK
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Emmanuel King</div>
                      <div className="text-sm text-foreground-muted">Founder, Permasize</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                About the Founder
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
                18 Years of Making Businesses Run Better
              </h2>
              <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                For 18 years, Emmanuel King has helped enterprise companies scale by implementing 
                technology and documenting business processes at every level. From SAP implementations 
                to AI integrations, he's seen what works - and what doesn't.
              </p>
              <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
                The pattern is clear: businesses that scale are the ones where knowledge 
                doesn't live in people's heads - it lives in systems. That's why Permasize 
                was founded.
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground-muted">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
