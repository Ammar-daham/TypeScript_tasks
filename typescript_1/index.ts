import express, { Request, Response } from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises, Result } from './exerciseCalculator';



const app = express();
app.use(express.json());
const port = 3002;

app.get('/hello', (_req: Request, res: Response) => {
  res.send('Hello Full Stack!');
});

// Endpoint for BMI calculator
app.get('/bmi', (req: Request, res: Response) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  const bmi = calculateBmi(height, weight);

  res.json({
    weight,
    height,
    bmi,
  });
});

app.post('/exercises', (req: Request, res: Response) => {
  const { daily_exercises, target } = req.body as { daily_exercises: number[], target: number };

  if (!daily_exercises || !target) {
    res.status(400).json({ error: 'parameters missing' });
    return;
  }

  if (!Array.isArray(daily_exercises) || isNaN(Number(target))) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  const result: Result = calculateExercises(daily_exercises ,target);

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
