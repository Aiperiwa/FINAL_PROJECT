import { Error } from "../../components/error"
import { Loader } from "../../components/loader"
import { Question } from "../../components/question"
import { useTestPage } from "./useTestsPage"
import NavStyle  from "./test.module.css"

export const TestPage = () => {
  const { tests, loading, error } = useTestPage()

  return (
    <div className={NavStyle.content}>
      {loading && <Loader />}
      <h1>Вопрос №</h1>
      <div className={NavStyle.bigContainer}>
        {error && <Error />}
        {
          tests.map((e) => (
            <Question key={e.id} data={e} />
          ))
        }
      </div>
    </div>
  )
}