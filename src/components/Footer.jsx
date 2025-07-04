import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const productItems = t("footer.productItems", { returnObjects: true });
  const companyItems = t("footer.companyItems", { returnObjects: true });
  const exploreItems = t("footer.exploreItems", { returnObjects: true });
  const partnerItems = t("footer.partnerItems", { returnObjects: true });

  return (
    <footer className="bg-white text-gray-700 border-t" dir={t("dir")}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8 text-sm">
        {/* Logo & Social */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-blue-600">◆</span>
            <span>{t("footer.companyName")}</span>
          </div>
          <p className="text-gray-500">{t("footer.tagline")}</p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <Twitter size={18} className="text-gray-500 hover:text-black" />
            <Linkedin size={18} className="text-gray-500 hover:text-black" />
            <Instagram size={18} className="text-gray-500 hover:text-black" />
            <Youtube size={18} className="text-gray-500 hover:text-black" />
            <Facebook size={18} className="text-gray-500 hover:text-black" />
          </div>

          <div className="mt-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              {t("footer.systemsStatus")}
            </span>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.sections.product")}</h4>
          <ul className="space-y-1 text-gray-600">
            {productItems.map(({ label, badge }, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {label}
                {badge && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.sections.company")}</h4>
          <ul className="space-y-1 text-gray-600">
            {companyItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.sections.explore")}</h4>
          <ul className="space-y-1 text-gray-600">
            {exploreItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h4 className="font-semibold mt-6 mb-3">{t("footer.sections.partner")}</h4>
          <ul className="space-y-1 text-gray-600">
            {partnerItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t text-xs text-gray-400 py-4 px-6 flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        <p>{t("footer.footerBottom.copyright")}</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">{t("footer.footerBottom.privacyPolicy")}</a>
          <a href="#">{t("footer.footerBottom.terms")}</a>
          <a href="#">{t("footer.footerBottom.codeOfConduct")}</a>
        </div>
      </div>
    </footer>
  );
}
