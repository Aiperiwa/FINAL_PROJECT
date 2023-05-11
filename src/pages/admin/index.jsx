import Style from "./admin.module.css"
import React, { useState, useEffect } from "react"

export const QuestionListPage = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(false);

  const getApiData = async () => {
    const response = await fetch("http://localhost:3000/tests")
      .then((response) => response.json());
    setTests(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost:3000/tests/${id}`, { method: "DELETE" })
      .then(() => {
        setTests((prevTests) => prevTests.filter((t) => t.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className={Style.adminContainer}>
      <div>
        <button className={Style.createBtn}>Добавить тест</button>
      </div>

      <div className={Style.testsContainer}>
        {tests.length === 0 && <p>Нет тестов</p>}
        {tests.map((t) => (
          <div className="item-container" key={t.id}>
            <div className={Style.cart}>
              <div>
                <h5>
                  {t.questionNumber}. {t.text}
                </h5>
              </div>
              <hr />
              <img src={t.image} alt="" />
              {t.variants.map((v) => (
                <div key={v.id} className={Style.variant}>
                  <ul>
                    <li>{v.text}</li>
                  </ul>
                </div>
              ))}
              <div className={Style.updateBtn}>
                <button className={Style.createBtn}>Редактировать</button>
                <button
                  className={Style.createBtn}
                  onClick={() => handleDelete(t.id)}
                  disabled={loading}
                >
                  {loading ? "Удаление..." : "Удалить"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
