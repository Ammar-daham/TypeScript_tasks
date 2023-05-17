interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

const calculateExercises = (
  exerciseHours: number[],
  target: number,
): Result => {
  const periodLength: number = exerciseHours.length
  const trainingDays: number = exerciseHours.filter((hour) => hour > 0).length
  const average: number = exerciseHours.reduce((a, b) => a + b) / periodLength
  const success: boolean = average >= target

  let rating: number
  let ratingDescription: string

  if (target / average >= 1.5) {
    rating = 3
    ratingDescription = 'excellent'
  } else if (target / average >= 1) {
    rating = 2
    ratingDescription = 'not too bad but could be better'
  } else {
    rating = 1
    ratingDescription = 'needs improvement'
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  }
}

const exerciseHours: number[] = [3, 0, 2, 4.5, 0, 3, 1]
const target: number = 2

const result: Result = calculateExercises(exerciseHours, target)
console.log(result)
