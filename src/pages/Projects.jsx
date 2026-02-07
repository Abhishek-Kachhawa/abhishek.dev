// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // optional: npm install react-icons

export default function Projects() {
  const projects = [
    {
      name: "NearProp",
      description: "Property discovery and rental platform connecting landlords, tenants, buyers & sellers. Features hotel/banquet bookings, room rentals, plot/shop/garden listings, Google Maps based search.",
      tech: "Flutter • Firebase • Provider • Google Maps API • Razorpay • REST APIs",
      link: "#", // ← add real link if available (website / Play Store)
      type: "mobile",
      status: "Production"
    },
    {
      name: "TickVia",
      description: "All-in-one super app for recharges (mobile, DTH, electricity, water, gas) and bookings (flights, cabs, buses, hotels). Also developed responsive web version.",
      tech: "Flutter • getx • Firebase • Razorpay • React.js • Tailwind CSS • REST APIs",
      link: "#", // ← add if deployed
      type: "mobile + web",
      status: "Production"
    },
    {
      name: "Drazz",
      description: "Hotel and banquet hall booking application. Search, compare, reserve rooms/halls with integrated payments and map-based navigation.",
      tech: "Flutter • Firebase • Provider • Google Maps API • Razorpay • REST APIs",
      link: "#",
      type: "mobile",
      status: "Production"
    },
    {
      name: "Sahi Click",
      description: "Business networking & growth platform based on “Give & Grow” principle. Secure APIs, real-time interactions, community-driven structure.",
      tech: "AdonisJS • Node.js • Flutter • Dart • MySQL • REST APIs",
      link: "https://play.google.com/store/apps/details?id=com.sahiclick.connect",
      type: "mobile",
      status: "Live on Play Store"
    },
    {
      name: "AppVyapar",
      description: "Complete business management system for SMEs — POS billing, stock/inventory, invoicing, purchase tracking, ledgers, multi-wallet, multilingual support.",
      tech: "Laravel • PHP • Angular • Flutter • Firebase • REST APIs",
      link: "https://play.google.com/store/apps/details?id=com.yugtechno.appvyapar",
      type: "mobile + web",
      status: "Live on Play Store"
    },
    {
      name: "BillBook",
      description: "Smart billing & inventory application for small businesses — GST invoicing, offer management, real-time reports, cash/ledger tracking.",
      tech: "Laravel • PHP • Flutter • MySQL • Firebase",
      link: "https://play.google.com/store/apps/details?id=com.yugtechno.avbb",
      type: "mobile",
      status: "Live on Play Store"
    },
    {
      name: "DNS Server",
      description: "Custom DNS server to efficiently resolve domain names and map them to IP addresses.",
      tech: "Node.js • Express.js",
      link: "#", // ← replace with real GitHub repo link
      type: "backend",
      status: "Personal Project",
      github: true
    },
    {
      name: "Cloud IDE",
      description: "Browser-based cloud IDE with real-time code editing, compilation, and execution support.",
      tech: "Node.js",
      link: "#", // ← replace with real GitHub repo link
      type: "full-stack",
      status: "Personal Project",
      github: true
    },
    {
      name: "Meal Finder App",
      description: "Recipe discovery application — search meals by ingredients, view preparation steps and nutritional info.",
      tech: "React.js",
      link: "#", // ← add GitHub / live demo if exists
      type: "frontend",
      status: "Personal Project",
      github: true
    },
    {
      name: "Carrental Portal",
      description: "Full-stack car rental platform — vehicle listings, booking system, secure user authentication.",
      tech: "React.js • Node.js • AdonisJS • SQL",
      link: "#", // ← add GitHub / live demo
      type: "full-stack",
      status: "Personal Project",
      github: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-red-600/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="p-6 md:p-7 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-red-400 group-hover:text-red-300 transition-colors">
                  {proj.name}
                </h3>
                {proj.status && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-900/40 text-red-300 border border-red-800/40">
                    {proj.status}
                  </span>
                )}
              </div>

              <p className="text-gray-300 mb-5 flex-1 leading-relaxed">
                {proj.description}
              </p>

              <div className="mt-auto">
                <p className="text-sm text-gray-400 mb-4">
                  <span className="font-semibold text-gray-300">Tech:</span> {proj.tech}
                </p>

                <div className="flex flex-wrap gap-3">
                  {proj.link !== "#" && proj.link !== "github-link" ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg text-white text-sm font-medium hover:brightness-110 transition"
                    >
                      <FiExternalLink size={16} />
                      View on Play Store
                    </a>
                  ) : proj.github ? (
                    <a
                      href={proj.link === "github-link" ? "#" : proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-gray-200 text-sm font-medium transition border border-slate-600"
                    >
                      <FiGithub size={16} />
                      View Source Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-400">
        <p className="text-lg">
          More projects and experiments available on my{" "}
          <a
            href="https://github.com/abhishekkachhawa9644"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}