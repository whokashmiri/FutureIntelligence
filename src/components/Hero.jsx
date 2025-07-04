import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        {/* <Navbar /> */}
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-contain md:object-cover z-0"
        src="https://videos.pexels.com/video-files/10395146/10395146-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.7;
        }}
      />

      {/* Overlay + Negative Text */}
      <div className="absolute inset-0 mt-24 flex items-center justify-center z-30">
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1.5 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-white mix-blend-difference text-5xl md:text-6xl font-extrabold text-center "
          style={{ fontFamily: '"Quantico", sans-serif' }}
        >
          FUTURE INTELLIGENCE <br /> AND INVESTMENT
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
