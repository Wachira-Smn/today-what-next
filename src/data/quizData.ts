import { Question, QuizCategory } from "@/components/QuizApp";

export const quizData: Record<QuizCategory, Question[]> = {
  general: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: 2,
      explanation: "Canberra is the capital city of Australia, chosen as a compromise between Sydney and Melbourne."
    },
    {
      id: 2,
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1,
      explanation: "Mars is called the 'Red Planet' due to iron oxide (rust) on its surface, giving it a reddish appearance."
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      correctAnswer: 2,
      explanation: "The Pacific Ocean is the largest ocean, covering about one-third of Earth's surface."
    },
    {
      id: 4,
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correctAnswer: 1,
      explanation: "World War II ended in 1945 with the surrender of Japan in September."
    },
    {
      id: 5,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correctAnswer: 2,
      explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
    }
  ],
  science: [
    {
      id: 6,
      question: "What is the speed of light in a vacuum?",
      options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
      correctAnswer: 0,
      explanation: "The speed of light in a vacuum is exactly 299,792,458 meters per second."
    },
    {
      id: 7,
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
      correctAnswer: 1,
      explanation: "Hydrogen has atomic number 1, meaning it has one proton in its nucleus."
    },
    {
      id: 8,
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
      correctAnswer: 2,
      explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP energy."
    },
    {
      id: 9,
      question: "What type of animal is a Komodo dragon?",
      options: ["Snake", "Lizard", "Crocodile", "Turtle"],
      correctAnswer: 1,
      explanation: "The Komodo dragon is the world's largest living species of lizard."
    },
    {
      id: 10,
      question: "How many bones are in an adult human body?",
      options: ["204", "206", "208", "210"],
      correctAnswer: 1,
      explanation: "An adult human body has 206 bones. Babies are born with about 270 bones, many of which fuse together as they grow."
    }
  ],
  history: [
    {
      id: 11,
      question: "Who was the first person to walk on the moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
      correctAnswer: 1,
      explanation: "Neil Armstrong was the first person to walk on the moon on July 20, 1969."
    },
    {
      id: 12,
      question: "In which year did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      correctAnswer: 2,
      explanation: "The Berlin Wall fell on November 9, 1989, marking the beginning of German reunification."
    },
    {
      id: 13,
      question: "Who was the first President of the United States?",
      options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
      correctAnswer: 2,
      explanation: "George Washington was the first President of the United States, serving from 1789 to 1797."
    },
    {
      id: 14,
      question: "Which ancient wonder of the world was located in Alexandria?",
      options: ["Hanging Gardens", "Lighthouse of Alexandria", "Colossus of Rhodes", "Temple of Artemis"],
      correctAnswer: 1,
      explanation: "The Lighthouse of Alexandria (Pharos) was one of the Seven Wonders of the Ancient World."
    },
    {
      id: 15,
      question: "The Titanic sank in which year?",
      options: ["1910", "1911", "1912", "1913"],
      correctAnswer: 2,
      explanation: "The RMS Titanic sank on April 15, 1912, during its maiden voyage."
    }
  ],
  sports: [
    {
      id: 16,
      question: "How many players are on a basketball team on the court at one time?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      explanation: "A basketball team has 5 players on the court at one time for each team."
    },
    {
      id: 17,
      question: "In which sport would you perform a slam dunk?",
      options: ["Volleyball", "Tennis", "Basketball", "Badminton"],
      correctAnswer: 2,
      explanation: "A slam dunk is a basketball move where a player jumps and forcefully puts the ball through the hoop."
    },
    {
      id: 18,
      question: "How often are the Summer Olympic Games held?",
      options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
      correctAnswer: 2,
      explanation: "The Summer Olympic Games are held every 4 years."
    },
    {
      id: 19,
      question: "What is the maximum score possible in ten-pin bowling?",
      options: ["250", "270", "290", "300"],
      correctAnswer: 3,
      explanation: "The maximum score in ten-pin bowling is 300, achieved by bowling 12 consecutive strikes."
    },
    {
      id: 20,
      question: "In soccer, how many players are on the field for each team?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 1,
      explanation: "Each soccer team has 11 players on the field at one time, including the goalkeeper."
    }
  ],
  entertainment: [
    {
      id: 21,
      question: "Which movie won the Academy Award for Best Picture in 2020?",
      options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
      correctAnswer: 2,
      explanation: "Parasite won the Academy Award for Best Picture in 2020, making history as the first non-English film to win."
    },
    {
      id: 22,
      question: "Who composed the music for the movie 'Star Wars'?",
      options: ["Hans Zimmer", "John Williams", "Danny Elfman", "James Horner"],
      correctAnswer: 1,
      explanation: "John Williams composed the iconic music for the Star Wars saga."
    },
    {
      id: 23,
      question: "Which TV series features the character Walter White?",
      options: ["Better Call Saul", "Breaking Bad", "The Walking Dead", "Lost"],
      correctAnswer: 1,
      explanation: "Walter White is the main character in the TV series Breaking Bad."
    },
    {
      id: 24,
      question: "What is the highest-grossing film of all time (as of 2023)?",
      options: ["Avatar", "Avengers: Endgame", "Titanic", "Avatar: The Way of Water"],
      correctAnswer: 0,
      explanation: "Avatar (2009) is the highest-grossing film of all time with over $2.9 billion worldwide."
    },
    {
      id: 25,
      question: "Which streaming platform created the series 'Stranger Things'?",
      options: ["Hulu", "Amazon Prime", "Netflix", "Disney+"],
      correctAnswer: 2,
      explanation: "Stranger Things is a Netflix original series that premiered in 2016."
    }
  ]
};