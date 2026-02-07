// pages/About.jsx
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

export default function About() {
  const education = [
    {
      degree: "B.Tech - Computer Science",
      institution: "Mahakal Institute of Technology and Management, Ujjain",
      year: "2025",
      percentage: "CGPA: 7.0"
    },
    {
      degree: "XII MP Board",
      institution: "Kolping Convent Hr. Sec. School",
      year: "2021",
      percentage: "84.4%"
    },
    {
      degree: "X MP Board",
      institution: "Kolping Convent Hr. Sec. School",
      year: "2019",
      percentage: "84%"
    }
  ]

  const certifications = [
    "Oracle Certified Foundations Associate: OCI 2025",
    "Certified AI Foundations Associate",
    "MERN Stack Certification (VOLCANUS Academy)",
    "Java & SQL Certification (Mindcluster)",
    "NCC A, B, C Certificates"
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A dedicated full-stack developer passionate about building innovative solutions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Profile */}
        <div>
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 mb-8">
            <h3 className="text-2xl font-bold mb-6">Profile Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              I am a dedicated and detail-oriented full-stack developer with hands-on experience 
              in building scalable web and mobile applications. Proficient in modern frameworks 
              like React.js, Adonis.js, and Flutter, I specialize in creating intuitive user 
              interfaces and robust backend systems. Passionate about continuous learning and 
              solving real-world problems through clean and efficient code.
            </p>
          </div>

          {/* Certifications */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-3 text-red-400" />
              Certifications & Achievements
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3"></div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Education */}
        <div>
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-red-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l border-gray-700 last:border-l-0 last:pb-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div>
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-gray-400 mt-1">{edu.institution}</p>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {edu.year}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      Ujjain, MP
                    </div>
                  </div>
                  <p className="mt-2 text-red-400 font-semibold">{edu.percentage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 text-center">
              <p className="text-3xl font-bold text-red-400">2+</p>
              <p className="text-sm text-gray-400 mt-1">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 text-center">
              <p className="text-3xl font-bold text-red-400">10+</p>
              <p className="text-sm text-gray-400 mt-1">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}