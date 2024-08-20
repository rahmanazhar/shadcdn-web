"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconCheck, IconX } from "@tabler/icons-react";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    features: [
      { name: "Task Management", included: true },
      { name: "Collaboration", included: true },
      { name: "5GB Storage", included: true },
      { name: "Analytics", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$19.99",
    features: [
      { name: "Task Management", included: true },
      { name: "Collaboration", included: true },
      { name: "25GB Storage", included: true },
      { name: "Analytics", included: true },
      { name: "Priority Support", included: true },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      { name: "Task Management", included: true },
      { name: "Collaboration", included: true },
      { name: "Unlimited Storage", included: true },
      { name: "Advanced Analytics", included: true },
      { name: "24/7 Dedicated Support", included: true },
    ],
  },
];

const PricingTable = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="py-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-purple-900/70 backdrop-blur-sm z-10" />
      <Image
        src="/img/william-hook-9e9PD9blAto-unsplash.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
        className="absolute inset-0 z-0"
      />
      <div className="container mx-auto px-4 relative z-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              onHoverStart={() => setHoveredPlan(plan.name)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              <div
                className={`bg-white/10 backdrop-blur-md rounded-3xl p-8 h-full flex flex-col transition-all duration-300 ${
                  hoveredPlan === plan.name
                    ? "scale-105 shadow-2xl"
                    : "scale-100 shadow-xl"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-purple-300 mb-6">
                  {plan.price}
                </p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + index * 0.2 }}
                    >
                      {feature.included ? (
                        <IconCheck className="w-5 h-5 text-green-400 mr-2" />
                      ) : (
                        <IconX className="w-5 h-5 text-red-400 mr-2" />
                      )}
                      {feature.name}
                    </motion.li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  variant="secondary"
                >
                  Choose {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
