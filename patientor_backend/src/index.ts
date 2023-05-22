import express from 'express';

import diagnosesRouter from './routes/diagnoseRoute';
import patientRouter from './routes/patientRoute';
import cors from 'cors'; 



const app = express();
app.use(express.json());


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