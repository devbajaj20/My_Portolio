import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Linkedin, Github, Instagram, Facebook, Code2 } from "lucide-react";

const roles = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "NLP Enthusiast",
  "Cognitive Computing Student",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-accent/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        {/* Subtle network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="hsl(var(--accent))" strokeWidth="1" />
          <line x1="60%" y1="10%" x2="90%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" />
          <line x1="30%" y1="80%" x2="70%" y2="30%" stroke="hsl(var(--accent))" strokeWidth="1" />
          <line x1="80%" y1="70%" x2="50%" y2="90%" stroke="hsl(var(--primary))" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Photo - Left Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative">
            {/* Code icon badge */}
            <motion.div
              className="absolute -top-3 -right-3 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code2 size={20} className="text-primary-foreground" />
            </motion.div>

            {/* Photo frame */}
            <div className="relative w-72 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 z-10" />
              <img
                src="/profile-photo.jpeg"
                alt="Devashish Bajaj"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>

            {/* Glow behind photo */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl -z-10" />
          </div>
        </motion.div>

        {/* Content - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Devashish Bajaj
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-6">
            I'm a{" "}
            <span className="text-accent font-semibold text-glow-cyan">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-lg leading-relaxed text-sm md:text-base">
            Motivated Computer Science student with hands-on experience in software engineering, AI/ML, and full-stack development. Proficient in Python, JavaScript, SQL, and Flutter, with experience building and deploying scalable web and mobile applications. Strong analytical and problem-solving mindset, with a focus on creating scalable, real-world impactful solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/Devashish_Bajaj_Resume.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-primary/40 transition-shadow"
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/dev-bajaj-a9a586250" },
              { icon: Github, href: "https://github.com/devbajaj20" },
              { icon: Instagram, href: "https://www.instagram.com/devbajaj001/" },
              { icon: Facebook, href: "https://www.facebook.com/dev.bajaj.562/" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
