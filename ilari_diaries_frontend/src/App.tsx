import { useEffect, useState } from 'react'
import { DiaryEntry } from './types'
import axios from 'axios'

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([
    {
      id: 1,
      date: '2017-01-01',
      weather: 'rainy',
      visibility: 'poor',
    },
  ])
  const [newDiary, setNewDiary] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/api/diaries').then((response) => {
      console.log(response.data)
      setDiaries(response.data)
    })
  }, [])

  return (
    <div>
      <h1>Diary entries</h1>
      <>
        {diaries.map((diary) => (
          <div key={diary.id}>
            <h4>{diary.date}</h4>
            Visibility: {diary.visibility}<br/>
            Weather: {diary.weather}<br/>
            Comment: {diary.comment}
          </div>
        ))}
      </>
    </div>
  )
}

export default App
