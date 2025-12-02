import { Link } from "react-router-dom";
import { Bot, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      
      {/* Live Demo Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* AI Chatbot */}
          <div className="glass rounded-xl p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Live Demo</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              <span className="text-gradient">AI Chatbot</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Real-time streaming responses with Google Gemini AI.
            </p>
            <Link to="/chatbot">
              <Button size="lg" className="gap-2">
                <Bot className="w-4 h-4" />
                Launch Chatbot
              </Button>
            </Link>
          </div>

          {/* Sentiment Analyzer */}
          <div className="glass rounded-xl p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Live Demo</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              <span className="text-gradient">Sentiment Analyzer</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Analyze text sentiment with emotion detection.
            </p>
            <Link to="/sentiment">
              <Button size="lg" className="gap-2">
                <Brain className="w-4 h-4" />
                Try Analyzer
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
