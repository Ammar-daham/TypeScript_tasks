interface Result {
  periodLength: number
  trainingDays: number
  success: boolean
  rating: number
  ratingDescription: string
  target: number
  average: number
}

interface inputValues_1 {
  target: number
  exerciseHours: number[]
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


const parseArguments = (args: string[]): inputValues_1 => {
    if (args.length < 4) {
      throw new Error('Not enough arguments');
    }
    const parsedArgs = args.slice(2).map(Number);
    if (parsedArgs.some(isNaN)) {
      throw new Error('Provided values were not numbers!');
    }
    return {
      target: parsedArgs[0],
      exerciseHours: parsedArgs.slice(1),
    };
  };


try {
    const { target, exerciseHours } = parseArguments(process.argv);
  const result: Result = calculateExercises(exerciseHours, target)
  console.log(result)
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }