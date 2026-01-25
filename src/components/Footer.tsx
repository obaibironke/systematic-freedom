import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Framework", href: "#framework" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-border/50 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#home" className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg text-foreground">
                    PERMASIZE
                  </span>
                </div>
              </a>
              <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                Helping B2B companies scale revenue by making owners replaceable 
                through systematic documentation and intelligent delegation.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground-muted text-sm">
                    Colorado Springs, CO
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:hello@permasize.com"
                    className="text-foreground-muted hover:text-primary transition-colors text-sm"
                  >
                    hello@permasize.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground-muted text-sm">
                    Tue-Thu, 9AM-5PM MT
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} Permasize. All rights reserved.
          </p>
          <p className="text-foreground-muted text-sm">
            Human Intelligence First. Artificial Intelligence Second.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
