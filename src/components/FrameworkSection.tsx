import { motion } from "framer-motion";
import { FileText, Users, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Document",
    subtitle: "Unbottle Your Business",
    description:
      "We transform the knowledge trapped in your head into clear, step-by-step systems that anyone can follow.",
    features: [
      "Video-documented workflows",
      "Written SOPs",
      "Process maps for every function",
      "Searchable documentation library",
    ],
    icon: FileText,
    output: "A complete operations manual that makes you replaceable",
  },
  {
    number: "02",
    title: "Delegate",
    subtitle: "Free Your Time, Multiply Your Impact",
    description:
      "With documented systems in place, we identify what should be delegated to people versus automated with technology.",
    features: [
      "Task analysis & delegation planning",
      "Skilled virtual assistant placement",
      "Training programs for team members",
      "Delegation intelligence frameworks",
    ],
    icon: Users,
    output: "20-40 hours reclaimed per week for strategic work",
  },
  {
    number: "03",
    title: "Scale",
    subtitle: "Do More of What Works",
    description:
      "Now that you're free from daily operations, we help you double down on revenue-generating activities.",
    features: [
      "Process optimization & automation",
      "AI-powered workflow enhancement",
      "Growth strategy implementation",
      "Continuous improvement systems",
    ],
    icon: TrendingUp,
    output: "Sustainable revenue growth-many clients double revenue within 12-24 months",
  },
];

const FrameworkSection = () => {
  return (
    <section id="framework" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-dark to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            The Framework
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Document → Delegate → Scale
          </h2>
          <p className="text-lg text-foreground-muted">
            Our proven three-step methodology transforms chaotic, owner-dependent 
            businesses into systematic, scalable machines.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div className="flex-1 w-full">
                <div className="glass rounded-2xl p-8 lg:p-12 border-glow-hover group">
                  {/* Step number and title */}
                  <div className="flex items-start gap-6 mb-6">
                    <span className="font-display text-6xl lg:text-7xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-primary font-medium">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Output */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm text-primary font-medium uppercase tracking-wide">
                        Output
                      </span>
                      <p className="text-foreground mt-1">{step.output}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Icon visualization */}
              <div className="flex-1 w-full flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-64 h-64 lg:w-80 lg:h-80"
                >
                  {/* Outer glow rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl animate-glow-pulse" />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-xl" />
                  
                  {/* Icon container */}
                  <div className="absolute inset-12 rounded-full glass border border-primary/30 flex items-center justify-center">
                    <step.icon className="w-20 h-20 lg:w-24 lg:h-24 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "1s" }} />
                  <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1.5s" }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
