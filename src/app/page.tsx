"use client";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiFirebase,
  SiOpenai,
  SiDocker,
  SiRedis,
  SiApache
} from "react-icons/si";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  Code2,
  Cpu,
  Database,
  Rocket
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
import { useEffect, useState } from "react";

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
    desc: "A social platform for developers to collaborate, share projects, and learn together in a gamier environment.",
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

const TECH_SKILLS = [
  { name: "React", icon: <SiReact size={36} color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={36} color="#000000" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={36} color="#38B2AC" /> },
  { name: "Node.js", icon: <SiNodedotjs size={36} color="#68A063" /> },
  { name: "GoLang", icon: <SiGo size={36} color="#00ADD8" /> },
  { name: "Firebase", icon: <SiFirebase size={36} color="#FFCA28" /> },
  { name: "OpenAI", icon: <SiOpenai size={36} color="#412991" /> },
  { name: "Docker", icon: <SiDocker size={36} color="#0db7ed" /> },
  { name: "Redis", icon: <SiRedis size={36} color="#DC382D" /> },
  { name: "Kafka", icon: <SiApache size={36} color="#231F20" /> },
];

const SKILL_LEVELS = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "GoLang", level: 70 },
  { name: "Firebase", level: 75 },
  { name: "OpenAI", level: 65 },
  { name: "Docker", level: 70 },
  { name: "Redis", level: 60 },
  { name: "Kafka", level: 55 },
];

const Page = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // ✨ Custom glow cursor
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 🌗 Day/Night Switch
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Project filtering (wow factor)
  const [projectFilter, setProjectFilter] = useState("All");
  const techOptions = ["All", ...new Set(PROJECTS.flatMap(p => p.tech))];
  const filteredProjects = projectFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.tech.includes(projectFilter));

  return (
    <div className={`${darkMode ? "dark" : ""} relative bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white min-h-screen overflow-x-hidden transition-colors duration-500`}>
      {/* 🌟 Cursor Glow Effect */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl z-0"
        style={{ x: cursorPos.x - 128, y: cursorPos.y - 128 }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
      />

      {/* 🔹 Navbar with Day/Night Switch & Motion Effects */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3
          backdrop-blur-xl bg-gradient-to-r from-blue-900/70 via-black/60 to-purple-900/70 border-b border-white/10 shadow-lg rounded-b-2xl"
        >
          {/* Logo or Name */}
          <motion.div
            className="font-extrabold text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ritik
          </motion.div>
          {/* Nav Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="flex space-x-8 font-semibold tracking-wide text-gray-200"
          >
            {NAV_ITEMS.map((item, idx) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative cursor-pointer"
                whileHover={{ scale: 1.13, color: "#60a5fa" }}
              >
                <ScrollLink
                  to={item.to}
                  smooth
                  duration={600}
                  offset={-70}
                  className="hover:text-blue-400 transition-colors duration-200 px-2 py-1"
                  spy={true}
                  activeClass="text-blue-400"
                >
                  {item.name}
                  <motion.span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 rounded transition-all"
                    whileHover={{ width: "100%" }}
                  />
                </ScrollLink>
              </motion.div>
            ))}
          </motion.div>
          {/* Day/Night Switch */}
          <motion.button
            aria-label={darkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
            className="ml-6 rounded-full p-2 bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20 shadow"
            whileHover={{ scale: 1.15, rotate: darkMode ? 20 : -20 }}
            onClick={() => setDarkMode((d) => !d)}
          >
            {darkMode ? <Moon size={22} className="text-blue-400" /> : <Sun size={22} className="text-yellow-400" />}
          </motion.button>
        </div>
      </motion.nav>

      <div className="relative z-10">
        {/* 🌌 Hero Section */}
        <Element name="home">
          <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Parallax BG */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-60"
              style={{ y: backgroundY }}
            />

            <motion.h1
              className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg"
              style={{ y: textY }}
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
              {["projects", "contact"].map((target, i) => (
                <motion.button
                  key={target}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold shadow-lg ${
                    i === 0
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-800 hover:bg-gray-700"
                  } transition-all`}
                >
                  <ScrollLink to={target} smooth duration={600} offset={-70}>
                    {target === "projects" ? "View Projects" : "Contact Me"}
                  </ScrollLink>
                </motion.button>
              ))}
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-6 mt-10 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <a href="https://github.com/Art0citus" target="_blank" className="hover:text-blue-400">
                <Github size={26} />
              </a>
              <a href="https://www.linkedin.com/in/ritikmxshra" target="_blank" className="hover:text-blue-400">
                <Linkedin size={26} />
              </a>
              <a href="mailto:mritik424@gmail.com" className="hover:text-blue-400">
                <Mail size={26} />
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
              <br />
              I love crafting systems that scale and experiences that feel human.
            </motion.p>
          </section>
        </Element>

        {/* 🚀 Skill Stack Section */}
        <Element name="skills">
          <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
            <motion.h2
              className="text-4xl font-bold mb-10 text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              My Skill Stack
            </motion.h2>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-6xl">
              {TECH_SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg p-6 flex flex-col items-center cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 8, boxShadow: "0 0 20px #38B2AC" }}
                >
                  {skill.icon}
                  {/* Animated Skill Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${SKILL_LEVELS[i].level}%` }}
                    transition={{ duration: 1 }}
                    className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-4"
                    style={{ width: `${SKILL_LEVELS[i].level}%` }}
                  />
                  <p className="mt-4 text-white font-semibold text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </Element>

        {/* 💼 Projects with Depth Hover & Filtering */}
        <Element name="projects">
          <section className="min-h-screen px-6 py-20 flex flex-col justify-center items-center">
            <motion.h2
              className="text-4xl font-bold mb-10 text-blue-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Projects
            </motion.h2>
            {/* Project Filter */}
            <div className="mb-8 flex flex-wrap gap-3 justify-center">
              {techOptions.map(opt => (
                <button
                  key={opt}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-200
                    ${projectFilter === opt ? "bg-blue-600 text-white" : "bg-white/10 text-blue-300 hover:bg-blue-700 hover:text-white"}`}
                  onClick={() => setProjectFilter(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
              {filteredProjects.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg p-6 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px #6366f1" }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">{p.title}</h3>
                  <p className="text-gray-300 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-blue-900/40 rounded text-xs text-blue-200">{t}</span>
                    ))}
                  </div>
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

        {/* 📨 Contact Section */}
        <Element name="contact">
          <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
            <motion.h2
              className="text-4xl font-bold mb-6 text-blue-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Contact Me
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Let’s collaborate or chat about new opportunities.
              Drop me a message and I’ll respond soon!
            </motion.p>
            <motion.form
              className="w-full max-w-md space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              onSubmit={(e) => {
                e.preventDefault();
                // Add confetti or success animation here if desired
              }}
            >
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                whileFocus={{ borderColor: "#6366f1", boxShadow: "0 0 10px #6366f1" }}
                required
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                whileFocus={{ borderColor: "#6366f1", boxShadow: "0 0 10px #6366f1" }}
                required
              />
              <motion.textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                whileFocus={{ borderColor: "#6366f1", boxShadow: "0 0 10px #6366f1" }}
                required
              />
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </section>
        </Element>

        {/* ⚡ Footer */}
        <footer className="text-center py-6 text-gray-400 border-t border-white/10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            © {new Date().getFullYear()} Ritik Mishra | Built with 💙 React, Tailwind, & Framer Motion
          </motion.p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
