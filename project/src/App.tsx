import React, { useEffect, useRef, useState } from 'react';
import { Github, Instagram, Mail, ExternalLink, ChevronDown, Code, GraduationCap, Languages, TowerControl as GameController, Laptop } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const education = [
  {
    period: "Currently",
    school: "+1 Computer Science at GVHSS Iriyanni",
    website: "https://www.google.com/search?q=gvhss+iriyanni"
  },
  {
    period: "8th to 10th Grade",
    school: "GHSS Cherkala",
    website: "https://www.google.com/search?q=ghss+cherkala&oq=ghss+cherkala"
  },
  {
    period: "Primary to 7th Grade",
    school: "PBM English Medium School, Nellikkatta",
    website: "http://pbmemhssnellikkatta.com/"
  }
];

function App() {
  const { theme } = useTheme();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills-section');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ProgressBar = ({ value, label }: { value: number; label: string }) => (
    <motion.div 
      className="relative mb-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex justify-between mb-2">
        <span className={`font-medium ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>{label}</span>
        <span className={theme === 'light' ? 'text-slate-600' : 'text-slate-300'}>{value}%</span>
      </div>
      <div className={`h-4 ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-700'} rounded-full overflow-hidden`}>
        <motion.div 
          className={`h-full rounded-full ${
            theme === 'light' 
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
              : 'bg-gradient-to-r from-blue-400 to-indigo-400'
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-full h-full opacity-30 bg-[linear-gradient(45deg,_rgba(255,255,255,0.15)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.15)_50%,_rgba(255,255,255,0.15)_75%,_transparent_75%)] bg-[length:1rem_1rem] animate-[shimmer_1s_linear_infinite]"></div>
        </motion.div>
      </div>
    </motion.div>
  );

  const bgClass = theme === 'light' 
    ? 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200' 
    : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700';

  const cardBgClass = theme === 'light'
    ? 'bg-white/80 backdrop-blur-sm border-slate-200'
    : 'bg-slate-800/80 backdrop-blur-sm border-slate-700';

  const headingClass = theme === 'light'
    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text'
    : 'bg-gradient-to-r from-blue-300 to-indigo-300 text-transparent bg-clip-text';

  const iconClass = theme === 'light' ? 'text-blue-600' : 'text-blue-300';
  const linkClass = theme === 'light'
    ? 'bg-blue-50 hover:bg-blue-100 text-blue-700'
    : 'bg-slate-700 hover:bg-slate-600 text-slate-200';

  return (
    <div className={`min-h-screen ${bgClass} relative overflow-hidden transition-colors duration-300`}>
      <ThemeToggle />
      
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-8"
      >
        <div ref={parallaxRef} className={`absolute inset-0 ${
          theme === 'light' 
            ? 'bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]'
        }`}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            className="mb-6 relative inline-block"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1.5
            }}
          >
            {/* Avatar Container */}
            <div className={`w-40 h-40 mx-auto rounded-full ${theme === 'light' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-blue-400 to-indigo-400'} p-1 relative overflow-hidden group`}>
              <motion.div 
                className={`w-full h-full rounded-full ${theme === 'light' ? 'bg-white' : 'bg-slate-900'} relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src="https://i.postimg.cc/8zK6cr6s/IMG-1453.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                />
              </motion.div>
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Rest of the hero section with enhanced animations */}
          <motion.h1 
            className={`text-4xl md:text-6xl font-bold mb-4 ${headingClass} animate-gradient`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
          >
            Hi, I'm Muhammed Shafvan MN
          </motion.h1>
          <motion.p 
            className={`text-xl md:text-2xl mb-8 ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            Aspiring Computer Scientist | Programmer | Gamer
          </motion.p>

          {/* Social links with staggered animation */}
          <motion.div 
            className="flex gap-6 justify-center mb-12 flex-wrap"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.7,
              type: "spring",
              stiffness: 100
            }}
          >
            {[
              { icon: Github, href: "https://github.com/shafvan26" },
              { icon: Instagram, href: "https://instagram.com/shafvan_talat--" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=muhammedshafvan269@gmail.com" }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500`}></div>
                <div className={`relative ${theme === 'light' ? 'bg-white' : 'bg-slate-900'} rounded-full p-3`}>
                  <item.icon className={`w-6 h-6 ${iconClass}`} />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats with staggered animation */}
          <motion.div 
            className="flex gap-8 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            {[
              { icon: Laptop, value: "3+", label: "Programming Languages" },
              { icon: Languages, value: "4", label: "Speaking Languages" },
              { icon: GameController, value: "Gaming", label: "Enthusiast" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className={`${cardBgClass} rounded-lg p-4 border transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.2) }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + (index * 0.2) }}
                >
                  <item.icon className={`w-6 h-6 ${iconClass} mb-2 mx-auto`} />
                  <div className={`text-2xl font-bold ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>{item.value}</div>
                  <div className={theme === 'light' ? 'text-slate-600' : 'text-slate-300'}>{item.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator with continuous animation */}
        <motion.div
          className="absolute bottom-8"
          animate={{ 
            y: [0, 10, 0],
            opacity: [1, 0.5, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className={`w-8 h-8 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`} />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={`max-w-4xl mx-auto relative z-10`}>
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-8 text-center ${headingClass}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className={`${cardBgClass} rounded-lg p-8 border transition-all duration-300`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className={`text-lg leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>
              I am Muhammed Shafvan MN, currently studying +1 Computer Science at GVHSS Iriyanni. I completed 8th to 10th grade at GHSS Cherkala and primary to 7th grade at PBM English Medium School, Nellikkatta. My passion lies in programming, gaming, and creating innovative solutions with technology.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills-section" className="py-20 px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-12 ${headingClass}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Languages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Programming Languages", skills: programmingSkills },
              { title: "Speaking Languages", skills: speakingLanguages }
            ].map((section, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-25 group-hover:opacity-50 blur transition duration-500`}></div>
                <div className={`relative p-8 rounded-lg ${cardBgClass} transition-all duration-300`}>
                  <h3 className={`text-xl font-semibold mb-6 ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>
                    {section.title}
                  </h3>
                  <div>
                    {section.skills.map((skill, idx) => (
                      <ProgressBar key={idx} value={skill.level} label={skill.name} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <motion.section 
        className="py-20 px-4 md:px-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${headingClass}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education Journey
          </motion.h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.a 
                key={index} 
                href={edu.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-25 group-hover:opacity-50 blur transition duration-500`}></div>
                <div className={`relative p-6 rounded-lg ${cardBgClass} transition-all duration-300`}>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <GraduationCap className={`${iconClass}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>
                        {edu.period}
                      </h3>
                      <p className={`${theme === 'light' ? 'text-slate-600' : 'text-slate-300'} flex items-center gap-2`}>
                        {edu.school}
                        <ExternalLink className="w-4 h-4 inline-block opacity-75 group-hover:opacity-100" />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold mb-8 ${headingClass}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className={`text-xl mb-8 ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Feel free to reach out for collaborations or just a friendly chat
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { text: "WhatsApp", href: "https://wa.me/919746078283?text=Hello!%20I%20hope%20you're%20doing%20well.%20I%20have%20a%20doubt%20that%20I%20would%20love%20your%20help%20with.%20Can%20you%20please%20assist%20me%20with%20it?", icon: ExternalLink },
              { text: "Instagram", href: "https://www.instagram.com/shafvan_talat__", icon: ExternalLink },
              { text: "Email Me", href: "https://mail.google.com/mail/?view=cm&to=muhammedshafvan269@gmail.com&subject=Collaboration%20Inquiry&body=Hello%20Shafvan,%0D%0A%0D%0AI%20am%20interested%20in%20collaborating%20with%20you%20on%20a%20project.%20Please%20let%20me%20know%20your%20availability%20and%20how%20we%20can%20proceed.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]", icon: Mail }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative inline-flex items-center ${linkClass} px-6 py-3 rounded-lg transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span>{link.text}</span>
                <link.icon className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className={`py-8 text-center ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'} relative z-10`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>© 2025 Muhammed Shafvan MN. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

const programmingSkills = [
  { name: "Python", level: 50 },
  { name: "HTML/CSS", level: 60 },
  { name: "C++", level: 30 },
  // { name: "CSS", level: 30 },
  { name: "JavaScript", level: 40 },
  { name: "TypeScript", level: 30 },
  { name: "React", level: 40 },
  { name: "Tailwind CSS", level: 40 },
  // { name: "Node.js", level: 30 },
  // { name: "Express", level: 30 },
  // { name: "MongoDB", level: 30 },
  // { name: "Firebase", level: 30 },
  // { name: "Git", level: 40 },
  // { name: "GitHub", level: 40 },
  // { name: "VS Code", level: 50 }
];

const speakingLanguages = [
  { name: "Malayalam", level: 100 },
  { name: "English", level: 100 },
  { name: "Hindi", level: 50 },
  { name: "Arabic", level: 30 },
  { name: "Tamil", level: 5 },
  { name: "Kannada", level: 0 },
  { name: "Telugu", level: 0 }

];

export default App;