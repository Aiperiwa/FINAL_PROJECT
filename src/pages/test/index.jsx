import { useState } from "react"
import { Error } from "../../components/error"
import { Loader } from "../../components/loader"
import { Question } from "../../components/question"
import { useTestPage } from "./useTestsPage"
import NavStyle from "./test.module.css"

export const TestPage = () => {
  const { loading, tests, error } = useTestPage()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const handleNextQuestion = () => {
    if (currentQuestionIndex === tests.length - 1) {
      setIsFinished(true)
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1)
    }
  }

  const handleFinish = () => {
    // Do something with the user's answers, e.g. submit them to a server
  }

  return (
    <div className={NavStyle.content}>
      {loading ? <Loader /> : null}
      {loading ? null : (
        <div className={NavStyle.bigContainer}>
          <h1>Вопрос №{currentQuestionIndex + 1}</h1>
          {error && <Error />}
          <Question key={tests[currentQuestionIndex].id} data={tests[currentQuestionIndex]} />
          {isFinished ? (
            <button onClick={handleFinish}>Finish</button>
          ) : (
            <button onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      )}
    </div>
  )
}
