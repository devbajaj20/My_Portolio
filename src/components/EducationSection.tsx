import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    school: "SRM Institute of Science and Technology",
    location: "Kattankulathur, Chennai",
    degree: "M.Tech - Integrated, Computer Science and Engineering",
    specialization: "Cognitive Computing",
    coursework: "Data Analysis, Software Engineering, Operating Systems, Data Structures & Algorithms, Artificial Intelligence, Machine Learning, NLP, Computer Networks, OOP, DBMS",
    grade: "CGPA: 9.08/10",
    period: "Expected 2027",
  },
  {
    school: "Rising Sun Public School",
    location: "Karnal, Haryana",
    degree: "Higher Secondary Education (Class XII) - CBSE",
    specialization: "MPC",
    coursework: "Physics, Chemistry, Mathematics, Computer Science",
    grade: "87.2%",
    period: "2022",
  },
  {
    school: "Pratap Public School",
    location: "Sector-6, Karnal, Haryana",
    degree: "Secondary Education (Class X) - CBSE",
    specialization: "",
    coursework: "",
    grade: "95%",
    period: "2020",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 relative">
    <div className="max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center"
      >
        <span className="text-primary text-glow-purple">Education</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary glow-purple hidden md:block" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      <GraduationCap size={20} className="text-primary" />
                      {edu.school}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {edu.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-accent shrink-0">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                </div>
                <p className="text-foreground font-medium">{edu.degree}</p>
                {edu.specialization && (
                  <p className="text-primary text-sm mt-1">Specialization: {edu.specialization}</p>
                )}
                {edu.coursework && (
                  <p className="text-muted-foreground text-sm mt-2">
                    <span className="text-foreground/70">Relevant Coursework:</span> {edu.coursework}
                  </p>
                )}
                <div className="mt-3 inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  {edu.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
