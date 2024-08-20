"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconDeviceMobile, IconRocket, IconList } from '@tabler/icons-react'

const tabContent = [
  {
    id: 'features',
    title: 'Features',
    icon: IconRocket,
    content: [
      'Intuitive user interface',
      'Real-time synchronization',
      'Advanced analytics dashboard',
      'Customizable themes',
    ],
  },
  {
    id: 'tech',
    title: 'Tech Specs',
    icon: IconDeviceMobile,
    content: [
      'Built with React Native',
      'Backend powered by Node.js and Express',
      'Real-time updates using WebSockets',
      'Data stored in MongoDB',
    ],
  },
  {
    id: 'requirements',
    title: 'Requirements',
    icon: IconList,
    content: [
      'iOS 13.0 or later',
      'Android 8.0 or later',
      'Minimum 2GB RAM',
      '100MB free storage space',
    ],
  },
]

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('features')

  return (
    <motion.div 
      className="py-16 px-4 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 min-h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Product Details
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="flex flex-row md:flex-col gap-4 md:w-1/3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {tabContent.map((tab) => (
              <motion.button
                key={tab.id}
                className={`flex items-center gap-3 px-6 py-4 rounded-full text-left ${
                  activeTab === tab.id ? 'bg-purple-600 text-white' : 'bg-white/20 text-purple-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="w-6 h-6" />
                <span className="font-semibold">{tab.title}</span>
              </motion.button>
            ))}
          </motion.div>
          <motion.div 
            className="md:w-2/3 bg-white/20 rounded-3xl p-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.ul
                key={activeTab}
                className="space-y-4 text-purple-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabContent.find(tab => tab.id === activeTab)?.content.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-purple-300 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductDetails