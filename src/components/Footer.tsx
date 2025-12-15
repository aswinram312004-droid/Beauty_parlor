import { Heart, Sparkles, Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, isRTL, language } = useLanguage();

  const quickLinks = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.packages"), href: "#packages" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.testimonials"), href: "#testimonials" },
    { label: t("nav.booking"), href: "#booking" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-rose-glow flex items-center justify-center shadow-rose">
                  <Heart className="w-7 h-7 text-primary-foreground fill-primary-foreground/30" />
                  <Sparkles className="w-4 h-4 text-accent absolute top-1 right-1" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold">
                  {language === "ar" ? "محبات الجمال" : "Beauty Lovers"}
                </span>
                <div className="text-sm text-primary-foreground/70">
                  {language === "ar" ? "صالون للسيدات" : "Ladies Salon"}
                </div>
              </div>
            </div>

            <p className="text-primary-foreground/80 text-lg mb-6 max-w-md leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/beautylovers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/beautylovers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/beautylovers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t("footer.contactInfo")}</h3>
            <div className="space-y-3 text-primary-foreground/70">
              <p>{language === "ar" ? "شارع الوصل، جميرا 1" : "Al Wasl Road, Jumeirah 1"}</p>
              <p>{language === "ar" ? "دبي، الإمارات العربية المتحدة" : "Dubai, UAE"}</p>
              <p dir="ltr" className={isRTL ? "text-right" : "text-left"}>+971 50 123 4567</p>
              <p>info@beautylovers.ae</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} {language === "ar" ? "صالون محبات الجمال للسيدات" : "Beauty Lovers Ladies Salon"}. {t("footer.rights")}.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              {t("footer.madeWith")} <Heart className="w-4 h-4 text-primary fill-primary" /> {t("footer.inDubai")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
