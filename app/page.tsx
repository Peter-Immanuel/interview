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

  const [count, setCount] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className=""> 
        <div className="mb-4">Question Quiz</div>
          <Question question={count}/>
          // Button should be hear
      </div>
    </main>
  );
}
