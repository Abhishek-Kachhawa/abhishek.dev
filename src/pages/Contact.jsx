import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-bold mb-12 text-center">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="space-y-8">
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl mb-6">Connect With Me</h3>
            <div className="flex flex-col gap-6 text-lg">
              <a href="mailto:abhishekkachhawa1205@gmail.com" className="flex items-center gap-4 hover:text-red-400">
                <FaEnvelope size={28} /> abhishekkachhawa1205@gmail.com
              </a>
              <a href="https://github.com/abhishekkachhawa9644" target="_blank" className="flex items-center gap-4 hover:text-red-400">
                <FaGithub size={28} /> GitHub
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="flex items-center gap-4 hover:text-red-400">
                <FaLinkedin size={28} /> LinkedIn
              </a>
              <a href="tel:+919644782290" className="flex items-center gap-4 hover:text-red-400">
                <FaPhone size={28} /> +91 96447 82290
              </a>
              <a href="https://wa.me/919644782290" target="_blank" className="flex items-center gap-4 hover:text-red-400">
                <FaWhatsapp size={28} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right - Form (simple for now) */}
        <div className="glass-effect p-8 rounded-2xl">
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500" />
            <input type="email" placeholder="Email" className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500" />
            <textarea placeholder="Message" rows={5} className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"></textarea>
            <button type="submit" className="w-full py-4 bg-red-600 rounded-lg font-bold hover:bg-red-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}