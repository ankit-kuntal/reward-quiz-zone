import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy, Zap, Gift, Users } from "lucide-react";
import quizHeroImage from "@/assets/quiz-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-secondary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
                Test Your Knowledge,<br />
                <span className="text-accent-foreground">Win Amazing Prizes!</span>
              </h1>
              <p className="text-xl text-white/90">
                Play exciting quizzes, earn points, climb the leaderboard, and claim real rewards.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/auth">
                  <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
                    Start Playing Now
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
                    View Leaderboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src={quizHeroImage} 
                alt="Quiz Game Platform" 
                className="rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">1. Sign Up</h3>
              <p className="text-muted-foreground">Create your free account in seconds</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">2. Play Quizzes</h3>
              <p className="text-muted-foreground">Answer timed questions and score points</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">3. Climb Ranks</h3>
              <p className="text-muted-foreground">Beat other players on the leaderboard</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">4. Win Prizes</h3>
              <p className="text-muted-foreground">Claim rewards and cash prizes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Win?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of players competing for amazing prizes every day!
          </p>
          <Link to="/auth">
            <Button size="lg" className="text-lg px-12 bg-white text-primary hover:bg-white/90">
              Join Now - It's Free!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
