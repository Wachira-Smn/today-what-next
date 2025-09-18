import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  RotateCcw, 
  Home, 
  Target,
  Award,
  Zap,
  CheckCircle,
  XCircle
} from "lucide-react";
import { QuizCategory, Question } from "./QuizApp";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  category: QuizCategory;
  answers: number[];
  questions: Question[];
  onTryAgain: () => void;
  onHome: () => void;
}

export const QuizResults = ({ 
  score, 
  totalQuestions, 
  category, 
  answers, 
  questions,
  onTryAgain, 
  onHome 
}: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { message: "Outstanding! 🏆", color: "text-warning" };
    if (percentage >= 70) return { message: "Great Job! 🌟", color: "text-success" };
    if (percentage >= 50) return { message: "Good Effort! 👍", color: "text-info" };
    return { message: "Keep Practicing! 💪", color: "text-primary" };
  };

  const performanceData = getPerformanceMessage();

  const getScoreIcon = () => {
    if (percentage >= 90) return <Trophy className="w-16 h-16 text-warning animate-bounce" />;
    if (percentage >= 70) return <Award className="w-16 h-16 text-success animate-bounce" />;
    if (percentage >= 50) return <Target className="w-16 h-16 text-info animate-bounce" />;
    return <Zap className="w-16 h-16 text-primary animate-bounce" />;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Results Header */}
        <div className="text-center mb-8 animate-bounce-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 gradient-hero rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative gradient-hero p-6 rounded-full">
              {getScoreIcon()}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-2 text-glow">Quiz Complete!</h1>
          <p className="text-xl text-muted-foreground capitalize">
            {category} Quiz Results
          </p>
        </div>

        {/* Score Card */}
        <Card className="glass p-8 mb-8 animate-bounce-in" style={{ animationDelay: "0.2s" }}>
          <div className="text-center mb-8">
            <div className="text-6xl font-bold gradient-hero bg-clip-text text-transparent mb-4">
              {percentage}%
            </div>
            <h2 className={`text-3xl font-bold mb-2 ${performanceData.color}`}>
              {performanceData.message}
            </h2>
            <p className="text-xl text-muted-foreground">
              You scored {score} out of {totalQuestions} questions correctly
            </p>
          </div>

          <div className="w-full max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{score}/{totalQuestions}</span>
            </div>
            <Progress value={percentage} className="h-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 glass rounded-lg">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">{score}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            <div className="p-4 glass rounded-lg">
              <XCircle className="w-8 h-8 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold text-destructive">{totalQuestions - score}</div>
              <div className="text-sm text-muted-foreground">Incorrect</div>
            </div>
            <div className="p-4 glass rounded-lg">
              <Star className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-warning">{percentage}%</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
          </div>
        </Card>

        {/* Question Review */}
        <Card className="glass p-6 mb-8 animate-bounce-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Question Review
          </h3>
          
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="p-4 glass rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mt-1
                      ${isCorrect ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'}
                    `}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-2">{question.question}</p>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Your answer:</span>
                          <span className={isCorrect ? 'text-success' : 'text-destructive'}>
                            {question.options[userAnswer]}
                          </span>
                          {isCorrect ? 
                            <CheckCircle className="w-4 h-4 text-success" /> : 
                            <XCircle className="w-4 h-4 text-destructive" />
                          }
                        </div>
                        {!isCorrect && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Correct answer:</span>
                            <span className="text-success">
                              {question.options[question.correctAnswer]}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center animate-bounce-in" style={{ animationDelay: "0.6s" }}>
          <Button
            variant="gaming"
            size="lg"
            onClick={onTryAgain}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onHome}
            className="flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Choose Category
          </Button>
        </div>
      </div>
    </div>
  );
};