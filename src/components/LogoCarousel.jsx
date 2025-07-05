/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Rajhi from "../assets/logo-arb.png";
import Alina from "../assets/alinma-logo.svg";
import Logo from "../assets/Logo.png";
import Rega from "../assets/REGA_LOGO.svg";
import Taqeem from "../assets/Taqeem.svg";

const logos = [
  { icon: Rajhi, name: "Al-Rajhi Bank" },
  { icon: Alina, name: "Alinma Bank" },
  { icon: Logo, name: "Ministry of Justice" },
  { icon: Rega, name: "Real Estate General Authority" },
  { icon: Taqeem, name: "Authority of Accredited Valuers" },
];

export default function LogoCarousel() {
  const sliderRef = useRef(null);

  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1.5, spacing: 12 },
      },
    },
  });

  useEffect(() => {
    let interval;
    if (slider) {
      interval = setInterval(() => {
        slider.current?.next();
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="w-full bg-gray-300 py-10 px-6">
      <div ref={sliderInstanceRef} className="keen-slider">
        {logos.map((item, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex flex-col items-center justify-center text-gray-700"
          >
            <div className="flex flex-col items-center space-y-2">
              <img
                src={item.icon}
                alt={item.name}
                className="h-12 w-auto object-contain"
              />
              <span className="text-lg font-medium">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
