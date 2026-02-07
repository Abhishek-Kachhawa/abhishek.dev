// src/pages/Skills.jsx
import { motion } from 'framer-motion';

// ── Only real existing icons ────────────────────────────────────────
import { FaCode, FaDatabase, FaTools, FaBrain, FaUsers } from 'react-icons/fa';

import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiJira
} from 'react-icons/si';

const SkillCategory = ({ title, icon: Icon, color, skills }) => {
  const getSkillIcon = (skillName) => {
    const iconMap = {
      'JavaScript': SiJavascript,
      'TypeScript': SiTypescript,
      'Dart': SiDart,
      'React.js': SiReact,
      'Flutter': SiFlutter,
      'Node.js': SiNodedotjs,
      'Laravel': SiLaravel,
      'MongoDB': SiMongodb,
      'MySQL': SiMysql,
      'PostgreSQL': SiPostgresql,
      'Git': SiGit,
      'GitHub': SiGithub,
      'Postman': SiPostman,
      'JIRA': SiJira,
    };
    const IconComponent = iconMap[skillName];
    return IconComponent ? <IconComponent className="text-lg" /> : null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`
        group relative overflow-hidden
        bg-gradient-to-br from-slate-900 to-slate-950
        rounded-2xl border border-slate-800/70
        p-6 md:p-8
        hover:border-${color}-700/60 hover:shadow-xl hover:shadow-${color}-900/20
        transition-all duration-300
      `}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="flex items-center gap-4 mb-7">
        <div className={`p-3.5 bg-${color}-950/40 rounded-xl text-${color}-400 group-hover:bg-${color}-900/50 transition-colors`}>
          <Icon size={28} />
        </div>
        <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-${color}-400 to-${color}-500 bg-clip-text text-transparent`}>
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.92, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.04 + 0.1, duration: 0.4 }}
            className={`
              flex items-center gap-2.5
              px-4 py-2.5 rounded-lg
              bg-slate-800/60 border border-slate-700/70
              hover:bg-slate-700/80 hover:border-${color}-800/50
              text-gray-200 text-sm md:text-base font-medium
              transition-all duration-200
            `}
          >
            {getSkillIcon(skill) && (
              <span className={`text-${color}-400 opacity-90`}>
                {getSkillIcon(skill)}
              </span>
            )}
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: FaCode,
      color: "red",
      skills: ["Java", "JavaScript", "TypeScript", "Dart", "C/C++", "PHP"]
    },
    {
      title: "Frameworks & Libraries",
      icon: FaTools,
      color: "pink",
      skills: ["React.js", "Flutter", "Node.js", "Express.js", "AdonisJS", "Laravel"]
    },
    {
      title: "Databases",
      icon: FaDatabase,
      color: "purple",
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Tools & DevOps",
      icon: FaTools,
      color: "cyan",
      skills: ["Git", "GitHub", "Postman", "JIRA", "Firebase", "Razorpay", "Google Maps API"]
    },
    {
      title: "Core Fundamentals",
      icon: FaBrain,
      color: "amber",
      skills: ["OOPS", "SDLC", "DBMS", "REST APIs", "HTML", "CSS", "State Management"]
    },
    {
      title: "Soft Skills",
      icon: FaUsers,
      color: "emerald",
      skills: ["Team Collaboration", "Problem Solving", "Debugging", "Adaptability", "Effective Communication"]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center tracking-tight"
      >
        <span className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </span>
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {skillGroups.map((group, index) => (
          <SkillCategory
            key={index}
            title={group.title}
            icon={group.icon}
            color={group.color}
            skills={group.skills}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 md:mt-20 text-center text-gray-400 text-lg"
      >
        Always learning — currently deepening knowledge in cloud (AWS/GCP), system design & performance optimization.
      </motion.p>
    </section>
  );
}