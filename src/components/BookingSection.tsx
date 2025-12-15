import { useState } from "react";
import { Calendar, Clock, User, Phone, MessageSquare, Check, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
}

const BookingSection = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();

  const services = isRTL
    ? [
        "مكياج مناسبات",
        "مكياج عرائس",
        "عناية بالبشرة",
        "تسريحات وصبغات",
        "أظافر ومانيكير",
        "مساج واسترخاء",
        "باقة العروس الذهبية",
        "باقة العناية الشهرية",
        "باقة إطلالة المساء",
      ]
    : [
        "Event Makeup",
        "Bridal Makeup",
        "Skincare",
        "Hair Styling & Coloring",
        "Nails & Manicure",
        "Massage & Relaxation",
        "Golden Bridal Package",
        "Monthly Care Package",
        "Evening Look Package",
      ];

  const timeSlots = isRTL
    ? [
        "09:00 صباحاً",
        "10:00 صباحاً",
        "11:00 صباحاً",
        "12:00 ظهراً",
        "01:00 مساءً",
        "02:00 مساءً",
        "03:00 مساءً",
        "04:00 مساءً",
        "05:00 مساءً",
        "06:00 مساءً",
        "07:00 مساءً",
        "08:00 مساءً",
      ]
    : [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
        "06:00 PM",
        "07:00 PM",
        "08:00 PM",
      ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("booking.errorName");
    }

    if (!formData.phone.trim() || !/^[\d\s+()-]{9,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = t("booking.errorPhone");
    }

    if (!formData.service) {
      newErrors.service = t("booking.errorService");
    }

    if (!formData.date) {
      newErrors.date = t("booking.errorDate");
    }

    if (!formData.time) {
      newErrors.time = t("booking.errorTime");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: isRTL ? "خطأ في النموذج" : "Form Error",
        description: isRTL ? "الرجاء تصحيح الأخطاء والمحاولة مرة أخرى" : "Please correct the errors and try again",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: isRTL ? "تم الحجز بنجاح! 🎉" : "Booking Successful! 🎉",
      description: t("booking.success"),
    });
  };

  const generateWhatsAppLink = () => {
    const message = isRTL
      ? `مرحباً، أود حجز موعد:\n\nالاسم: ${formData.name}\nالخدمة: ${formData.service}\nالتاريخ: ${formData.date}\nالوقت: ${formData.time}\nملاحظات: ${formData.notes || "لا يوجد"}`
      : `Hello, I would like to book an appointment:\n\nName: ${formData.name}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nNotes: ${formData.notes || "None"}`;
    return `https://wa.me/971501234567?text=${encodeURIComponent(message)}`;
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-card text-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <Check className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isRTL ? "تم الحجز بنجاح!" : "Booking Confirmed!"}
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {t("booking.success")}
            </p>
            <div className={`bg-muted rounded-2xl p-6 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              <h3 className="font-bold text-foreground mb-4">
                {isRTL ? "تفاصيل الحجز:" : "Booking Details:"}
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{isRTL ? "الاسم" : "Name"}: {formData.name}</p>
                <p>{isRTL ? "الخدمة" : "Service"}: {formData.service}</p>
                <p>{isRTL ? "التاريخ" : "Date"}: {formData.date}</p>
                <p>{isRTL ? "الوقت" : "Time"}: {formData.time}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t("booking.whatsapp")}
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
                }}
                className="btn-outline"
              >
                {isRTL ? "حجز موعد جديد" : "Book Another"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            {t("booking.title")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {isRTL ? (
              <>نحن في <span className="text-primary">انتظارك</span></>
            ) : (
              <>We're <span className="text-primary">Waiting</span> for You</>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("booking.subtitle")}
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <User className="w-4 h-4 text-primary" />
                  {t("booking.name")} *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                    errors.name ? "border-destructive" : "border-border"
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground`}
                  placeholder={isRTL ? "أدخلي اسمك الكامل" : "Enter your full name"}
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  {t("booking.phone")} *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                    errors.phone ? "border-destructive" : "border-border"
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground`}
                  placeholder="+971 50 XXX XXXX"
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Service */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  {t("booking.service")} *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                    errors.service ? "border-destructive" : "border-border"
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground`}
                >
                  <option value="">{t("booking.selectService")}</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {t("booking.date")} *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                    errors.date ? "border-destructive" : "border-border"
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground`}
                />
                {errors.date && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {t("booking.time")} *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-muted border ${
                    errors.time ? "border-destructive" : "border-border"
                  } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground`}
                >
                  <option value="">{t("booking.selectTime")}</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.time}
                  </p>
                )}
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  {t("booking.notes")}
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground resize-none"
                  placeholder={t("booking.notesPlaceholder")}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? isRTL ? "جاري إرسال الحجز..." : "Submitting..."
                : t("booking.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
