import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function TeamSection() {
     const { i18n, t } = useTranslation();
       const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };
  return (
    <section className="relative w-full p-10 overflow-hidden rounded-4xl">
      {/* Background Image */}
      <div className="relative h-[450px] rounded-4xl bg-cover bg-center bg-no-repeat flex items-center px-8 md:px-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7984734/pexels-photo-7984734.jpeg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#d32e2e]/90 via-[#000000]/40 to-transparent rounded-3xl"></div>

        {/* Left Content */}
        <div className="relative z-10 max-w-lg bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {t('headingt' , " Our team is here for you\nevery step of the way")}
          </h2>
          <p className="text-sm md:text-base mb-6">
           {t("paragraph" , " Our experienced and skilled team is passionate about delivering innovative digital solutions while ensuring your success every step of the way.")}
          </p>
          <button className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-50 transition">
           {t("button" , "Explore More")}<ArrowUpRight size={16} />
          </button>
        </div>

        {/* Right Floating Stats */}
        <div className={`absolute top-8 ${i18n.language === 'ar' ? 'left-8' : 'right-8'} space-y-3 z-10`}>
          <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-center">
            <p className="text-lg font-bold">18+</p>
            <p className="text-xs">{t("experience", "Years experience")}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-center">
            <p className="text-lg font-bold">4k+</p>
            <p className="text-xs">{t("clients", 'Satisfied clients')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
