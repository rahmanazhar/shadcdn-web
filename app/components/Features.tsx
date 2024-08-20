"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { IconBrain, IconUsers, IconChartBar } from "@tabler/icons-react"

const features = [
  { title: "Task Management", description: "Organize and prioritize your tasks effortlessly", icon: IconBrain },
  { title: "Collaboration", description: "Work together with your team in real-time", icon: IconUsers },
  { title: "Analytics", description: "Get insights into your productivity and habits", icon: IconChartBar },
]

const Features = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(45deg, #4c1d95, #7c3aed)",
            "linear-gradient(45deg, #7c3aed, #8b5cf6)",
            "linear-gradient(45deg, #8b5cf6, #4c1d95)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-purple-300/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <motion.div
                    className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-100">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features