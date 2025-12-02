import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProjectsSection />
      
      <footer className="py-8 text-center border-t border-border/50">
        <p className="text-muted-foreground text-sm font-body">
          Built with passion for AI & Software Development
        </p>
      </footer>
    </main>
  );
};

export default Index;
