
// import React, { useEffect, useState } from "react";
// import CountDown from '../../components/timer/timer.jsx';
// import { Error } from "../../components/error"
// import { Loader } from "../../components/loader"
// import { Question } from "../../components/question"
// import { useTestPage } from "./useTestsPage"
// import Style from "./test.module.css"
// import data from '../../components/question/index.jsx'


// const ResultsModal = ({ onClose }) => {
//   // logic to display the results
//   return (
//     <div className={Style.modal}>
//       <h2>Результаты теста:</h2>
//       <p>Вы ответили правильно на 15 из {data.length} вопросов.</p>
//       <button className={Style.btnClose} onClick={onClose}>Закрыть</button>
//     </div>
//   );
// };

// export const TestPage = () => {
  
//   const { loading, tests, error } = useTestPage()
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [questionNumber, setQuestionNumber] = useState(19);
//   const lastQuestion = tests.length


//   function handleChangeId() {
//     setQuestionNumber(prev => prev + 1)
//     // написать код который сохраняет все ваши ответы на вопросы
//   }

//   const endTest = () => { 
//     if (questionNumber === lastQuestion) {
//             setIsModalVisible(true);
//           }
//     // написать код который отправляет все ваши ответы на 20 вопросов в бэк и переводит на страницу результата 
//     // setIsModalVisible(true);

// }

//   return (
//     <div className={Style.content}>
//       {loading ? <Loader /> : null}
//       {loading ? null : (
//         <div className={Style.bigContainer}>
//           <h1>Онлайн-тест ПДД КР 2023</h1>
//           <CountDown minutes={5} seconds={51} isOver={false} />
//           {error && <Error />}
//           {tests.map((e, idx) => {
//             if (questionNumber !== e.questionNumber) {
//               return
//             }
//             return (
//               <Question
//                 key={idx}
//                 data={e}
//                 handleChangeId={handleChangeId}
//                 lastQuestion={lastQuestion}
//                 questionNumber={questionNumber}
//                 endTest={endTest}
//               />
//             )
//           })
//           }
//         </div>
//       )}
//       {isModalVisible && <ResultsModal onClose={() => setIsModalVisible(false)} />}
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import CountDown from '../../components/timer/timer.jsx';
import { Error } from "../../components/error"
import { Loader } from "../../components/loader"
import { Question } from "../../components/question"
import { useTestPage } from "./useTestsPage"
import Style from "./test.module.css"
import { Link } from "react-router-dom";

const ResultsModal = ({ onClose, correctAnswers }) => {
  // logic to display the results
  return (
    <div className={Style.modal}>
      <h2>Результаты теста:</h2>
      <p>Вы ответили правильно на {correctAnswers} из 20 вопросов.</p>
      <button className={Style.btnClose} onClick={onClose}><Link to="/">ОК</Link></button>
    </div>
  );
};

export const TestPage = () => {
  
  const { loading, tests, error } = useTestPage()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(18);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const lastQuestion = tests.length

  const handleChangeId = (selectedVariant) => {
    setQuestionNumber((prev) => prev + 1);

    // Check if the selected variant is correct and update the count of correct answers
    if (selectedVariant.isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // If it's the last question, show the results modal
    if (questionNumber === lastQuestion) {
      setIsModalVisible(true);
    }
  };

  const endTest = () => {
    // If it's the last question, show the results modal
    if (questionNumber === lastQuestion) {
      setIsModalVisible(true);
    }
  }

  return (
    <div className={Style.content}>
      {loading ? <Loader /> : null}
      {loading ? null : (
        <div className={Style.bigContainer}>
          <h1>Онлайн-тест ПДД КР 2023</h1>
          <CountDown minutes={0} seconds={60} isOver={false} />
          {error && <Error />}
          {tests.map((e, idx) => {
            if (questionNumber !== e.questionNumber) {
              return;
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
            );
          })}
        </div>
      )}
      {isModalVisible && (
        <ResultsModal
          onClose={() => setIsModalVisible(false)}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  );
};
