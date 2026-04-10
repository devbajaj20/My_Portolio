import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Linkedin, Github, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const roles = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "NLP Enthusiast",
  "Problem Solver",
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent/10 font-mono text-sm"
            initial={{ y: "100vh", x: `${Math.random() * 100}vw` }}
            animate={{ y: "-10vh" }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-foreground">Devashish</span>{" "}
            <span className="text-primary text-glow-purple">Bajaj</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-2">
            I'm a{" "}
            <span className="text-accent font-semibold text-glow-cyan">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
            Turning data into intuition and algorithms into action, I build systems that learn, adapt, and evolve.
            Where others see patterns, I see potential — the spark for something smarter.
            Code is my canvas, intelligence my medium.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/Devashish_Bajaj_Resume.pdf" download>
              <Button className="glow-purple bg-primary hover:bg-primary/80">
                <Download size={16} />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/dev-bajaj-a9a586250" },
              { icon: Github, href: "https://github.com/devbajaj20" },
              { icon: Instagram, href: "https://www.instagram.com/devbajaj001/" },
              { icon: Facebook, href: "https://www.facebook.com/dev.bajaj.562/" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
            <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden glow-purple">
              <img src={profilePhoto} alt="Devashish Bajaj" className="w-full h-full object-cover" style={{ objectPosition: '50% 15%' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
