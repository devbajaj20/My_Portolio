import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import MoreSection from "@/components/MoreSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <MoreSection />
    <ContactSection />
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <p>© 2025 Devashish Bajaj. Built with passion and code.</p>
    </footer>
  </div>
);

export default Index;
