"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPython, FaDatabase, FaLinux, FaNetworkWired, FaWhatsapp } from "react-icons/fa";
import { SiCisco, SiGnubash, SiKalilinux } from "react-icons/si";
import { Shield, Server, Wifi, ArrowUpRight, GraduationCap, Briefcase, User, Sparkles, FolderKanban, Mail, MessageSquare, Send } from "lucide-react";
import DarkVeil from '../components/DarkVeil';

const navItems = [
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const experiences = [
  {
    title: "IT Architect Security (Keamanan Siber)",
    type: "Internship",
    company: "PT. Asuransi Astra Buana",
    date: "Jun 2025 - Aug 2025",
    desc: [
      "Gaining additional knowledge in performing penetration testing on web applications, APIs, and architectural components to uncover vulnerabilities.",
      "Normalizing log data from Security Information and Event Management (SIEM).",
      "Enhancing and preparing reports for infrastructure security hardening across all servers, endpoints, and network components based on the CIS Benchmark.",
      "Collaborating with fellow IT Security Architects, especially within the Security Hardening team."
    ],
  },
  {
    title: "Network Operation Center",
    type: "Internship",
    company: "PT. Broadband Indonesia Pratama",
    date: "Feb 2026 - May 2026",
    desc: [
      "Monitored ISP network health via Zabbix and PRTG Network Monitor tracking upstream/downstream links, traffic utilization, and alarm severity levels.",
      "Activated new FTTH customers via SmartOLT: ONU/ONT registration & authorization, VLAN/service profile configuration, and Rx Power verification per GPON ITU-T G.984.",
      "Diagnosed and resolved FTTH/wireless connectivity issues remotely using Winbox (MikroTik RouterOS) analyzing packet loss and optical attenuation for FTTH, and resolving 5GHz channel interference.",
      "Built MikroTik firewall automation scripts to detect/block port scanning and restrict device login via custom ports, IP whitelisting, and disabling insecure services.",
      "Changing WPA/WPA2-PSK credentials on customer CPE (Tenda routers) to remediate unauthorized network access."
    ],
  },
];

const organizations = [
  {
    title: "Sub-Coordinator (Design)",
    type: "Design and Documentation",
    company: "KKN-PPM UGM | Patuk Gumathuk",
    date: "Present",
    desc: [
      "Designed all digital and print design needs for the UGM KKN-PPM team, including feeds, stories, Instagram highlights, vest designs, banners, and miniflags.",
      "Created a design ordering system using Google Sheets to ensure all design needs were structured, clear, and precise.",
      "Collaborated with the coordinator and other divisions to ensure designs were well-designed and aligned with the KKN team's concept."
    ],
  },
  {
    title: "Sub-Coordinator (Decoration)",
    type: "DDD Division",
    company: "NETCOMP 3.0 | Networking Competition",
    date: "Jul 2024 - Feb 2025",
    desc: [
      "Design decorative items such as banners, photo booth backdrops, welcome gates, and other visual decoration needs using Figma and Canva.",
      "Supervise and coordinate decoration division staff to ensure design requirements are met and delivered on time.",
      "Collaborate with coordinators, sub-coordinators, and staff in the same or other divisions to ensure designs align with the NETCOMP event concept."
    ],
  },
];

const projects = [
  {
    title: "Bagama (Waste Exchange System)",
    type: "Programming Project",
    date: "2023",
    desc: [
      "Developed a simple program application for a waste-to-points exchange system (Bagama - Bank Sampah Gadjah Mada) using Python."
    ],
    link: "https://drive.google.com/file/d/1d_jPvQsgYZlfnFBsldFeEFqC7rkO_iGk/view?usp=sharing"
  },
  {
    title: "IoT-Based Smart Home Simulation",
    type: "IoT Project",
    date: "2024",
    desc: [
      "Built a Fire and Smoke Detector Device Automation System.",
      "Simulated and configured using Cisco Packet Tracer."
    ],
    previewImg: "/iot-home-preview.png",
    fullImage: "/iot-home-preview.png"
  },
  {
    title: "Internet Cafe Topology Simulation",
    type: "Network Project",
    date: "2024",
    desc: [
      "Developed a 3-floor internet cafe network topology and system simulation based on Cisco Packet Tracer.",
      "Configured network devices including routers, switches, access points, DNS servers, and web servers."
    ],
    previewImg: "/topology-preview.png",
    fullImage: "/topology-preview.png"
  },
  {
    title: "CVEFINDER: Automated Pentest & CVE Identification via Gemini AI",
    type: "Research & Publication (JISE)",
    date: "2024 - 2025",
    desc: [
      "Developed an automated network vulnerability identification system integrating Nmap scan results with Google Gemini AI analysis.",
      "Parsed scan metadata to correlate service versions against CVE databases (e.g., vsftpd, Apache).",
      "Generated structured natural language security risk reports.",
      "Published in the Journal of Internet and Software Engineering (JISE)."
    ],
    link: "https://drive.google.com/file/d/1Fvy_yCtsppX65yeYT72dXXgW7WSADNNs/view?usp=sharing"
  },
];

const educations = [
  {
    degree: "Applied Bachelor of Internet Technology Engineering, 3.71/4.00",
    school: "Universitas Gadjah Mada - Sleman, DIY",
    date: "Jul 2023 - Aug 2027 (Expected)",
    desc: "Actively involved in networking and cybersecurity coursework, consistently achieving excellent academic results. Participating in practical laboratory sessions focused on IT Infrastructure and Information Security.",
  },
];

const skills = [
  { name: "Python", icon: <FaPython className="w-8 h-8" /> },
  { name: "Bash", icon: <SiGnubash className="w-8 h-8" /> },
  { name: "SQL", icon: <FaDatabase className="w-8 h-8" /> },
  { name: "Security", icon: <Shield className="w-8 h-8" /> },
  { name: "Pentest", icon: <SiKalilinux className="w-8 h-8" /> },
  { name: "Linux", icon: <FaLinux className="w-8 h-8" /> },
  { name: "Network", icon: <FaNetworkWired className="w-8 h-8" /> },
  { name: "Hardware", icon: <Server className="w-8 h-8" /> },
  { name: "Telecom", icon: <Wifi className="w-8 h-8" /> },
  { name: "Cisco", icon: <SiCisco className="w-8 h-8" /> },
];

const certs = [
  {
    title: "CCNAv7 (2024): Introduction to Networking",
    previewUrl: "https://drive.google.com/file/d/1rxlLtmMvYrsM0p1mADom0iQ9qjnXtsDZ/preview",
    link: "https://drive.google.com/file/d/1rxlLtmMvYrsM0p1mADom0iQ9qjnXtsDZ/view"
  },
  {
    title: "Cisco Networking Academy (2025): Introduction to IoT and Digital Transformation",
    previewUrl: "https://drive.google.com/file/d/1OGOLZyseheJ4na_K2Pf658pax7KLbUK1/preview",
    link: "https://drive.google.com/file/d/1OGOLZyseheJ4na_K2Pf658pax7KLbUK1/view"
  },
  {
    title: "Cisco Networking Academy (2025): English For IT",
    previewUrl: "https://drive.google.com/file/d/1HAND6UDBCINSW5Xrfm8mvXesz_dMY17L/preview",
    link: "https://drive.google.com/file/d/1HAND6UDBCINSW5Xrfm8mvXesz_dMY17L/view"
  },
  {
    title: "CCNAv7 (2024): Switching, Routing, and Wireless Essentials",
    previewUrl: "https://drive.google.com/file/d/1e17bjGQqjuEyM-mVOliE6wYcCteUiM7t/preview",
    link: "https://drive.google.com/file/d/1e17bjGQqjuEyM-mVOliE6wYcCteUiM7t/view"
  },
  {
    title: "Cisco Networking Academy (2025): CyberOps Associate",
    previewUrl: "https://drive.google.com/file/d/1CGqwKe_t2CsadNawGmI7tbRpTh5J7cMg/preview",
    link: "https://drive.google.com/file/d/1CGqwKe_t2CsadNawGmI7tbRpTh5J7cMg/view"
  },
  {
    title: "Mini Bootcamp Web Pentest by Codelamp (2025)",
    previewUrl: "https://drive.google.com/file/d/1uUzyn6bJbrBTy-0xmul1P-hufO9T0efp/preview",
    link: "https://drive.google.com/file/d/1uUzyn6bJbrBTy-0xmul1P-hufO9T0efp/view"
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - 100;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
    setActiveSection(id);
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString() || "Anonymous";
    const email = formData.get("email")?.toString() || "No Email";
    const message = formData.get("message")?.toString() || "";
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/muhammadhilmirafifardana2005@mail.ugm.ac.id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Portfolio Transmission from ${name}`,
          Name: name,
          Email: email,
          Message: message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus("idle"), 5000); // Reset UI after 5s
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF00FF]/30 selection:text-white relative">
      
      {/* DarkVeil Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
        <DarkVeil speed={0.2} noiseIntensity={0.05} scanlineIntensity={0} warpAmount={0.02} resolutionScale={0.8} />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 p-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? "bg-[#050505]/80 backdrop-blur-md shadow-lg border-b border-[#00FFFF]/10" : "bg-transparent"}`}>
        <div>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-2xl font-extrabold tracking-tight text-white hover:text-[#00FFFF] transition-colors">
            Ardan.
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`inline-block text-sm md:text-base font-semibold transition-all duration-300 hover:text-[#00FFFF] hover:-translate-y-0.5 ${
                activeSection === item.id ? "text-[#FF00FF] scale-110 drop-shadow-[0_0_8px_rgba(255,0,255,0.4)]" : "text-gray-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-32 space-y-40">
        
        {/* About / Hero */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="scroll-mt-40">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col space-y-6">
              <h2 className="text-xl text-[#FF00FF] font-medium mb-2 tracking-widest uppercase">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-[3.5rem] lg:text-6xl font-extrabold leading-tight text-white tracking-tight drop-shadow-sm whitespace-nowrap">
                Muhammad Hilmi <br />
                <span className="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-transparent bg-clip-text">Rafif Ardana</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed font-light min-h-[5rem] text-justify">
                Third-Year Student of Applied Bachelor in Internet Engineering Technology at Gadjah Mada University, with hands-on experience in network operations and cybersecurity. I have a strong desire to build a career in the field of networking such as IT Infrastructure, IT Support, or Network Operation Center to enhance my insights and skills in a professional industrial environment. Experienced with network monitoring tools (Zabbix, PRTG), network device configuration, equipped with basic cybersecurity practices including penetration testing, SIEM log analysis, and CIS Benchmark hardening.
              </p>
              <div className="pt-4 flex gap-4">
                <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="group relative px-8 py-3 bg-[#00FFFF]/10 backdrop-blur-sm border border-[#00FFFF]/30 rounded-full overflow-hidden transition-all duration-300 hover:border-[#00FFFF]/80 flex items-center shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]">
                  <div className="absolute inset-0 bg-[#00FFFF] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative font-semibold text-[#00FFFF] group-hover:text-white tracking-wide">Contact Me</span>
                  <ArrowUpRight className="relative w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#00FFFF] group-hover:text-white" />
                </a>
                <a href="https://linkedin.com/in/rafifardana" target="_blank" rel="noreferrer" className="group px-8 py-3 border border-gray-600 rounded-full text-gray-400 font-medium hover:bg-gray-800 hover:text-white hover:border-gray-400 transition-all duration-300">
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end mt-10 md:mt-0">
              <div className="w-72 h-72 md:w-96 md:h-96 shrink-0 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-[#1a1a1a] shadow-[0_0_40px_rgba(255,0,255,0.25)] hover:shadow-[0_0_50px_rgba(0,255,255,0.3)] bg-black/50 flex justify-center items-center transform transition-all duration-700 hover:scale-[1.02]">
                <img src="/profile.jpg" alt="Muhammad Hilmi Rafif Ardana" className="w-full h-full object-cover object-[50%_30%]" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="scroll-mt-40 space-y-10">
          <h2 className="text-3xl text-white mb-6 font-extrabold flex items-center gap-3">
            <GraduationCap className="text-[#00FFFF] w-8 h-8" /> 
            Education
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            {educations.map((edu, idx) => (
              <div key={idx} className="relative rounded-3xl bg-[#111111]/80 backdrop-blur-md border border-gray-800 p-8 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg hover:border-[#00FFFF]/40 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 to-[#FF00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00FFFF] transition-colors">{edu.school}</h3>
                    <span className="text-sm font-semibold text-[#FF00FF] bg-[#FF00FF]/10 px-4 py-1.5 rounded-full">{edu.date}</span>
                  </div>
                  <p className="text-gray-300 font-semibold mb-6 text-lg">{edu.degree}</p>
                  <p className="text-gray-400 leading-relaxed font-light text-justify">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="scroll-mt-40 space-y-10">
          <h2 className="text-3xl text-white mb-6 font-extrabold flex items-center gap-3">
            <FolderKanban className="text-[#FF00FF] w-8 h-8" />
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => {
              const CardContent = (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF00FF]/5 to-[#00FFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold text-[#00FFFF] bg-[#00FFFF]/10 px-3 py-1 rounded-full uppercase tracking-wider">{proj.type}</span>
                      <span className="text-sm font-medium text-gray-500">{proj.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF00FF] transition-colors">{proj.title}</h3>
                    
                    {proj.previewImg && (
                      <div className="w-full h-40 mb-4 rounded-xl overflow-hidden border border-gray-800 bg-black/50">
                        <img src={proj.previewImg} alt={proj.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    
                    <ul className="text-gray-400 leading-relaxed font-light text-justify mb-auto list-disc list-outside pl-4 space-y-2">
                      {Array.isArray(proj.desc) ? proj.desc.map((point, i) => (
                        <li key={i}>{point}</li>
                      )) : <li>{proj.desc}</li>}
                    </ul>
                    
                    {proj.link && (
                      <div className="mt-6 flex items-center gap-2 text-[#00FFFF] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </div>
                    )}
                    {proj.fullImage && !proj.link && (
                      <div className="mt-6 flex items-center gap-2 text-[#00FFFF] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        View Full Image <ArrowUpRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </>
              );

              const isClickable = proj.link || proj.fullImage;
              const className = `relative rounded-3xl bg-[#111111]/80 backdrop-blur-md border border-gray-800 p-8 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg hover:border-[#FF00FF]/40 group flex flex-col h-full ${isClickable ? 'cursor-pointer' : ''}`;

              if (proj.link) {
                return (
                  <a href={proj.link} target="_blank" rel="noreferrer" key={idx} className={className}>
                    {CardContent}
                  </a>
                );
              }

              return (
                <div 
                  key={idx} 
                  className={className} 
                  onClick={() => proj.fullImage && setSelectedImage(proj.fullImage)}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Experience & Organizations */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="scroll-mt-40 space-y-16">
          
          {/* Professional Experience */}
          <div>
            <h2 className="text-3xl text-white mb-6 font-extrabold flex items-center gap-3">
              <Briefcase className="text-[#00FFFF] w-8 h-8" />
              Professional Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative rounded-3xl bg-[#111111]/80 backdrop-blur-md border border-gray-800 p-8 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg hover:border-[#00FFFF]/40 group flex flex-col h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 to-[#FF00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold text-[#FF00FF] bg-[#FF00FF]/10 px-3 py-1 rounded-full uppercase tracking-wider">{exp.type}</span>
                      <span className="text-sm font-medium text-gray-500">{exp.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00FFFF] transition-colors">{exp.title}</h3>
                    <div className="text-gray-300 font-medium mb-6 pb-4 border-b border-gray-800">
                      {exp.company}
                    </div>
                    <ul className="text-gray-400 leading-relaxed font-light text-justify list-disc list-outside pl-4 space-y-2">
                      {Array.isArray(exp.desc) ? exp.desc.map((point, i) => (
                        <li key={i}>{point}</li>
                      )) : <li>{exp.desc}</li>}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div>
            <h2 className="text-3xl text-white mb-6 font-extrabold flex items-center gap-3">
              <User className="text-[#00FFFF] w-8 h-8" />
              Organizations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizations.map((exp, idx) => (
                <div key={idx} className="relative rounded-3xl bg-[#111111]/80 backdrop-blur-md border border-gray-800 p-8 transform hover:scale-[1.02] transition-all duration-300 overflow-hidden shadow-lg hover:border-[#00FFFF]/40 group flex flex-col h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 to-[#FF00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold text-[#FF00FF] bg-[#FF00FF]/10 px-3 py-1 rounded-full uppercase tracking-wider">{exp.type}</span>
                      <span className="text-sm font-medium text-gray-500">{exp.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00FFFF] transition-colors">{exp.title}</h3>
                    <div className="text-gray-300 font-medium mb-6 pb-4 border-b border-gray-800">
                      {exp.company}
                    </div>
                    <ul className="text-gray-400 leading-relaxed font-light text-justify list-disc list-outside pl-4 space-y-2">
                      {Array.isArray(exp.desc) ? exp.desc.map((point, i) => (
                        <li key={i}>{point}</li>
                      )) : <li>{exp.desc}</li>}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.section>

        {/* Skills & Certs */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="scroll-mt-40 space-y-10">
          <h2 className="text-3xl text-white mb-6 font-extrabold flex items-center gap-3">
            <Sparkles className="text-[#FF00FF] w-8 h-8" />
            Skills & Certifications
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="relative rounded-2xl bg-[#111111]/80 backdrop-blur-md border border-gray-800 p-6 flex flex-col items-center justify-center gap-4 transform hover:-translate-y-2 hover:border-[#FF00FF]/50 transition-all duration-300 group shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF00FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="text-gray-500 group-hover:text-[#FF00FF] transition-colors z-10">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors z-10">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certs.map((cert, idx) => (
                <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="relative rounded-2xl bg-[#111111]/80 backdrop-blur-md border border-gray-800 p-4 transform hover:scale-[1.02] transition-all duration-300 group shadow-md hover:border-[#00FFFF]/40 flex flex-col gap-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00FFFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Google Drive Preview Iframe */}
                  <div className="w-full h-40 rounded-xl overflow-hidden relative bg-black border border-gray-800 z-10">
                    <div className="absolute inset-0 bg-transparent z-20"></div> {/* Prevents iframe stealing scroll */}
                    <iframe src={cert.previewUrl} className="w-full h-full border-none pointer-events-none" scrolling="no" />
                  </div>
                  
                  <span className="text-gray-300 font-medium text-sm z-10 group-hover:text-[#00FFFF] transition-colors leading-relaxed">
                    {cert.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="scroll-mt-40 space-y-10 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Let's <span className="text-[#00FFFF]">Connect</span></h2>
            <p className="text-gray-400 text-lg">I am always open to new projects or just a chat. Send your signal.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl bg-[#111111]/90 backdrop-blur-xl relative">
            <div className="absolute inset-0 border border-[#FF00FF]/20 rounded-3xl pointer-events-none"></div>

            {/* Left Column */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-800 bg-black/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-3 h-3 rounded-full bg-[#FF00FF] shadow-[0_0_10px_#FF00FF] animate-pulse"></div>
                  <span className="text-[#FF00FF] font-bold text-sm tracking-widest uppercase">System Status: Online</span>
                </div>

                <div className="space-y-4">
                  <a href="mailto:muhammadhilmirafifardana2005@mail.ugm.ac.id" className="flex items-center gap-4 bg-[#1a1a1a]/80 p-5 rounded-2xl border border-gray-800 hover:border-[#00FFFF]/40 transition-colors group">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-gray-800 group-hover:border-[#00FFFF]/40 transition-colors">
                      <Mail className="text-[#00FFFF] w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Me</p>
                      <p className="text-white font-medium text-xs md:text-sm">muhammadhilmirafifardana2005<br className="md:hidden" />@mail.ugm.ac.id</p>
                    </div>
                  </a>

                  <a href="https://wa.me/628989174219" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-[#1a1a1a]/80 p-5 rounded-2xl border border-gray-800 hover:border-[#00FFFF]/40 transition-colors group">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-gray-800 group-hover:border-[#00FFFF]/40 transition-colors">
                      <FaWhatsapp className="text-[#00FFFF] w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Chat WhatsApp</p>
                      <p className="text-white font-medium text-sm md:text-base">+62 898 917 4219</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3 text-gray-600 text-xs font-mono">
                <Wifi className="w-4 h-4 animate-pulse" />
                <span>ESTABLISHING UPLINK...</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-8 md:p-10 bg-[#0a0a0a]/60">
              <h3 className="text-lg md:text-xl font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-wider">
                <Send className="w-5 h-5 text-[#FF00FF]" />
                Initiate Data Transmission
              </h3>

              <form className="space-y-6" onSubmit={handleEmailSubmit}>
                <div className="space-y-1 group">
                  <div className="flex items-center gap-3 border-b border-gray-700 pb-2 transition-colors focus-within:border-[#00FFFF]">
                    <User className="w-4 h-4 text-gray-500 group-focus-within:text-[#00FFFF] transition-colors" />
                    <input type="text" name="name" required placeholder="Sender ID / Name" className="bg-transparent w-full outline-none text-white placeholder-gray-600 text-sm" />
                  </div>
                </div>
                
                <div className="space-y-1 group">
                  <div className="flex items-center gap-3 border-b border-gray-700 pb-2 transition-colors focus-within:border-[#00FFFF]">
                    <Mail className="w-4 h-4 text-gray-500 group-focus-within:text-[#00FFFF] transition-colors" />
                    <input type="email" name="email" required placeholder="Email Address" className="bg-transparent w-full outline-none text-white placeholder-gray-600 text-sm" />
                  </div>
                </div>

                <div className="pt-2">
                  <textarea name="message" required placeholder="Message Transmission Data" rows={4} className="w-full bg-[#1a1a1a]/50 border border-gray-700 rounded-2xl p-4 outline-none text-white placeholder-gray-600 text-sm focus:border-[#00FFFF] transition-colors resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,0,255,0.4)] ${
                    isSubmitting ? "bg-gray-600 cursor-not-allowed" : 
                    submitStatus === "success" ? "bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]" :
                    submitStatus === "error" ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]" :
                    "bg-[#FF00FF] hover:bg-[#FF00FF]/80 hover:scale-[1.02]"
                  } text-white`}
                >
                  {isSubmitting ? "TRANSMITTING..." : 
                   submitStatus === "success" ? "TRANSMISSION SUCCESSFUL!" :
                   submitStatus === "error" ? "TRANSMISSION FAILED (RETRY)" : 
                   <>INITIATE TRANSMISSION <ArrowUpRight className="w-5 h-5" /></>}
                </button>
              </form>
            </div>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 pt-16 pb-8 mt-32 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF00FF]" />
                Ardan.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Third-Year Applied Bachelor Student at UGM. IT Infrastructure, Security, & Network Enthusiast based in Indonesia.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[#00FFFF] font-bold text-sm tracking-widest uppercase mb-6">Navigation</h4>
              <ul className="space-y-3">
                {['About', 'Education', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} onClick={(e) => scrollToSection(e, item.toLowerCase())} className="text-gray-400 hover:text-[#00FFFF] transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div>
              <h4 className="text-[#00FFFF] font-bold text-sm tracking-widest uppercase mb-6">Specialties</h4>
              <ul className="space-y-3">
                {['Network Engineering', 'Cybersecurity', 'IT Infrastructure', 'Penetration Testing'].map((item) => (
                  <li key={item} className="text-gray-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-[#00FFFF] font-bold text-sm tracking-widest uppercase mb-6">Connect</h4>
              <ul className="space-y-3">
                <li><a href="https://linkedin.com/in/rafifardana" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FF00FF] transition-colors text-sm">LinkedIn</a></li>
                <li><a href="mailto:muhammadhilmirafifardana2005@mail.ugm.ac.id" className="text-gray-400 hover:text-[#FF00FF] transition-colors text-sm">Email</a></li>
                <li><a href="https://github.com/RaveArdan" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FF00FF] transition-colors text-sm">GitHub</a></li>
                <li><a href="https://wa.me/628989174219" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#FF00FF] transition-colors text-sm">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Muhammad Hilmi Rafif Ardana. All rights reserved.
            </p>
            <button 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-[#FF00FF] hover:text-[#00FFFF] text-sm font-medium flex items-center gap-2 transition-colors"
            >
              Back to Top <ArrowUpRight className="w-4 h-4 transform -rotate-45" />
            </button>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Full size preview"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,255,255,0.2)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white bg-black/50 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
