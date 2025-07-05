import React from "react";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import Hero from "../assets/Hero.jpg"



export default function AboutSection() {
      const { t } = useTranslation();
  return (
    <section className="px-6 py-12 md:px-20 md:py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <p className="text-sm text-gray-500 mb-2">[Home / <span className="text-yellow-500">About</span>]</p>
          <h1 className="text-4xl font-bold mb-6">{t("heading")}</h1>
          <p className="text-gray-600 mb-8">
            {t("paragraph1")}
         
          </p>
          <p className="text-gray-700">
            {t("paragraph2")}
          </p>

          {/* Stats */}
          {/* <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-black">150+</h3>
              <p className="text-gray-500 text-sm">{t("projects")}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">100+</h3>
              <p className="text-gray-500 text-sm">{t("team")}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">200+</h3>
              <p className="text-gray-500 text-sm">{t("reviews")}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">30</h3>
              <p className="text-gray-500 text-sm">{t("awards")}</p>
            </div>
          </div> */}
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src={Hero}
            alt="Construction team"
            className="rounded-xl shadow-md w-full"
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
            <img
              src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
              alt="Renovex badge"
              className="w-16 h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
