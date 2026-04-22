import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  FileText,
  MessageSquare,
} from "lucide-react";
import "./App.css";
import emotion from "./Assets/Projects/project1.png";
import editor from "./Assets/Projects/project2.png";
import chatify from "./Assets/Projects/project3.png";
import polis from "./Assets/Projects/polis.png";
import combattix from "./Assets/Projects/combattix.png";
import springlanenursery from "./Assets/Projects/springlane.png";
import trukey from "./Assets/Projects/trukey.png";
import elevation from "./Assets/Projects/elevation.png";
import ideaallies from "./Assets/Projects/ideaallies.png";
import suicide from "./Assets/Projects/project4.png";
import pacDashboard from "./Assets/Projects/pac.png";
import impact from "./Assets/Projects/impact.png";
import fashionhub from "./Assets/Projects/fashionhub.png";
import user from "./Assets/DP.jpeg";

// Navigation Component
const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Experience", href: "#experience", icon: FileText },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-2xl font-bold text-primary-600 dark:text-primary-400"
            >
              &lt;Dev/&gt;
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl font-bold">
              SF
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Samson Favour
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Full Stack Developer | React/Next.js Specialist | GraphQL/Node
            js/Express js & MongoDB
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            I build scalable, production-grade web applications end-to-end —
            from pixel-perfect UIs to robust APIs and databases. Passionate
            about clean architecture, seamless user experiences, and continuous
            growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="https://github.com/favour-samson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/samson-thomas-995845334?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:favoursamson347@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-auto overflow-hidden rounded-2xl">
            <img
              src={user}
              alt="Samson Favour"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a full stack developer with 3+ years of experience building
              production-grade web applications across fintech, e-commerce, real
              estate, and SaaS domains. My stack spans React, Next.js, and
              TypeScript on the frontend, with Node.js, GraphQL, Express, and
              MongoDB powering the backend.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I've shipped platforms handling real users and real money —
              integrating payment gateways like Paystack, designing role-based
              systems, and building admin dashboards from scratch. I'm currently
              expanding into cloud infrastructure with Google Cloud Platform
              (GCP).
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg">
                Team Player
              </span>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg">
                Fast Learner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML / CSS", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js / Express", level: 80 },
        { name: "GraphQL / Apollo", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Paystack Integration", level: 85 },
      ],
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "GCP", level: 40 },
        { name: "Figma", level: 80 },
        { name: "Webpack / Vite", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                        {skill.name === "GCP" && (
                          <span className="text-xs text-yellow-500 dark:text-yellow-400 font-medium ml-2">
                            Learning
                          </span>
                        )}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "Polis",
      description:
        "Our real estate platform transforms the way you rent, buy, and list properties. With an intuitive interface, users can effortlessly manage property listings, whether it's for long-term rentals, purchases, or short-term stays.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      image: polis,
      github: "",
      live: "https://polis.ng",
    },
    {
      title: "Combattix",
      description:
        "Combattix provides a seamless platform for combat sports ticketing and event management. Fans can purchase tickets easily, while fighters and promoters benefit from streamlined event organization and audience engagement.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      image: combattix,
      github: "",
      live: "https://www.combattix.com/",
    },
    {
      title: "Fashion Hub",
      description:
        "A multi-vendor fashion e-commerce platform where vendors can list and manage clothing products, cart management, Paystack payment integration, and a full admin dashboard for overseeing vendors, orders, and platform analytics.",
      technologies: [
        "Next.js",
        "TypeScript",
        "GraphQL",
        "MongoDB",
        "Tailwind CSS",
      ],
      image: fashionhub,
      github: "",
      live: "https://fashion-hub-shop.vercel.app/",
    },
    {
      title: "Springlane Nursery",
      description:
        "Spring Lane Nursery provides a warm, safe, and inspiring early education environment for children aged 3 months to 5 years, based on the EYFS framework.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      image: springlanenursery,
      github: "",
      live: "https://www.springlanenursery.co.uk/",
    },
    {
      title: "Evolution Impact Initiative",
      description:
        "A community-driven organisation supporting young people, families, and vulnerable groups through programs that build skills, wellbeing, and social impact.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: impact,
      github: "",
      live: "https://www.evolutionimpactinitiative.co.uk/",
    },
    {
      title: "TruKey Property",
      description:
        "Purpose-driven, fully managed housing solutions for councils, insurers, landlords, and residents—ensuring safe, compliant, ready-to-live-in accommodation.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: trukey,
      github: "",
      live: "https://www.trukeyproperty.co.uk/",
    },
    {
      title: "HookBank",
      description:
        "Hoobank revolutionizes how you manage credit cards. Our expert team uses a cutting-edge methodology to identify the cards that best suit your financial needs. We analyze factors such as annual percentage rates and fees to help you make informed decisions and maximize your financial potential.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: chatify,
      github: "https://github.com/favour-samson/hook-bank",
      live: "https://hookbank-ui.vercel.app/",
    },
    {
      title: "BGL",
      description:
        "We are one of Africa's leading Securities Trading and Dealing Companies headquartered in Lagos, Nigeria. We provide world dealing services and products to clients BGL Securities leverages on the distinctive BGL brand, harnessing its core competence and unique human resources to deliver excellent and value added services to clients",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: emotion,
      github: "https://github.com/favour-samson/stockapp",
      live: "https://stockapp-ashy.vercel.app/",
    },
    {
      title: "Table Cloth",
      description:
        "Tablecloth Finance is your hub for money matters, news, content, and tools. Whether you're working on becoming debt free, buying a house, exploring investment opportunities, or planning for retirement, we'll guide you along the path to financial freedom.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: editor,
      github: "https://github.com/favour-samson/tablecloth",
      live: "https://tablecloth-finance-ui.vercel.app/",
    },
    {
      title: "Furnishop",
      description:
        "Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: suicide,
      github: "https://github.com/favour-samson/furnishop",
      live: "https://furnishop-lilac.vercel.app/",
    },
    {
      title: "Elevation Mentorship",
      description:
        "A coaching and personal development platform designed to help individuals unlock their potential across finance, business, and personal wellbeing.",
      technologies: ["Next.js", "Tailwind CSS"],
      image: elevation,
      github: "",
      live: "https://www.elevationmentorship.co.uk/",
    },
    {
      title: "Idea Allies",
      description:
        "Startup accelerator and creative agency helping founders validate ideas, design products, and scale with confidence.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: ideaallies,
      github: "",
      live: "https://www.ideaallies.com/",
    },
    {
      title: "PAC Admin Dashboard",
      description:
        "An admin dashboard for managing financial investments, tracking transactions, and monitoring user engagement in real time.",
      technologies: ["React", "TypeScript", "Chart.js"],
      image: pacDashboard,
      github: "",
      live: "https://admin-asset-dashboard.vercel.app/dashboard",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <Github size={20} />
                      Code
                    </a>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Idea Allies",
      period: "05/2025 - 12/2025",
      location: "United Kingdom · Remote",
      description:
        "Architect and develop full stack applications using modern frameworks and technologies",
      achievements: [
        "Collaborated with cross functional team to translate business requirements into technical solutions",
        "Lead development initiative and drive technical decision making",
        "Designed and implemented database structure and server side logic",
        "Ensure code quality, performance optimization and security best practices",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Aspian Technologies Limited",
      period: "03/2023 - 09/2025",
      location: "England, United Kingdom · Remote",
      description:
        "Spearheaded dynamic development as a Full Stack Developer at Aspian Tech, leveraging the power of Next.js and TypeScript to craft robust front-end solutions with Redux Toolkit.",
      achievements: [
        "Driving innovation in the real estate sector by employing GraphQL and Express for the backend, ensuring seamless communication and efficient data management",
        "Instrumental in the implementation of captivating features such as email notifications, a sophisticated chat system, and a comprehensive property listing platform",
        "Actively contributing to the evolution of Polis's real estate application, combining technical expertise with creative problem-solving to deliver an unparalleled user experience",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Afrilearn",
      period: "10/2024 - 03/2025",
      location: "Ikeja, Lagos State",
      description:
        "Afrilearn offers curriculum-based class notes, homework help, animated video lessons, exam practice (WAEC, NECO, JAMB, BECE), and a personalized learning dashboard that empowers secondary and primary school students to study at their own pace in and outside of the classroom.",
      achievements: [
        "Worked on the school management system (SMS) using Next.js, Tailwind CSS, TypeScript, and RTK Query",
        "Implemented features for student performance tracking and curriculum management",
        "Collaborated with the team to enhance the learning dashboard functionality",
      ],
    },

    {
      title: "Full Stack Developer",
      company: "Tosé",
      period: "02/2024 - 03/2024",
      location: "Kenya · Remote (Contract)",
      description:
        "Architected and implemented an API for a pricing model, enabling dynamic and intelligent pricing solutions for a diverse range of products and services.",
      achievements: [
        "Leveraged Next.js and Tailwind CSS to create high-performance, responsive web applications, ensuring seamless user experiences across various devices and screen sizes",
        "Demonstrated proficiency in both front-end and back-end development",
        "Delivered scalable solutions within tight contract timelines",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Invateo Global",
      period: "10/2022 - 01/2023",
      location: "Abuja, Nigeria · Remote (Contract)",
      description:
        "Implemented user interface components for JavaScript-based web applications using React ecosystem.",
      achievements: [
        "Developed responsive web-based UI and optimized components that work seamlessly across different devices",
        "Worked with third-party dependencies and APIs to integrate external services",
        "Collaborated with design team to implement pixel-perfect interfaces",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Softmesh",
      period: "08/2021 - 11/2022",
      location: "Akure, Nigeria",
      description:
        "Gained hands-on experience in modern web development practices and technologies.",
      achievements: [
        "Implemented websites and landing pages from concept through deployment",
        "Optimized website speed and user experience through performance best practices",
        "Integrated and used REST and GraphQL API data in different web applications",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {exp.location}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary-600 dark:text-primary-400 mt-1">
                      ▸
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Get In Touch
        </h2>
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2026 Samson Favour. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/favour-samson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/samson-thomas-995845334?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:favoursamson347@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
