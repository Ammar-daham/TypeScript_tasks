import express from 'express';

import diagnosesRouter from './routes/diagnoseRoute';
import patientRouter from './routes/patientRoute';



const app = express();
app.use(express.json());

import cors from 'cors'; 

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  res.send('pong!');
});

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
    console.log(`⚡ﻌ Server is running at http://localhost:${PORT}`);
});