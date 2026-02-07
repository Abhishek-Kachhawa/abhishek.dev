// src/pages/Experience.jsx
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "Acore IT Hub Pvt Ltd",
      location: "Indore (M.P), India",
      duration: "Sep 2025 – Present",
      durationDetail: "1.5 Months",
      description: (
        <>
          Developing real-world mobile applications:
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
            <li><strong>NearProp</strong> — Property discovery & rental platform connecting landlords, tenants, buyers/sellers. Features: hotel/banquet bookings, room rentals, plot/shop/garden listings, Google Maps location search.</li>
            <li><strong>TickVia</strong> — All-in-one super app for mobile/DTH/electricity/water/gas recharges + flight/cab/bus/hotel bookings. Also built the web version using React.js + Tailwind CSS.</li>
            <li><strong>Drazz</strong> — Hotel & banquet hall booking app with search, comparison, reservation, integrated payments, and map navigation.</li>
          </ul>
        </>
      ),
      tech: "Flutter, Firebase, Provider / getx, Google Maps API, Razorpay, REST APIs",
      projects: ["NearProp", "TickVia", "Drazz"]
    },
    {
      title: "Junior Software Engineer",
      company: "Yug TechnoSoft",
      location: "Indore (M.P), India",
      duration: "Sep 2024 – Aug 2025",
      durationDetail: "1 Year",
      description: (
        <>
          Worked on multiple business-oriented mobile & web applications:
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
            <li><strong>Sahi Click</strong> — Business networking & growth platform based on “Give & Grow” principle. Implemented secure APIs, real-time interactions, community features.</li>
            <li><strong>AppVyapar</strong> — Complete SME business management system: POS billing, stock/inventory, invoicing, purchase tracking, ledgers, multi-wallet support, multilingual UI.</li>
            <li><strong>BillBook</strong> — Smart billing & inventory app with GST invoicing, offer management, real-time reports, cash/ledger tracking.</li>
          </ul>
        </>
      ),
      tech: "Node.js, AdonisJS, Laravel, PHP, Angular, Flutter, Dart, MySQL, Firebase, REST APIs",
      projects: ["Sahi Click", "AppVyapar", "BillBook"]
    },
    {
      title: "MERN Intern",
      company: "Fxbytes Technologies Pvt Ltd",
      location: "Indore (M.P), India",
      duration: "Mar 2024 – Aug 2025",
      durationDetail: "6 Months",
      description: (
        <>
          Collaborated on live client projects:
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
            <li>Contributed to frontend development and component design (e.g., BMI Construction website)</li>
            <li>Implemented Nodemailer for contact form / email functionality</li>
            <li>Gained practical experience with full-stack best practices</li>
          </ul>
        </>
      ),
      tech: "React.js, Node.js, Express.js, MongoDB, Nodemailer",
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent"
      >
        Professional Experience
      </motion.h2>

      <div className="relative border-l-4 border-red-600/40 pl-6 sm:pl-10 md:pl-12 space-y-16 md:space-y-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-5 sm:-left-7 md:-left-9 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform">
              {index + 1}
            </div>

            <div className="bg-slate-900/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-red-500/40 transition-all duration-300 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-red-400 group-hover:text-red-300 transition-colors">
                {exp.title}
              </h3>
              <div className="mt-1.5 text-gray-400 text-sm sm:text-base">
                {exp.company} • {exp.location}
                <span className="mx-2">|</span>
                <span className="font-medium">{exp.duration}</span>
                <span className="text-gray-500 ml-2">({exp.durationDetail})</span>
              </div>

              <div className="mt-5 text-gray-300 leading-relaxed">
                {exp.description}
              </div>

              {exp.tech && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</p>
                  <p className="text-gray-300">{exp.tech}</p>
                </div>
              )}

              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-400 mb-2">Key Projects:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.projects.map((project) => (
                      <span
                        key={project}
                        className="px-3 py-1.5 bg-red-900/30 text-red-300 rounded-full text-sm border border-red-800/40"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}