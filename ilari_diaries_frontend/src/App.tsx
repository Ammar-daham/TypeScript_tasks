import { useEffect, useState, ChangeEvent } from 'react'
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

  const handleWeatherChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeather(event.target.value)
  }

  const handleVisibilityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVisibility(event.target.value)
  }

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
        console.error(error)
      }
    }
  }

  return (
    <div>
      <h1>Add new diary</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <form onSubmit={diaryCreation}>
        Date:
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
       
        <fieldset>
          <legend>Select weather status:</legend>

          <div>
            <input
              type="radio"
              id="sunny"
              name="sunny"
              value="sunny"
              checked={weather === 'sunny'}
              onChange={handleWeatherChange}
            />
            <label htmlFor="sunny">sunny</label>
          </div>

          <div>
            <input
              type="radio"
              id="rainy"
              name="rainy"
              value="rainy"
              checked={weather === 'rainy'}
              onChange={handleWeatherChange}
            />
            <label htmlFor="rainy">rainy</label>
          </div>

          <div>
            <input
              type="radio"
              id="cloudy"
              name="cloudy"
              value="cloudy"
              checked={weather === 'cloudy'}
              onChange={handleWeatherChange}
            />
            <label htmlFor="cloudy">cloudy</label>
          </div>

          <div>
            <input
              type="radio"
              id="stormy"
              name="stormy"
              value="stormy"
              checked={weather === 'stormy'}
              onChange={handleWeatherChange}
            />
            <label htmlFor="stormy">stormy</label>
          </div>

          <div>
            <input
              type="radio"
              id="windy"
              name="windy"
              value="windy"
              checked={weather === 'windy'}
              onChange={handleWeatherChange}
            />
            <label htmlFor="windy">windy</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Select visibility status:</legend>

          <div>
            <input
              type="radio"
              id="great"
              name="great"
              value="great"
              checked={visibility === 'great'}
              onChange={handleVisibilityChange}
            />
            <label htmlFor="great">great</label>
          </div>

          <div>
            <input
              type="radio"
              id="good"
              name="good"
              value="good"
              checked={visibility === 'good'}
              onChange={handleVisibilityChange}
            />
            <label htmlFor="good">good</label>
          </div>

          <div>
            <input
              type="radio"
              id="ok"
              name="ok"
              value="ok"
              checked={visibility === 'ok'}
              onChange={handleVisibilityChange}
            />
            <label htmlFor="ok">ok</label>
          </div>

          <div>
            <input
              type="radio"
              id="poor"
              name="poor"
              value="poor"
              checked={visibility === 'poor'}
              onChange={handleVisibilityChange}
            />
            <label htmlFor="poor">poor</label>
          </div>

        </fieldset>
        Comment:
        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <br />
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
