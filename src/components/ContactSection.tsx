import { MapPin, Phone, Clock, MessageCircle, Mail, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: isRTL ? "العنوان" : "Address",
      details: isRTL
        ? ["مركز الوصل للأعمال", "شارع الوصل، جميرا 1", "دبي، الإمارات العربية المتحدة"]
        : ["Al Wasl Business Center", "Al Wasl Road, Jumeirah 1", "Dubai, UAE"],
    },
    {
      icon: Clock,
      title: isRTL ? "ساعات العمل" : "Working Hours",
      details: isRTL
        ? ["السبت - الخميس: 9:00 ص - 9:00 م", "الجمعة: 2:00 م - 9:00 م"]
        : ["Saturday - Thursday: 9:00 AM - 9:00 PM", "Friday: 2:00 PM - 9:00 PM"],
    },
    {
      icon: Phone,
      title: isRTL ? "اتصلي بنا" : "Call Us",
      details: ["+971 50 123 4567", "+971 4 123 4567"],
    },
    {
      icon: Mail,
      title: isRTL ? "البريد الإلكتروني" : "Email",
      details: ["info@nooralhayat.ae", "booking@nooralhayat.ae"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            {t("contact.title")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {isRTL ? (
              <>نسعد <span className="text-primary">بخدمتك</span></>
            ) : (
              <>We're Happy to <span className="text-primary">Serve You</span></>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-card rounded-2xl p-6 shadow-card hover:shadow-rose transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-bold transition-all duration-300 hover:bg-green-600 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {isRTL ? "واتساب" : "WhatsApp"}
              </a>
              <a
                href="tel:+971501234567"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-rose"
              >
                <Phone className="w-5 h-5" />
                {isRTL ? "اتصلي الآن" : "Call Now"}
              </a>
              <a
                href="https://instagram.com/nooralhayat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg"
              >
                <Instagram className="w-5 h-5" />
                {isRTL ? "انستقرام" : "Instagram"}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-card h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785393012045!2d55.2671!3d25.1976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sJumeirah%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={isRTL ? "موقع صالون نور الحياة" : "Noor Al-Hayat Salon Location"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
