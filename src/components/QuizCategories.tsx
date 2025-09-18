import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Atom, 
  Scroll, 
  Trophy, 
  Clapperboard,
  Sparkles,
  Star,
  Zap
} from "lucide-react";
import { QuizCategory } from "./QuizApp";

interface QuizCategoriesProps {
  onCategorySelect: (category: QuizCategory) => void;
}

const categories = [
  {
    id: "general" as QuizCategory,
    title: "General Knowledge",
    description: "Test your knowledge across various topics",
    icon: Brain,
    color: "text-primary",
    bgColor: "from-primary/20 to-primary/5",
  },
  {
    id: "science" as QuizCategory,
    title: "Science & Nature",
    description: "Explore the wonders of science and nature",
    icon: Atom,
    color: "text-info",
    bgColor: "from-info/20 to-info/5",
  },
  {
    id: "history" as QuizCategory,
    title: "History",
    description: "Journey through historical events and figures",
    icon: Scroll,
    color: "text-warning",
    bgColor: "from-warning/20 to-warning/5",
  },
  {
    id: "sports" as QuizCategory,
    title: "Sports",
    description: "Challenge your sports knowledge",
    icon: Trophy,
    color: "text-accent",
    bgColor: "from-accent/20 to-accent/5",
  },
  {
    id: "entertainment" as QuizCategory,
    title: "Entertainment",
    description: "Movies, music, and pop culture",
    icon: Clapperboard,
    color: "text-purple-400",
    bgColor: "from-purple-400/20 to-purple-400/5",
  },
];

export const QuizCategories = ({ onCategorySelect }: QuizCategoriesProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-bounce-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 gradient-hero rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative gradient-hero p-6 rounded-full">
              <Sparkles className="w-16 h-16 text-white animate-float" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 text-glow">
            Quiz Challenge
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Test your knowledge and have fun!
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 text-accent" />
            <span>Choose a category to begin your challenge</span>
            <Star className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className={`glass hover:scale-105 transition-all duration-300 cursor-pointer group animate-bounce-in border-0 bg-gradient-to-br ${category.bgColor}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onCategorySelect(category.id)}
              >
                <div className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 ${category.color} opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity`}></div>
                    <div className="relative">
                      <IconComponent className={`w-16 h-16 mx-auto ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-glow transition-all">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors">
                    {category.description}
                  </p>
                  
                  <Button
                    variant="gaming"
                    className="w-full group-hover:animate-pulse-glow"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Start Quiz
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-bounce-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-sm text-muted-foreground">
            🎯 Each quiz contains 5 challenging questions
          </p>
        </div>
      </div>
    </div>
  );
};