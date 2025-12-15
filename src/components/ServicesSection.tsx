import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceSkincare from "@/assets/service-skincare.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceMassage from "@/assets/service-massage.jpg";

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      id: 1,
      title: t("service.makeup.title"),
      description: t("service.makeup.desc"),
      duration: 60,
      price: 350,
      image: serviceMakeup,
    },
    {
      id: 2,
      title: t("service.bridal.title"),
      description: t("service.bridal.desc"),
      duration: 120,
      price: 1200,
      image: serviceBridal,
    },
    {
      id: 3,
      title: t("service.skincare.title"),
      description: t("service.skincare.desc"),
      duration: 90,
      price: 400,
      image: serviceSkincare,
    },
    {
      id: 4,
      title: t("service.hair.title"),
      description: t("service.hair.desc"),
      duration: 90,
      price: 300,
      image: serviceHair,
    },
    {
      id: 5,
      title: t("service.nails.title"),
      description: t("service.nails.desc"),
      duration: 60,
      price: 150,
      image: serviceNails,
    },
    {
      id: 6,
      title: t("service.massage.title"),
      description: t("service.massage.desc"),
      duration: 60,
      price: 350,
      image: serviceMassage,
    },
  ];

  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            {t("services.title")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {isRTL ? (
              <>تجربة جمال <span className="text-primary">فاخرة</span> ومتكاملة</>
            ) : (
              <>A <span className="text-primary">Luxurious</span> Complete Beauty Experience</>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-rose hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Price Badge */}
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-sm shadow-gold`}>
                  {t("services.from")} {service.price} {t("services.currency")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration} {t("services.duration")}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {service.description}
                </p>

                <button
                  onClick={scrollToBooking}
                  className="w-full flex items-center justify-center gap-2 bg-muted text-foreground py-3 rounded-xl font-medium transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  {t("services.book")}
                  <ArrowIcon className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
