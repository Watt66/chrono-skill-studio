import { Link } from "react-router-dom";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      {/* Live Demo Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-xl p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Live Demo</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Try My <span className="text-gradient">AI Chatbot</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              A real-time AI chatbot with streaming responses, built with edge functions and Google Gemini.
            </p>
            <Link to="/chatbot">
              <Button size="lg" className="gap-2">
                <Bot className="w-4 h-4" />
                Launch Chatbot
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
