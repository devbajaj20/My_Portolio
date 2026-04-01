import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "Dart"],
  },
  {
    title: "Languages & Frameworks",
    skills: ["HTML", "CSS", "Flask", "Flutter", "JavaScript"],
  },
  {
    title: "AI/ML Tools",
    skills: ["TensorFlow", "OpenCV", "Scikit-learn", "Keras", "PyTorch"],
  },
  {
    title: "NLP Tools",
    skills: ["BERT", "GPT", "Hugging Face", "NLTK", "SpaCy"],
  },
  {
    title: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Streamlit"],
  },
  {
    title: "Cloud & Databases",
    skills: ["MySQL", "SQLite", "Firebase", "AWS", "Google Cloud"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook", "Google Colab"],
  },
  {
    title: "Domain Knowledge",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Cognitive Computing", "System Design"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center"
      >
        <span className="text-primary text-glow-purple">Skills</span> & Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300"
          >
            <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
