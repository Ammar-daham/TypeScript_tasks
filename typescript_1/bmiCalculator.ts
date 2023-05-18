interface inputValues {
  height: number
  weight: number
}

const calculateBmi = (height: number, weight: number): string => {
  const heightInMeters = height / 100

  const bmi = weight / (heightInMeters * heightInMeters)
  console.log(bmi)
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal (healthy weight)'
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight'
  } else {
    return 'Obese'
  }
}

const parseInput = (args: string[]): inputValues => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}

try {
    const { height, weight } = parseInput(process.argv)
    console.log(calculateBmi(height, weight))
} catch(error: unknown) {
    let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}

// const a: number = Number(process.argv[2])
// const b: number = Number(process.argv[3])

//console.log(calculateBmi(a, b))
