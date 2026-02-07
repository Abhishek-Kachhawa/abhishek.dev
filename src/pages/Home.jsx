import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Abhishek</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300">
            Full-Stack & Flutter Developer crafting scalable web & mobile apps that solve real problems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl font-bold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition"
            >
              Explore Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-red-500/50 rounded-xl font-semibold hover:bg-red-500/10 transition"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>
            <img
              src="your-profile.jpg" // ← yahan daal do
              alt="Abhishek Kachhawa"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}