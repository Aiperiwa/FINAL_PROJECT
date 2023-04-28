import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"

export const useTestPage = () => { // then
  const [tests, setTests] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    mockFetch('/tests.json')
      .then(res => res.json())
      .then(data => {
        setTests(data)
      })
      .catch((err) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    tests, loading, error
  }
}

// export const useEventPage = () => {  //async await
//   const [events, setEvents] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         setLoading(true)
//         const response = await mockFetch('/events.json')
//         const data = await response.json()
//         setEvents(data)
//       } 
//       catch {
//         setError('ошибка')
//       } 
//       finally {
//         setLoading(false)
//       }
//     }
//     fetchEvents()
//   }, [])

//   return {
//     events, loading, error
//   }
// }