'use client'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800">🚧 Under Construction 🚧</h1>
        <p className="mt-4 text-lg text-gray-600">
          This case study project is currently being built.  
          Check back soon for the full reimagined AppVersal experience!
        </p>
      </motion.div>
    </div>
  )
}