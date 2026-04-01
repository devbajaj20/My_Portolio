import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", date: "Oct 2025", id: "1C6D2F07..." },
  { title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps", issuer: "Coursera", date: "Nov 2025", id: "01YPB6UWYRZ5" },
  { title: "C for Everyone: Programming Fundamentals", issuer: "Coursera", date: "Nov 2025", id: "8HG7HLZVWZXI" },
  { title: "NLP and Text Mining Tutorial for Beginners", issuer: "Simplilearn", date: "Apr 2025", id: "JK0zMufIb1b" },
  { title: "Networking Basics", issuer: "Cisco", date: "Sep 2024", id: "b2b53df9..." },
  { title: "Database Structures and Management with MySQL", issuer: "Coursera", date: "Mar 2024", id: "5R8BCYFPMWFT" },
  { title: "AWS Academy Machine Learning Foundations", issuer: "AWS", date: "Feb 2024", id: "9c1d6011..." },
  { title: "Computer Vision Essentials", issuer: "Great Learning", date: "Mar 2024", id: "IYNESPBP" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center"
      >
        <span className="text-primary text-glow-purple">Certifications</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 flex flex-col"
          >
            <Award size={24} className="text-primary mb-3" />
            <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug flex-1">{cert.title}</h3>
            <p className="text-xs text-accent font-medium">{cert.issuer}</p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <Calendar size={10} /> {cert.date}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
