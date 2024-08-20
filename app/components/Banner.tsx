"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/img/william-hook-9e9PD9blAto-unsplash.jpg"
        alt="App background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Introducing Our Amazing App
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
        >
          Revolutionize your daily tasks with our cutting-edge mobile
          application
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-primary-100 hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Download Now
          </Button>
        </motion.div>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-30" />
            <div className="absolute inset-0 backdrop-blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Banner;
