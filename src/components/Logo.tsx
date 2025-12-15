import { Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Logo = ({ className = "" }: { className?: string }) => {
  const { language } = useLanguage();
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-glow flex items-center justify-center shadow-rose">
          <Heart className="w-6 h-6 text-primary-foreground fill-primary-foreground/30" />
          <Sparkles className="w-3 h-3 text-accent absolute top-1 right-1" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-secondary">
          {language === "ar" ? "محبات الجمال" : "Beauty Lovers"}
        </span>
        <span className="text-xs text-muted-foreground">
          {language === "ar" ? "صالون للسيدات" : "Ladies Salon"}
        </span>
      </div>
    </div>
  );
};

export default Logo;
