import Question from "./questions";
import useState from "react"

function Home() {

  
  const questions = [
    {
      question: "What is the capital of FCT",
      options:["Abuja", "Makurdi", "Jos"],
      correct: "Abuja",
    },
    {
      question: "What is the capital of Benue",
      options:["Abuja", "Makurdi", "Jos"],
      correct: "Makurdi",
    },
    {
      question: "What is the capital of Jos",
      options:["Abuja", "Makurdi", "Jos"],
      correct: "Jos",
    },
    {
      question: "What is the capital of Niger",
      options:["Abuja", "Makurdi", "Minna"],
      correct: "Abuja",
    },
  ];

  // const [count, setCount] = useState(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className=""> 
        <div className="mb-4">Question Quiz</div>
          <Question question={questions[0]}/>
      </div>
    </main>
  );
}


export default Home
