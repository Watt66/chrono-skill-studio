import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";

const Chatbot = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            AI <span className="text-gradient">Chatbot</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A fully functional AI chatbot with streaming responses. Built with edge functions and Google Gemini.
          </p>
        </div>

        <ChatInterface />

        {/* Tech Stack Info */}
        <div className="mt-8 p-6 glass rounded-xl max-w-3xl mx-auto">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React", "TypeScript", "Edge Functions", "Gemini AI"].map((tech) => (
              <div key={tech} className="px-3 py-2 bg-secondary/50 rounded-md text-center">
                <span className="text-sm text-primary/90">{tech}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            This chatbot demonstrates real-time streaming responses using Server-Sent Events (SSE), 
            edge function backend architecture, and modern LLM integration.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Chatbot;
