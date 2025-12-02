import { Brain, Code, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-primary glow-primary">
            <Brain className="w-8 h-8 text-primary-foreground" />
          </div>
          <Code className="w-6 h-6 text-primary animate-pulse" />
          <Sparkles className="w-6 h-6 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          <span className="text-foreground">AI & Software</span>
          <br />
          <span className="text-gradient">Projects</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
          A collection of machine learning, deep learning, and AI-powered applications 
          demonstrating end-to-end development capabilities.
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground font-heading">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Python
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
            Machine Learning
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.6s' }} />
            LLM APIs
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
