import { motion } from "framer-motion";
import { Trophy, Languages, Code } from "lucide-react";

const MoreSection = () => (
  <section id="more" className="py-24">
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center"
      >
        <span className="text-primary text-glow-purple">Secret</span> Stash
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Competitions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-6">
            <Trophy className="text-accent" size={20} />
            Competitions & Workshops
          </h3>
          <div className="space-y-4">
            {[
              { title: "CAD 2.0 Hackathon", detail: "Finalist · Coding Ninjas SRM University", date: "Mar 2024" },
              { title: "Layer Blockchain Hackathon", detail: "Finalist · Blockchain Club SRM University", date: "Mar 2024" },
              { title: "Cognitive Analytics and Its Application", detail: "Workshop · SRM IST", date: "Sep 2023" },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-primary/30 pl-4">
                <p className="text-foreground font-medium text-sm">{item.title}</p>
                <p className="text-muted-foreground text-xs">{item.detail}</p>
                <p className="text-accent text-xs mt-1">{item.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-6">
            <Languages className="text-accent" size={20} />
            Languages
          </h3>
          <div className="space-y-4">
            {[
              { lang: "English", level: "Professional Working Proficiency", pct: 90 },
              { lang: "Hindi", level: "Native Proficiency", pct: 100 },
              { lang: "French", level: "Fundamental Proficiency", pct: 30 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground font-medium">{item.lang}</span>
                  <span className="text-muted-foreground text-xs">{item.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4 mt-8">
            <Code className="text-accent" size={20} />
            Areas of Interest
          </h3>
          <div className="flex flex-wrap gap-2">
            {["NLP / Conversational AI", "Machine Learning", "Full Stack Development", "Computer Vision", "Software Engineering"].map((area) => (
              <span key={area} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MoreSection;
