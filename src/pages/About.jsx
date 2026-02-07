// src/pages/About.jsx
import { motion } from 'framer-motion';   // ← THIS WAS MISSING

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Column - Profile Summary + Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl"
        >
          <p className="text-lg leading-relaxed text-gray-300 mb-10">
            I am a dedicated and detail-oriented full-stack developer with hands-on experience in building scalable web and mobile applications. Proficient in modern frameworks like <span className="text-red-400 font-medium">React.js</span>, <span className="text-red-400 font-medium">Adonis.js</span>, and <span className="text-red-400 font-medium">Flutter</span>, I specialize in creating intuitive user interfaces and robust backend systems. Passionate about clean code, continuous learning, solving real-world problems, and delivering high-quality solutions that align with user and business needs.
          </p>

          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/40">
              <p className="font-bold text-xl text-red-300">B.Tech – Computer Science & Engineering</p>
              <p className="text-gray-400 mt-1">
                Mahakal Institute of Technology and Management, Ujjain<br />
                CGPA: 7.0 | 2025
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/40">
              <p className="font-bold text-xl text-red-300">Class XII (MP Board)</p>
              <p className="text-gray-400 mt-1">84.4% | 2021</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/40">
              <p className="font-bold text-xl text-red-300">Class X (MP Board)</p>
              <p className="text-gray-400 mt-1">84% | 2019</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Skills Highlights + Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Key Strengths</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Full-Stack Development",
                "Flutter & Mobile Apps",
                "React & Modern Frontend",
                "Node.js / AdonisJS Backend",
                "Clean Code & Architecture",
                "Problem Solving",
                "Team Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-red-900/30 text-red-300 rounded-full text-sm font-medium border border-red-800/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Achievements</h3>
            <ul className="space-y-5 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1">★</span>
                <span>Oracle Certified AI Foundations Associate 2025 (OCI)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1">★</span>
                <span>MERN Stack, Java & SQL Certifications</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1">★</span>
                <span>NCC A, B & C Certificates</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-500 text-2xl mt-1">★</span>
                <span>Active Member – Coding & Speech Clubs</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}