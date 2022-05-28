import quizData from "./data/quizData"
import {useState} from "react"
import { Questions } from "./components/Questions"

export const App = () => {

  const [quiz, setQuiz] = useState(quizData)

  const handleClick = () =>{

  }

  const allQuestions = quiz.map((question) => 
    <Questions question={question.question}  answers={question.answers}/>)

  return (
    <main className='flex flex-col justify-center items-center text-center h-screen space-y-4' >
      <h1 className=' text-3xl font-bold'>Quizzical</h1>
      <button onClick={handleClick} className='bg-violet-700 w-36 text-white rounded-2xl border-none text-lg h-10 font-bold'>
        Start quiz</button>
        {allQuestions}
      
    </main>
  )
}
