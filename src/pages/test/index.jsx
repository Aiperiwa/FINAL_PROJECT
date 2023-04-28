import { Error } from "../../components/error"
import { Loader } from "../../components/loader"
import { Question } from "../../components/question"
import { useTestPage } from "./useTestsPage"


export const TestPage = () => {
  const { tests, loading, error } = useTestPage()

  return (
    <div >
      <h1>Вопросы</h1>
        {loading && <Loader />}
        {error && <Error />}
      {
        tests.map((e) => (
          <Question key={e.id} data={e} />
        ))
      }
      TestPage
    </div>
  )
}