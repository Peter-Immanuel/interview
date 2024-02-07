import Image from "next/image";
import Question from "./questions";
import useState from "react"

export default function Home() {

  
  const questions = [
    {
      question: "Sample Question",
      options:["A", "B", "C"],
      correct: "B",
      }
  ]


    

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className=""> 
        <div className="mb-4">Question Quiz</div>
          <Question question={questions[0]}/>
          // Button should be hear
      </div>
    </main>
  );
}
