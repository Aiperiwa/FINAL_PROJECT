

// import React from "react";
// import CountDown from '../../components/timer/timer.jsx';
// import { Error } from "../../components/error"
// import { Loader } from "../../components/loader"
// import { Question } from "../../components/question"
// import { useTestPage } from "./useTestsPage"
// import NavStyle from "./test.module.css"

// export const TestPage = () => {
//   const { loading, tests, error } = useTestPage()

//   return (
//     <div className={NavStyle.content}>
//       {loading ? <Loader /> : null}
//       {loading ? null : (
//         <div className={NavStyle.bigContainer}>
//           <h1>Онлайн-тест ПДД КР 2023</h1>
//           <CountDown minutes={20} seconds={0} isOver={false} resultInfo={{ errors: 0 }} />
//           {error && <Error />}
//           {
//             tests.map((e) => (
//               <Question key={e.id} data={e} />
//             ))
//           }
//           <div className={NavStyle.btnContainer}>
//             <button className={NavStyle.check} >Проверить</button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }



// import { Error } from "../../components/error"
// import { Loader } from "../../components/loader"
// import { Question } from "../../components/question"
// import { useTestPage } from "./useTestsPage"
// import NavStyle from "./test.module.css"
// import { CountDown} from '../../components/timer/timer.jsx'


// export const TestPage = () => {
//   const { loading, tests, error } = useTestPage()

//   return (
//     <div className={NavStyle.content}>
//       {loading ? <Loader /> : null}
//       {loading ? null : (
//         <div className={NavStyle.bigContainer}>
//           <h1>Онлайн-тест ПДД КР 2023</h1>

//             <div>{ CountDown } </div>
//           {/* {error && <Error />} */}
//           {
//             tests.map((e) => (
//               <Question key={e.id} data={e} />
//             ))
//           }
//         </div>
//       )}
//     </div>
//   )
// }

import React, {useState} from "react";
import CountDown from '../../components/timer/timer.jsx';
import { Error } from "../../components/error"
import { Loader } from "../../components/loader"
import { Question } from "../../components/question"
import { useTestPage } from "./useTestsPage"
import NavStyle from "./test.module.css"

export const TestPage = () => {

  const { loading, tests, error } = useTestPage()
  const [questionNumber, setQuestionNumber] = useState(1);
  const lastQuestion = tests.length


  function handleChangeId() {
    setQuestionNumber(prev => prev + 1)
    // написать код который сохраняет все ваши ответы на вопросы
 
  }

  const endTest = () => { 
    // написать код который отправляет все ваши ответы на 20 вопросов в бэк и переводит на страницу результата 

  }

  return (
    <div className={NavStyle.content}>
      {loading ? <Loader /> : null}
      {loading ? null : (
        <div className={NavStyle.bigContainer}>
          <h1>Онлайн-тест ПДД КР 2023</h1>
          <CountDown minutes={20} seconds={0} isOver={false} resultInfo={{ errors: 0 }} />
          {error && <Error />}
          { tests.map((e, idx) => {
            if (questionNumber !== e.questionNumber) {
              return
            }
            return (
              <Question
                key={idx}
                data={e}
                handleChangeId={handleChangeId}
                lastQuestion={lastQuestion}
                questionNumber={questionNumber}
                endTest={endTest}
              />
            )
          })
          }
        </div>
      )}
    </div>
  )
}