import React from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: "01",
    titleKey: "productDesign",
    tagsKey: "productTags",
    descKey: "productDesc",
    button: "discuss",
  },
  {
    id: "02",
    titleKey: "uxDesign",
    tagsKey: "uxTags",
    descKey: "uxDescription",
    button: "discuss",
  },
  {
    id: "03",
    titleKey: "development",
    tagsKey: "devTags",
    descKey: "devDesc",
    button: "discuss",
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16 px-6 md:px-20 rounded-3xl shadow-sm text-start">
      <h1 className="text-4xl font-bold mb-12 text-gray-900">
        {t("ourServices")}
      </h1>

      <div className="space-y-8 text-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="group transition-all duration-300 hover:bg-red-200 rounded-xl px-6 py-10 flex flex-col items-center text-start"
          >
            

            {/* Content Block */}
            <div className="max-w-xl space-y-2">
                {/* Step Number */}
            <span className="text-gray-400 text-xl font-medium mb-2">
              {service.id}
            </span>
              <h3 className="text-2xl font-semibold">{t(service.titleKey)}</h3>
              <p className="text-gray-600 text-sm">{t(service.tagsKey)}</p>

              {/* Description */}
              {service.descKey && (
                <p className="text-gray-600 text-sm opacity-0 max-h-0 group-hover:max-h-[300px] group-hover:opacity-100 overflow-hidden transition-all duration-300 whitespace-pre-line">
                  {t(service.descKey)}
                </p>
              )}

              {/* Reveal Button on Hover */}
              {service.button && (
                <button className="mt-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-300 border border-black px-5 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white">
                  {t(service.button)}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
