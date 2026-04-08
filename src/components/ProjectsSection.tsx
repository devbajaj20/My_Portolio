import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "Air Quality Analysis",
    subtitle: "Environmental Data Analytics",
    role: "Data Analyst / ML Engineer",
    period: "Jul 2025 - Oct 2025",
    tech: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "scikit-learn", "Prophet"],
    points: [
      "Built an interactive AQI analytics dashboard using Python and Streamlit",
      "Integrated Plotly for advanced charting and Prophet for short-term AQI forecasting",
      "Live AQI & weather viewer using the Weatherbit API for real-time conditions",
      "Enhanced UX with filters, KPI cards, and multi-city pollutant comparisons",
    ],
    github: "https://github.com/devbajaj20",
  },
  {
    title: "Skin Disease Detection",
    subtitle: "AI in HealthTech",
    role: "AI/ML Engineer",
    period: "Feb 2025 - May 2025",
    tech: ["EfficientNet-B0", "TensorFlow", "OpenCV", "Flask", "HTML/CSS"],
    points: [
      "Designed a multi-class image classification system for six skin diseases",
      "Built skin type detection using deep learning models",
      "Aiming to deploy as a web app for instant diagnosis and early detection",
    ],
    github: "https://github.com/devbajaj20",
  },
  {
    title: "Flight Finder AI",
    subtitle: "NLP & TravelTech",
    role: "NLP Engineer",
    period: "Jan 2024 - Mar 2024",
    tech: ["Python", "Transformers (BERT/GPT)", "Chainlit", "REST APIs", "Pandas"],
    points: [
      "Built a conversational AI chatbot using Transformer-based NLP models",
      "Retrieves real-time flight data based on natural language user queries",
      "Enabled faster, more intuitive flight search through dynamic dialogue handling",
    ],
    github: "https://github.com/devbajaj20",
  },
  {
    title: "Library Management System",
    subtitle: "Software/Application Development",
    role: "Full Stack Developer",
    period: "Jan 2025 - Mar 2025",
    tech: ["Python", "SQLite", "Tkinter", "SQL"],
    points: [
      "Designed desktop-based Library Management System with structured DB schema",
      "Integrated CRUD operations for book inventory, member management, and issue/return tracking",
      "Built intuitive GUI with efficient data validation and real-time updates",
    ],
    github: "https://github.com/devbajaj20",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center"
      >
        <span className="text-primary text-glow-purple">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-accent text-sm">{project.subtitle}</p>
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span>{project.role}</span>
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {project.period}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>

            <ul className="space-y-2">
              {project.points.map((point, j) => (
                <li key={j} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-accent mt-1 shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
