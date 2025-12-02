import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Smile, Frown, Meh, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface SentimentResult {
  sentiment: "positive" | "negative" | "neutral";
  confidence: number;
  emotions: string[];
  summary: string;
}

const SentimentAnalyzer = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<SentimentResult | null>(null);
  const { toast } = useToast();

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analyze-sentiment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Analysis failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <Smile className="w-12 h-12 text-green-500" />;
      case "negative":
        return <Frown className="w-12 h-12 text-red-500" />;
      default:
        return <Meh className="w-12 h-12 text-yellow-500" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500/10 border-green-500/30 text-green-500";
      case "negative":
        return "bg-red-500/10 border-red-500/30 text-red-500";
      default:
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            <h1 className="font-heading text-xl font-bold">Sentiment Analyzer</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Input Section */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Enter Text to Analyze
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste a review, tweet, comment, or any text you want to analyze..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[150px] resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {text.length} characters
                </span>
                <Button
                  onClick={analyzeSentiment}
                  disabled={isAnalyzing || !text.trim()}
                  className="gap-2"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4" />
                      Analyze Sentiment
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          {result && (
            <Card className={`glass border-2 ${getSentimentColor(result.sentiment)}`}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Sentiment Icon */}
                  <div className="flex flex-col items-center gap-2">
                    {getSentimentIcon(result.sentiment)}
                    <span className="text-2xl font-bold capitalize">
                      {result.sentiment}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-4 w-full">
                    {/* Confidence */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Confidence</span>
                        <span className="font-medium">
                          {Math.round(result.confidence * 100)}%
                        </span>
                      </div>
                      <Progress value={result.confidence * 100} className="h-2" />
                    </div>

                    {/* Emotions */}
                    {result.emotions && result.emotions.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">
                          Detected Emotions
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {result.emotions.map((emotion, index) => (
                            <Badge key={index} variant="secondary">
                              {emotion}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Summary */}
                    <div className="space-y-2">
                      <span className="text-sm text-muted-foreground">Analysis</span>
                      <p className="text-foreground">{result.summary}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Example Texts */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-lg">Try These Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {[
                  "I absolutely love this product! It exceeded all my expectations and the customer service was fantastic.",
                  "This is the worst experience I've ever had. Complete waste of money and time.",
                  "The product works as described. Nothing special but gets the job done.",
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setText(example)}
                    className="text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    "{example}"
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SentimentAnalyzer;
