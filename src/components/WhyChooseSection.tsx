import { motion } from "framer-motion";
import { Heart, Cpu, LineChart, Rocket, Zap, Brain } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "We Care About Your Success",
    description:
      "We're not typical consultants who drop a report and disappear. We implement alongside you, ensuring real results.",
  },
  {
    icon: Cpu,
    title: "Technology + Human Intelligence",
    description:
      "We combine 18+ years of enterprise technology experience with a human-first approach. AI enhances, but people lead.",
  },
  {
    icon: LineChart,
    title: "Proven Methodology",
    description:
      "Our approach has helped companies reduce turnover by 77% (from 38% to 8.7%) and increase team retention by 670%.",
  },
  {
    icon: Rocket,
    title: "Exit-Ready Businesses",
    description:
      "Every system we build increases your company's valuation. When you're replaceable, your business becomes sellable.",
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description:
      "Most consultants take months to analyze. We start documenting and delegating within the first week.",
  },
  {
    icon: Brain,
    title: "Human Intelligence First",
    description:
      "We believe people are the heart of every business. Technology should enhance human capability, not replace it.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Why Choose Permasize
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Built Different
          </h2>
          <p className="text-lg text-foreground-muted">
            We're not just consultants-we're implementation partners who 
            care deeply about your success.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 border-glow-hover group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
