import NavStyle from "./admin.module.css"
import { useState } from "react";


export const QuestionListPage = () => {
  function AddTest({ tests, setTests }) {
    const [newTest, setNewTest] = useState({
      id: "",
      questionNumber: 0,
      text: "",
      image: "",
      variants: [
        {
          id: "",
          text: ""
        }
      ]
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewTest((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleVariantChange = (event, index) => {
      const { name, value } = event.target;
      setNewTest((prevState) => ({
        ...prevState,
        variants: prevState.variants.map((variant, i) =>
          i === index ? { ...variant, [name]: value } : variant
        )
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setTests((prevState) => [...prevState, newTest]);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={newTest.id}
          onChange={handleInputChange}
        />
  
        <label htmlFor="questionNumber">Номер вопроса:</label>
        <input
          type="number"
          id="questionNumber"
          name="questionNumber"
          value={newTest.questionNumber}
          onChange={handleInputChange}
        />
  
        <label htmlFor="text">Текст вопроса:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={newTest.text}
          onChange={handleInputChange}
        />
  
        <label htmlFor="image">URL изображения:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={newTest.image}
          onChange={handleInputChange}
        />
  
        {newTest.variants.map((variant, index) => (
          <div key={variant.id}>
            <label htmlFor={`variant${index}`}>{`Вариант ${index + 1}:`}</label>
            <input
              type="text"
              id={`variant${index}`}
              name="text"
              value={variant.text}
              onChange={(event) => handleVariantChange(event, index)}
            />
          </div>
        ))}
  
        <button type="button" onClick={() => setNewTest((prevState) => ({
          ...prevState,
          variants: [...prevState.variants, { id: "", text: "" }]
        }))}>
          Добавить вариант
        </button>
  
        <button type="submit">Добавить тест</button>
      </form>
    );
  }
  
}