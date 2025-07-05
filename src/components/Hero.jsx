import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/10395146/10395146-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.7;
        }}
      />

      {/* Overlay + Animated Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-12 text-center z-30">
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1.2 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-white mix-blend-difference text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] xl:max-w-[60vw]"
          style={{ fontFamily: '"Quantico", sans-serif' }}
        >
          FUTURE INTELLIGENCE <br className="hidden sm:block" />
          AND INVESTMENT
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
