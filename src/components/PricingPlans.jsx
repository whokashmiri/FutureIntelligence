import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function PricingPlans() {
  const { t } = useTranslation();
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      key: "pro",
      price: 2500,
      isCustom: false
    },
    {
      key: "proPlus",
      price: 3800,
      highlighted: true,
      isCustom: false
    },
    {
      key: "custom",
      price: null,
      isCustom: true
    }
  ];

  return (
    <section className="bg-gradient-to-br from-red-50 to-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-start">
        <h2 className="text-4xl font-bold mb-2">{t("title")}</h2>
        <p className="text-gray-600 mb-8">{t("subtitle")}</p>

        {/* Toggle Billing */}
        <div className="inline-flex bg-white border border-gray-200 rounded-full overflow-hidden mb-12">
          <button
            className={`px-6 py-2 text-sm font-medium ${
              billing === "monthly"
                ? "bg-red-600 text-white"
                : "text-red-400 hover:bg-gray-100"
            }`}
            onClick={() => setBilling("monthly")}
          >
            {t("monthly")}
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium ${
              billing === "quarterly"
                ? "bg-red-600 text-white"
                : "text-red-400 hover:bg-gray-100"
            }`}
            onClick={() => setBilling("quarterly")}
          >
            {t("quarterly")}
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {plans.map((plan, idx) => {
            const planData = t(`plans.${plan.key}`, { returnObjects: true });

            return (
              <div
                key={idx}
                className={`rounded-xl p-6 border ${
                  plan.highlighted
                    ? "bg-white border-purple-400 shadow-md"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="mb-4">
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      plan.highlighted ? "text-purple-600" : "text-gray-800"
                    }`}
                  >
                    {planData.title}
                  </h3>
                  <p className="text-sm text-gray-500">{planData.desc}</p>
                </div>

                {plan.price ? (
                  <div className="text-3xl font-bold mb-4">
                    ${plan.price}
                    <span className="text-base text-gray-500"> /month</span>
                  </div>
                ) : (
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    {planData.label}
                  </h4>
                )}

                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  {planData.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-green-500 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-md py-2 px-4 text-sm font-medium transition ${
                    plan.isCustom
                      ? "bg-red-500 text-white hover:bg-red-400"
                      : "border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {planData.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
