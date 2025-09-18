import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, RotateCcw, Home } from "lucide-react";
import { QuizQuestion } from "./QuizQuestion";
import { QuizCategories } from "./QuizCategories";
import { QuizResults } from "./QuizResults";
import { quizData } from "@/data/quizData";

export type QuizCategory = "general" | "science" | "history" | "sports" | "entertainment";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizState {
  currentCategory: QuizCategory | null;
  currentQuestionIndex: number;
  answers: number[];
  score: number;
  isCompleted: boolean;
  showResults: boolean;
}

export const QuizApp = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentCategory: null,
    currentQuestionIndex: 0,
    answers: [],
    score: 0,
    isCompleted: false,
    showResults: false,
  });

  const currentQuestions = quizState.currentCategory ? quizData[quizState.currentCategory] : [];
  const currentQuestion = currentQuestions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / currentQuestions.length) * 100;

  const handleCategorySelect = (category: QuizCategory) => {
    setQuizState({
      currentCategory: category,
      currentQuestionIndex: 0,
      answers: [],
      score: 0,
      isCompleted: false,
      showResults: false,
    });
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...quizState.answers, answerIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newScore = isCorrect ? quizState.score + 1 : quizState.score;

    if (quizState.currentQuestionIndex < currentQuestions.length - 1) {
      // Move to next question
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
        answers: newAnswers,
        score: newScore,
      });
    } else {
      // Quiz completed
      setQuizState({
        ...quizState,
        answers: newAnswers,
        score: newScore,
        isCompleted: true,
        showResults: true,
      });
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentCategory: null,
      currentQuestionIndex: 0,
      answers: [],
      score: 0,
      isCompleted: false,
      showResults: false,
    });
  };

  const handleTryAgain = () => {
    if (quizState.currentCategory) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: 0,
        answers: [],
        score: 0,
        isCompleted: false,
        showResults: false,
      });
    }
  };

  if (quizState.showResults) {
    return (
      <QuizResults
        score={quizState.score}
        totalQuestions={currentQuestions.length}
        category={quizState.currentCategory!}
        answers={quizState.answers}
        questions={currentQuestions}
        onTryAgain={handleTryAgain}
        onHome={handleRestart}
      />
    );
  }

  if (!quizState.currentCategory) {
    return <QuizCategories onCategorySelect={handleCategorySelect} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-bounce-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-primary animate-pulse" />
            <h1 className="text-3xl font-bold text-glow">Quiz Challenge</h1>
            <Star className="w-6 h-6 text-accent animate-pulse" />
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRestart}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            
            <div className="text-center">
              <p className="text-muted-foreground capitalize">
                {quizState.currentCategory} Quiz
              </p>
              <p className="text-sm text-muted-foreground">
                Question {quizState.currentQuestionIndex + 1} of {currentQuestions.length}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-accent" />
              <span className="font-semibold">{quizState.score}</span>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto">
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question */}
        <QuizQuestion
          question={currentQuestion}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={quizState.currentQuestionIndex + 1}
          totalQuestions={currentQuestions.length}
        />
      </div>
    </div>
  );
};