import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.packages": "الباقات",
    "nav.about": "عن الصالون",
    "nav.testimonials": "آراء العميلات",
    "nav.loyalty": "نادي الجميلات",
    "nav.booking": "حجز موعد",
    "nav.contact": "تواصل معنا",
    "nav.bookNow": "احجزي الآن",
    
    // Hero
    "hero.title": "لمسات جمال ناعمة تعكس نقاء روحك",
    "hero.subtitle": "صالون نسائي راقٍ في دبي يقدم تجربة فاخرة من المكياج، العناية بالبشرة، الشعر والأظافر بأسلوب يحترم قيمك ويبرز جمالك الطبيعي.",
    "hero.cta1": "احجزي موعدك الآن",
    "hero.cta2": "استكشفي خدماتنا",
    "hero.rating": "تقييم جوجل",
    "hero.clients": "عميلة سعيدة",
    "hero.experience": "سنوات خبرة",
    
    // Mood Widget
    "mood.title": "ما هو مود جمالك اليوم؟",
    "mood.soft": "إطلالة ناعمة",
    "mood.evening": "لوك سهرة",
    "mood.bride": "عروس",
    "mood.relax": "أحتاج استرخاء",
    "mood.recommendation": "ننصحك بـ",
    "mood.book": "احجزي الآن",
    
    // Services
    "services.title": "خدماتنا المميزة",
    "services.subtitle": "نقدم لكِ مجموعة شاملة من خدمات التجميل والعناية بأعلى معايير الجودة والاحترافية",
    "services.book": "احجزي هذه الخدمة",
    "services.from": "من",
    "services.currency": "درهم",
    "services.duration": "دقيقة",
    
    "service.makeup.title": "مكياج مناسبات",
    "service.makeup.desc": "إطلالة ساحرة لكل مناسباتك الخاصة مع أفضل خبيرات المكياج",
    "service.bridal.title": "مكياج عرائس",
    "service.bridal.desc": "يوم زفافك يستحق الكمال، نصمم لكِ إطلالة أحلامك",
    "service.skincare.title": "عناية بالبشرة",
    "service.skincare.desc": "علاجات متقدمة لبشرة نضرة ومشرقة طوال العام",
    "service.hair.title": "تسريحات وصبغات",
    "service.hair.desc": "أحدث صيحات الشعر مع ألوان تناسب شخصيتك",
    "service.nails.title": "أظافر ومانيكير",
    "service.nails.desc": "تصاميم فنية راقية تكمل أناقتك",
    "service.massage.title": "مساج واسترخاء",
    "service.massage.desc": "استرخاء عميق يجدد طاقتك وحيويتك",
    
    // Packages
    "packages.title": "باقاتنا الحصرية",
    "packages.subtitle": "وفري أكثر مع باقاتنا المصممة خصيصاً لتلبية احتياجاتك",
    "packages.book": "احجزي الباقة",
    "packages.bestseller": "الأكثر مبيعاً",
    
    "package.bride.title": "باقة العروس الذهبية",
    "package.bride.price": "2,500",
    "package.bride.item1": "مكياج عروس فاخر",
    "package.bride.item2": "تسريحة شعر كاملة",
    "package.bride.item3": "مانيكير وبديكير",
    "package.bride.item4": "جلسة عناية بالبشرة",
    "package.bride.item5": "باقة ورد هدية",
    
    "package.monthly.title": "باقة العناية الشهرية",
    "package.monthly.price": "800",
    "package.monthly.item1": "4 جلسات تنظيف بشرة",
    "package.monthly.item2": "2 جلسة مساج",
    "package.monthly.item3": "مانيكير شهري",
    "package.monthly.item4": "خصم 15% على الخدمات",
    
    "package.evening.title": "باقة إطلالة المساء",
    "package.evening.price": "450",
    "package.evening.item1": "مكياج سهرة",
    "package.evening.item2": "تسريحة أنيقة",
    "package.evening.item3": "مانيكير سريع",
    "package.evening.item4": "عطر فاخر هدية",
    
    // About
    "about.title": "عن صالون محبات الجمال",
    "about.subtitle": "رحلة جمال تبدأ من القلب",
    "about.p1": "منذ 8 سنوات ونحن نسعى لنكون الملاذ الآمن لكل امرأة تبحث عن الجمال والراحة في آن واحد. صالون محبات الجمال ليس مجرد مكان للتجميل، بل هو مساحة تحترم خصوصيتك وقيمك.",
    "about.p2": "فريقنا من أمهر الخبيرات يجمعن بين الاحترافية والذوق الرفيع، ليقدمن لكِ تجربة فريدة تعكس جمالك الطبيعي دون مبالغة.",
    "about.value1": "نقاء - نؤمن بالجمال النقي والطبيعي",
    "about.value2": "احترام - خصوصيتك وقيمك أولويتنا",
    "about.value3": "راحة - بيئة هادئة ومريحة",
    "about.value4": "جمال طبيعي - نبرز جمالك لا نغيره",
    
    // Testimonials
    "testimonials.title": "ماذا قالت عميلاتنا",
    "testimonials.subtitle": "آراء حقيقية من سيدات اختبرن تجربة محبات الجمال",
    
    // Loyalty
    "loyalty.title": "نادي الجميلات",
    "loyalty.subtitle": "انضمي لنادينا الحصري واستمتعي بمزايا لا تنتهي",
    "loyalty.benefit1": "خصومات حصرية تصل إلى 25%",
    "loyalty.benefit2": "اجمعي نقاط مع كل زيارة",
    "loyalty.benefit3": "هدية مجانية في يوم ميلادك",
    "loyalty.benefit4": "أولوية الحجز في المواسم",
    "loyalty.name": "الاسم الكامل",
    "loyalty.phone": "رقم الجوال",
    "loyalty.email": "البريد الإلكتروني",
    "loyalty.join": "انضمي الآن",
    "loyalty.success": "تم تسجيلك بنجاح في نادي الجميلات!",
    
    // Gallery
    "gallery.title": "معرض أعمالنا",
    "gallery.subtitle": "لمحات من إبداعاتنا وأعمالنا المميزة",
    
    // Booking
    "booking.title": "احجزي موعدك",
    "booking.subtitle": "نحن بانتظارك لنقدم لكِ تجربة جمال استثنائية",
    "booking.name": "الاسم الكامل",
    "booking.phone": "رقم الجوال / واتساب",
    "booking.service": "اختيار الخدمة",
    "booking.selectService": "اختاري الخدمة",
    "booking.date": "التاريخ",
    "booking.time": "الوقت",
    "booking.selectTime": "اختاري الوقت",
    "booking.notes": "ملاحظات إضافية",
    "booking.notesPlaceholder": "أي طلبات خاصة أو ملاحظات...",
    "booking.submit": "تأكيد الحجز",
    "booking.whatsapp": "أو احجزي عبر واتساب",
    "booking.success": "تم استلام طلب حجزك بنجاح! سنتواصل معك قريباً",
    "booking.errorName": "الرجاء إدخال الاسم",
    "booking.errorPhone": "الرجاء إدخال رقم جوال صحيح",
    "booking.errorService": "الرجاء اختيار خدمة",
    "booking.errorDate": "الرجاء اختيار التاريخ",
    "booking.errorTime": "الرجاء اختيار الوقت",
    
    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "نسعد بزيارتك والإجابة على استفساراتك",
    "contact.address": "شارع الوصل، جميرا 1، دبي",
    "contact.hours": "السبت - الخميس: 10 صباحاً - 10 مساءً",
    "contact.friday": "الجمعة: 2 ظهراً - 10 مساءً",
    "contact.whatsapp": "تواصلي عبر واتساب",
    "contact.instagram": "تابعينا على انستغرام",
    
    // Footer
    "footer.tagline": "الجمال نعمة، والعناية بنفسك شكرٌ لها.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactInfo": "معلومات التواصل",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.madeWith": "صُنع بكل",
    "footer.inDubai": "في دبي",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.packages": "Packages",
    "nav.about": "About",
    "nav.testimonials": "Testimonials",
    "nav.loyalty": "Loyalty Club",
    "nav.booking": "Book Now",
    "nav.contact": "Contact",
    "nav.bookNow": "Book Now",
    
    // Hero
    "hero.title": "Gentle Beauty Touches That Reflect Your Pure Soul",
    "hero.subtitle": "An elegant ladies salon in Dubai offering a luxurious experience of makeup, skincare, hair and nails in a way that respects your values and highlights your natural beauty.",
    "hero.cta1": "Book Your Appointment",
    "hero.cta2": "Explore Our Services",
    "hero.rating": "Google Rating",
    "hero.clients": "Happy Clients",
    "hero.experience": "Years Experience",
    
    // Mood Widget
    "mood.title": "What's Your Beauty Mood Today?",
    "mood.soft": "Soft Look",
    "mood.evening": "Evening Glam",
    "mood.bride": "Bridal",
    "mood.relax": "Need Relaxation",
    "mood.recommendation": "We Recommend",
    "mood.book": "Book Now",
    
    // Services
    "services.title": "Our Premium Services",
    "services.subtitle": "We offer a comprehensive range of beauty and care services with the highest quality and professionalism standards",
    "services.book": "Book This Service",
    "services.from": "From",
    "services.currency": "AED",
    "services.duration": "min",
    
    "service.makeup.title": "Event Makeup",
    "service.makeup.desc": "A stunning look for all your special occasions with the best makeup artists",
    "service.bridal.title": "Bridal Makeup",
    "service.bridal.desc": "Your wedding day deserves perfection, we design your dream look",
    "service.skincare.title": "Skincare",
    "service.skincare.desc": "Advanced treatments for radiant and glowing skin all year round",
    "service.hair.title": "Hair Styling & Coloring",
    "service.hair.desc": "Latest hair trends with colors that match your personality",
    "service.nails.title": "Nails & Manicure",
    "service.nails.desc": "Elegant artistic designs that complete your elegance",
    "service.massage.title": "Massage & Relaxation",
    "service.massage.desc": "Deep relaxation that renews your energy and vitality",
    
    // Packages
    "packages.title": "Our Exclusive Packages",
    "packages.subtitle": "Save more with our packages designed specifically to meet your needs",
    "packages.book": "Book Package",
    "packages.bestseller": "Best Seller",
    
    "package.bride.title": "Golden Bridal Package",
    "package.bride.price": "2,500",
    "package.bride.item1": "Luxury bridal makeup",
    "package.bride.item2": "Complete hair styling",
    "package.bride.item3": "Manicure and pedicure",
    "package.bride.item4": "Skincare session",
    "package.bride.item5": "Complimentary flower bouquet",
    
    "package.monthly.title": "Monthly Care Package",
    "package.monthly.price": "800",
    "package.monthly.item1": "4 facial cleansing sessions",
    "package.monthly.item2": "2 massage sessions",
    "package.monthly.item3": "Monthly manicure",
    "package.monthly.item4": "15% discount on services",
    
    "package.evening.title": "Evening Look Package",
    "package.evening.price": "450",
    "package.evening.item1": "Evening makeup",
    "package.evening.item2": "Elegant hairstyle",
    "package.evening.item3": "Quick manicure",
    "package.evening.item4": "Luxury perfume gift",
    
    // About
    "about.title": "About Beauty Lovers Salon",
    "about.subtitle": "A Beauty Journey That Starts From The Heart",
    "about.p1": "For 8 years, we have strived to be the safe haven for every woman seeking beauty and comfort at the same time. Beauty Lovers Salon is not just a beauty place, but a space that respects your privacy and values.",
    "about.p2": "Our team of skilled experts combines professionalism and refined taste to offer you a unique experience that reflects your natural beauty without exaggeration.",
    "about.value1": "Purity - We believe in pure and natural beauty",
    "about.value2": "Respect - Your privacy and values are our priority",
    "about.value3": "Comfort - A calm and comfortable environment",
    "about.value4": "Natural Beauty - We enhance your beauty, not change it",
    
    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Real reviews from ladies who experienced Beauty Lovers",
    
    // Loyalty
    "loyalty.title": "Beauty Club",
    "loyalty.subtitle": "Join our exclusive club and enjoy endless benefits",
    "loyalty.benefit1": "Exclusive discounts up to 25%",
    "loyalty.benefit2": "Collect points with every visit",
    "loyalty.benefit3": "Free gift on your birthday",
    "loyalty.benefit4": "Priority booking during peak seasons",
    "loyalty.name": "Full Name",
    "loyalty.phone": "Phone Number",
    "loyalty.email": "Email Address",
    "loyalty.join": "Join Now",
    "loyalty.success": "Successfully registered in the Beauty Club!",
    
    // Gallery
    "gallery.title": "Our Gallery",
    "gallery.subtitle": "Glimpses of our creative works and achievements",
    
    // Booking
    "booking.title": "Book Your Appointment",
    "booking.subtitle": "We are waiting to offer you an exceptional beauty experience",
    "booking.name": "Full Name",
    "booking.phone": "Phone / WhatsApp",
    "booking.service": "Select Service",
    "booking.selectService": "Choose a service",
    "booking.date": "Date",
    "booking.time": "Time",
    "booking.selectTime": "Select time",
    "booking.notes": "Additional Notes",
    "booking.notesPlaceholder": "Any special requests or notes...",
    "booking.submit": "Confirm Booking",
    "booking.whatsapp": "Or Book via WhatsApp",
    "booking.success": "Your booking request has been received! We will contact you soon",
    "booking.errorName": "Please enter your name",
    "booking.errorPhone": "Please enter a valid phone number",
    "booking.errorService": "Please select a service",
    "booking.errorDate": "Please select a date",
    "booking.errorTime": "Please select a time",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We're happy to welcome you and answer your inquiries",
    "contact.address": "Al Wasl Road, Jumeirah 1, Dubai",
    "contact.hours": "Saturday - Thursday: 10 AM - 10 PM",
    "contact.friday": "Friday: 2 PM - 10 PM",
    "contact.whatsapp": "Chat on WhatsApp",
    "contact.instagram": "Follow us on Instagram",
    
    // Footer
    "footer.tagline": "Beauty is a blessing, and caring for yourself is gratitude for it.",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Info",
    "footer.rights": "All Rights Reserved",
    "footer.madeWith": "Made with",
    "footer.inDubai": "in Dubai",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
