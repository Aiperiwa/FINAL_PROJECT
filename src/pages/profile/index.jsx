import { useEffect, useState } from "react"
import { mockFetch } from "../../utils/mockFetch"
import HistoryScore from "../../components/HistoryScore"


export const ProfilePage = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect (() => {
    setLoading(true)
    mockFetch('/profile.json')
    .then(res => res.json())
    .then(data => {
      setEvents(data)
    })
    .catch((err) => {
      setError('произошла ошибка')

    })
    .finally(() => {
      setLoading(false)
    })

  }, [])
  return (
    <div>
      
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {
        events.map((e) => (
          <HistoryScore key={e.id}/>
          
        ))
      }

    </div>
  )
}
//   const [user, setUser] = useState(null)
//   useEffect(() => {
    
//     fetch('http://localhost:1717/me', {
//       headers: {
//         'X-Auth': localStorage.getItem('token')
//       }
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         setUser(data)
//       })
//   }, [])
