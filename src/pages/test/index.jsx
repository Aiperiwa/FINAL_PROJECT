

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



import React, { useState } from "react";
import CountDown from '../../components/timer/timer.jsx';
import { Error } from "../../components/error"
import { Loader } from "../../components/loader"
import { Question } from "../../components/question"
import { useTestPage } from "./useTestsPage"
import NavStyle from "./test.module.css"
import Style from "./test.module.css"


const ResultsModal = ({ onClose }) => {
  // logic to display the results
  return (
    <div className={ Style.modal }>
      <h2>Результаты теста:</h2>
      <p>Вы ответили правильно на 15 из 20 вопросов.</p>
      <button className={ Style.btnClose } onClick={onClose}>Закрыть</button>
    </div>
  );
};

export const TestPage = () => {
  const { loading, tests, error } = useTestPage()
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCheckClick = () => {
    setIsModalVisible(true);
  };

  return (
    <div className={NavStyle.content}>
      {loading ? <Loader /> : null}
      {loading ? null : (
        <div className={NavStyle.bigContainer}>
          <h1>Онлайн-тест ПДД КР 2023</h1>
          <CountDown minutes={1} seconds={0} isOver={false} resultInfo={{ errors: 0 }} />
          {error && <Error />}
          {
            tests.map((e) => (
              <Question key={e.id} data={e} />
            ))
          }
          <div className={NavStyle.btnContainer}>
            <button className={NavStyle.check} onClick={handleCheckClick}>Проверить</button>
          </div>
        </div>
      )}
      {isModalVisible && <ResultsModal onClose={() => setIsModalVisible(false)} />}
    </div>
  );
};
