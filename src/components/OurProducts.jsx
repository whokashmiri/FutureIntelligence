import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Blogs from "./Blogs";

export default function OurProducts() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 py-16 md:px-20">
      <h1 className="text-4xl font-bold mb-12 text-gray-900">{t("ourProducts")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <a href="https://studio-three-vert.vercel.app/login" className="group bg-pink-50 rounded-2xl p-6 relative overflow-hidden h-80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg no-underline">
          <div className="flex justify-between items-start mb-4 z-10 relative">
            <span className="text-sm px-3 py-1 border border-black rounded-full bg-white">
              {t("category1")}
            </span>
            <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-semibold leading-snug z-10 relative group-hover:text-red-500">
            {t("title1")}
          </h3>
          <div className="flex justify-between items-end z-10 relative mt-auto pt-8">
            <span className="text-sm text-gray-700 w-2/3">{t("desc1")}</span>
            <span className="text-[140px] font-bold text-red-500 opacity-30 leading-none pointer-events-none select-none">
              01
            </span>
          </div>
        </a>

       <Link
  to="/val"
  className="group bg-pink-50 rounded-2xl p-6 relative overflow-hidden h-80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg no-underline"
>
  <div className="flex justify-between items-start mb-4 z-10 relative">
    <span className="text-sm px-3 py-1 border border-black rounded-full bg-white">
      {t("category2")}
    </span>
    <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
  </div>
  <h3 className="text-2xl font-semibold leading-snug z-10 relative group-hover:text-red-500">
    {t("title2")}
  </h3>
  <div className="flex justify-between items-end z-10 relative mt-auto pt-8">
    <span className="text-sm text-gray-700 w-2/3">{t("desc2")}</span>
    <span className="text-[140px] font-bold text-red-500 opacity-30 leading-none pointer-events-none select-none">
      02
    </span>
  </div>
</Link>


        {/* Card 3 */}
        <a href="https://automation-landing-page-4sbu.vercel.app/" className="group bg-pink-50 rounded-2xl p-6 relative overflow-hidden h-80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg no-underline">
          <div className="flex justify-between items-start mb-4 z-10 relative">
            <span className="text-sm px-3 py-1 border border-black rounded-full bg-white">
              {t("category3")}
            </span>
            <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-semibold leading-snug z-10 relative group-hover:text-red-500">
            {t("title3")}
          </h3>
          <div className="flex justify-between items-end z-10 relative mt-auto pt-8">
            <span className="text-sm text-gray-700 w-2/3">{t("desc3")}</span>
            <span className="text-[140px] font-bold text-red-500 opacity-30 leading-none pointer-events-none select-none">
              03
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
