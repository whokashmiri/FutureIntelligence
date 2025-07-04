import React, { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Atom,
  Aperture,
  Circle,
  Flame,
  Mountain,
  Orbit,
} from "lucide-react";

const logos = [
  { icon: Atom, name: "Logipsum" },
  { icon: Aperture, name: "Logoipsum" },
  { icon: Circle, name: "logoipsum" },
  { icon: Flame, name: "Logoipsum" },
  { icon: Mountain, name: "Logoipsum" },
  { icon: Orbit, name: "logoipsum" },
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

  // Autoplay effect
  useEffect(() => {
    let interval;
    if (slider) {
      interval = setInterval(() => {
        slider.current?.next();
      }, 2000); // move every 2 seconds
    }
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="w-full bg-gray-50 py-10 px-6">
      <div ref={sliderInstanceRef} className="keen-slider">
        {logos.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="keen-slider__slide flex flex-col items-center justify-center text-gray-700"
            >
              <div className="flex items-center space-x-2">
                <Icon size={32} className="text-gray-700" />
                <span className="text-lg font-medium">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
