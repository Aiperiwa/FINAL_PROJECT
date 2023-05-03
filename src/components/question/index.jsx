import './style.css'


export const Question = ({ data }) => {
  return (

    <div className="q-item">
      <h3>{data.text}</h3> 
      <img  src={ data.image } alt="image" />
      <div className="form">
        {
          data.variants.map((v) => (
            <div key={v.id} className="variant">
              <input type="radio" name={data.id} />
              <label htmlFor={v.id}>{v.text}</label>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Question



// // import './style.css'
// // import { useState } from 'react'

// // export const Question = ({ data }) => {
// //   const [answers, setAnswers] = useState({})

// //   const handleAnswerChange = (event) => {
// //     const { name, value } = event.target
// //     setAnswers((prevAnswers) => ({
// //       ...prevAnswers,
// //       [name]: value,
// //     }))
// //   }

// //   const handleSubmit = () => {
// //     const correctAnswers = data.variants.reduce((acc, variant) => {
// //       if (variant.isCorrect) {
// //         return {
// //           ...acc,
// //           [variant.questionId]: variant.id,
// //         }
// //       }
// //       return acc
// //     }, {})
// //     const score = Object.keys(correctAnswers).reduce((acc, questionId) => {
// //       if (correctAnswers[questionId] === answers[questionId]) {
// //         return acc + 1
// //       }
// //       return acc
// //     }, 0)
// //     alert(`Вы ответили правильно на ${score} из ${Object.keys(data.variants).length} вопросов`)
// //   }

// //   return (
// //     <div className="q-item">
// //       <h3>{data.text}</h3> 
// //       <div className="form">
// //         {data.variants.map((v) => (
// //           <div key={v.id} className="variant">
// //             <input type="radio" name={v.questionId} value={v.id} onChange={handleAnswerChange} />
// //             <label htmlFor={v.id}>{v.text}</label>
// //           </div>
// //         ))}
// //       </div>
// //         <button onClick={handleSubmit}>Закончить</button>
// //     </div>
// //   )
// // }

// // export default Question



// import './style.css'
// import { useState } from 'react'
// import Question from './question'

// const questionsData = [
//   {
//     id: 1,
//     text: 'Вопрос 1',
//     variants: [
//       { id: 1, text: 'Ответ 1', isCorrect: false },
//       { id: 2, text: 'Ответ 2', isCorrect: true },
//       { id: 3, text: 'Ответ 3', isCorrect: false },
//     ],
//   },
//   {
//     id: 2,
//     text: 'Вопрос 2',
//     variants: [
//       { id: 4, text: 'Ответ 1', isCorrect: false },
//       { id: 5, text: 'Ответ 2', isCorrect: true },
//       { id: 6, text: 'Ответ 3', isCorrect: false },
//     ],
//   },
// ]

// const Quiz = () => {
//   const [answers, setAnswers] = useState({})

//   const handleAnswerChange = (event) => {
//     const { name, value } = event.target
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = () => {
//     const correctAnswers = questionsData.reduce((acc, question) => {
//       const correctVariant = question.variants.find((v) => v.isCorrect)
//       return {
//         ...acc,
//         [question.id]: correctVariant.id,
//       }
//     }, {})
//     const score = Object.keys(correctAnswers).reduce((acc, questionId) => {
//       if (correctAnswers[questionId] === answers[questionId]) {
//         return acc + 1
//       }
//       return acc
//     }, 0)
//     alert(`Вы ответили правильно на ${score} из ${Object.keys(questionsData).length} вопросов`)
//   }

//   return (
//     <div className="quiz">
//       {questionsData.map((question) => (
//         <Question key={question.id} data={question} onAnswerChange={handleAnswerChange} />
//       ))}
//       <button onClick={handleSubmit}>Закончить</button>
//     </div>
//   )
// }

// export default Quiz

