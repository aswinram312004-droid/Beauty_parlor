import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const navLinks = [
    { href: "#hero", label: t("nav.home") },
    { href: "#services", label: t("nav.services") },
    { href: "#packages", label: t("nav.packages") },
    { href: "#about", label: t("nav.about") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#loyalty", label: t("nav.loyalty") },
    { href: "#booking", label: t("nav.booking") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-beauty shadow-soft py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm relative group"
              >
                {link.label}
                <span className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`} />
              </button>
            ))}
          </div>

          {/* CTA Button & Language Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <a
              href="tel:+971501234567"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+971 50 123 4567</span>
            </a>
            <button
              onClick={() => handleNavClick("#booking")}
              className="btn-primary text-sm py-3 px-6"
            >
              {t("nav.bookNow")}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-card rounded-2xl p-6 shadow-card space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full ${isRTL ? 'text-right' : 'text-left'} text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 border-b border-border/50 last:border-0`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#booking")}
              className="btn-primary w-full text-center mt-4"
            >
              {t("nav.bookNow")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
