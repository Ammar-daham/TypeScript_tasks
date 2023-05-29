import { useEffect, useState } from 'react'
import { DiaryEntry } from './types'
import axios from 'axios'

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([])

  const [date, setDate] = useState('')
  const [weather, setWeather] = useState('')
  const [visibility, setVisibility] = useState('')
  const [comment, setComment] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get<DiaryEntry[]>('http://localhost:3001/api/diaries')
      .then((response) => {
        console.log(response.data)
        setDiaries(response.data)
      })
  }, [])

  const diaryCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      const response = await axios.post<DiaryEntry>(
        'http://localhost:3001/api/diaries',
        {
          date: date,
          weather: weather,
          visibility: visibility,
          comment: comment,
        },
      )

      setDiaries(diaries.concat(response.data))

      setDate('')
      setWeather('')
      setVisibility('')
      setComment('')
      setError('')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data)
      } else {
        console.error(error);
      }
    }
  }

  return (
    <div>
      <h1>Add new diary</h1>
      {
        error != null &&
          <p style={{color: 'red'}}>Error: {error}</p>
        
      }
      <form onSubmit={diaryCreation}>
        Date:
        <input value={date} onChange={(event) => setDate(event.target.value)} />
        <br />
        Weather:
        <input
          value={weather}
          onChange={(event) => setWeather(event.target.value)}
        />
        <br />
        Visibility:
        <input
          value={visibility}
          onChange={(event) => setVisibility(event.target.value)}
        />
        <br />
        Comment:
        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <br/>
        <button type="submit">add</button>
      </form>
      <h1>Diary entries</h1>
      <>
        {diaries.map((diary) => (
          <div key={diary.id}>
            <h4>{diary.date}</h4>
            Visibility: {diary.visibility}
            <br />
            Weather: {diary.weather}
            <br />
            Comment: {diary.comment}
          </div>
        ))}
      </>
    </div>
  )
}

export default App
