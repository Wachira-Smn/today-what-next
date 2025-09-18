import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Question } from "./QuizApp";
import { CheckCircle, XCircle, Clock } from "lucide-react";

interface QuizQuestionProps {
  question: Question;
  onAnswerSelect: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion = ({ 
  question, 
  onAnswerSelect, 
  questionNumber, 
  totalQuestions 
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    // Show result for 2 seconds before moving to next question
    setTimeout(() => {
      onAnswerSelect(answerIndex);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    }, 2000);
  };

  const getAnswerVariant = (index: number) => {
    if (!showResult) return "quiz";
    
    if (index === question.correctAnswer) {
      return "correct";
    } else if (index === selectedAnswer) {
      return "incorrect";
    } else {
      return "quiz";
    }
  };

  const getAnswerIcon = (index: number) => {
    if (!showResult) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="w-5 h-5" />;
    } else if (index === selectedAnswer) {
      return <XCircle className="w-5 h-5" />;
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-bounce-in">
      <Card className="glass p-8 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Question {questionNumber}/{totalQuestions}</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Choose your answer
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center leading-relaxed">
          {question.question}
        </h2>

        <div className="grid gap-4">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = showResult && index === question.correctAnswer;
            const isWrong = showResult && index === selectedAnswer && index !== question.correctAnswer;
            
            return (
              <Button
                key={index}
                variant={getAnswerVariant(index)}
                size="lg"
                className={`
                  h-auto p-6 text-left justify-start text-wrap min-h-[60px] relative
                  ${isSelected ? 'ring-2 ring-primary' : ''}
                  ${isCorrect ? 'animate-bounce-in' : ''}
                  ${isWrong ? 'animate-pulse' : ''}
                `}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm
                      ${isCorrect ? 'bg-success border-success text-success-foreground' : ''}
                      ${isWrong ? 'bg-destructive border-destructive text-destructive-foreground' : ''}
                      ${!showResult ? 'border-primary/50 text-primary' : ''}
                    `}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-base font-medium leading-relaxed">
                      {option}
                    </span>
                  </div>
                  {getAnswerIcon(index)}
                </div>
              </Button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-8 p-6 glass rounded-lg animate-bounce-in">
            <div className="flex items-center gap-2 mb-3">
              {selectedAnswer === question.correctAnswer ? (
                <CheckCircle className="w-6 h-6 text-success" />
              ) : (
                <XCircle className="w-6 h-6 text-destructive" />
              )}
              <h3 className="text-lg font-semibold">
                {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {question.explanation}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};