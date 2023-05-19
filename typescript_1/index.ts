import express, { Request, Response } from 'express';
import { calculateBmi } from './bmiCalculator';

const app = express();
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
