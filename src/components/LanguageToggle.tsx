import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-card/20 backdrop-blur-sm hover:bg-card/30 transition-all duration-300 text-sm font-medium"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span>{language === "ar" ? "EN" : "عربي"}</span>
    </button>
  );
};

export default LanguageToggle;
