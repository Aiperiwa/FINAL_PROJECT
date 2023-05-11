import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useTestPage = () => {
  const [tests, setTests] = useState([])
  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoading(true)
      Promise.all([
        fetch('http://localhost:3000/tests').then(res => res.json()),
        fetch('http://localhost:3000/answers').then(res => res.json())
      ])
      .then(([testsData, answersData]) => {
        setTests(testsData)
        setAnswers(answersData)
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
    } else {
      navigate('/login')
    }
    
  }, [])
  console.log(answers);

  return {
    tests, answers, loading, error
  }
}