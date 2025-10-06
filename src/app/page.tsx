"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
import { Github, Linkedin, Mail, Code2, Globe, Cpu, Database, Rocket } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const PROJECTS = [
  {
    title: "StreamBud",
    desc: "AI-powered stream assistant — auto-clips highlights, listens to voice commands, and controls OBS in real-time.",
    link: "#",
    tech: ["React", "TypeScript", "OpenAI", "WebSocket"],
  },
  {
    title: "DevConnect",
    desc: "A social platform for developers to collaborate, share projects, and learn together in a gamified environment.",
    link: "#",
    tech: ["Next.js", "MongoDB", "Redis", "Socket.io"],
  },
  {
    title: "TaskFlow",
    desc: "Minimalist task manager with drag-and-drop UI and real-time sync using Firebase & Zustand.",
    link: "#",
    tech: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "Tirtle",
    desc: "A real-time chat app (Talk In Real-Time + Learn & Engage) — designed like a dating app but for conversations.",
    link: "#",
    tech: ["Next.js", "Express", "MongoDB", "Socket.io"],
  },
];

const SKILLS = [
  { icon: <Code2 />, label: "Frontend", tools: ["React", "Next.js", "Tailwind", "GSAP", "Framer Motion"] },
  { icon: <Database />, label: "Backend", tools: ["Node.js", "Express", "Spring Boot", "GoLang"] },
  { icon: <Cpu />, label: "AI & Cloud", tools: ["Google Cloud", "Security Command Center", "OpenAI APIs"] },
  { icon: <Rocket />, label: "DevOps", tools: ["Docker", "GitHub Actions", "CI/CD", "Redis", "Kafka"] },
];

const Page = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* 🔹 Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ul className="flex justify-center space-x-10 py-4 font-semibold tracking-wide text-gray-300">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                className="hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                spy={true}
                activeClass="text-blue-400"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.nav>

      <div className="relative z-10">
        {/* 🌌 Hero Section */}
        <Element name="home">
          <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hey, I’m <span className="text-blue-400">Ritik</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              A <span className="text-blue-400">Software Engineer</span> & aspiring{" "}
              <span className="text-purple-400">AI Engineer</span> passionate about crafting
              performant systems, beautiful UIs, and secure cloud infrastructures.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
                whileHover={{ scale: 1.08 }}
              >
                <ScrollLink to="projects" smooth duration={600} offset={-70}>
                  View Projects
                </ScrollLink>
              </motion.button>
              <motion.button
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold shadow-lg"
                whileHover={{ scale: 1.08 }}
              >
                <ScrollLink to="contact" smooth duration={600} offset={-70}>
                  Contact Me
                </ScrollLink>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 mt-10 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <a href="https://github.com/Art0citus" target="_blank" className="hover:text-blue-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ritikmxshra" target="_blank" className="hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:mritik424@gmail.com" className="hover:text-blue-400">
                <Mail size={24} />
              </a>
            </motion.div>
          </section>
        </Element>

        {/* 🧠 About Section */}
        <Element name="about">
          <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
            <motion.h2
              className="text-4xl font-bold mb-6 text-blue-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="max-w-3xl text-gray-300 text-center leading-relaxed text-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              I’m an <span className="text-blue-400">MCA student</span> with a background in Chemistry
              and Anthropology — bridging creativity and logic.  
              I’m obsessed with building systems that scale, and experiences that feel human.  
              <br /><br />
              My long-term vision is to become a <span className="text-purple-400">Software Architect</span> 
              and craft impactful products blending AI, backend architecture, and sleek front-end design.
            </motion.p>
          </section>
        </Element>

        {/* 🧩 Skills Section */}
        <Element name="skills">
          <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
            <motion.h2
              className="text-4xl font-bold mb-10 text-blue-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              My Skill Stack
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  className="bg-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div className="flex justify-center mb-4 text-blue-400">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.label}</h3>
                  <p className="text-gray-400 text-sm">{skill.tools.join(", ")}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Element>

        {/* 💼 Projects Section */}
        <Element name="projects">
          <section id="projects" className="min-h-screen px-6 py-20 flex flex-col justify-center items-center">
            <motion.h2
              className="text-4xl font-bold mb-10 text-blue-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Projects
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="bg-white/5 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">{p.title}</h3>
                  <p className="text-gray-300 mb-4">{p.desc}</p>
                  <p className="text-sm text-gray-400 mb-4">
                    Tech: {p.tech.join(", ")}
                  </p>
                  <a
                    href={p.link}
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 inline-block"
                  >
                    View Demo
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        </Element>

        {/* 📬 Contact Section */}
        <Element name="contact">
          <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
            <motion.h2
              className="text-4xl font-bold mb-6 text-blue-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 text-center max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Open to collaborations, freelancing, or tech discussions.  
              Let’s build something great together 🚀
            </motion.p>
            <a
              href="mailto:mritik424@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold shadow-lg"
            >
              Send an Email
            </a>
          </section>
        </Element>

        {/* ⚡ Footer */}
        <footer className="text-center py-6 text-gray-400 border-t border-white/10">
          <p>© {new Date().getFullYear()} Ritik Mishra | Built with 💙 React, Tailwind, & Framer Motion</p>
          <p className="text-sm text-gray-500 mt-2">
            Hosted on Vercel • Designed with passion & coffee ☕
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
