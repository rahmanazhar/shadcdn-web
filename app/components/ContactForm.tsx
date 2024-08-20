"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ParticleBackground from "./ParticleBackground";

const ContactForm = () => {
  return (
    <ParticleBackground>
      <section className="py-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold text-center mb-8 text-white"
            >
              Contact Us
            </motion.h2>
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Input placeholder="Your Name" className="bg-white/20 text-white border-white/30" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Input type="email" placeholder="Your Email" className="bg-white/20 text-white border-white/30" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Textarea placeholder="Your Message" className="bg-white/20 text-white border-white/30" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </ParticleBackground>
  );
};

export default ContactForm;