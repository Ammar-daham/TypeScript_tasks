
const calculateBmi = (height: number, weight: number) : string => {
    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);
    console.log(bmi)
    if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal (healthy weight)';
      } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
}

console.log(calculateBmi(158, 65))
