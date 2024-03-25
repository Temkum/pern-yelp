import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// import query from index.js
import { query } from './db/index.js';

dotenv.config();

const app = new express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

app.get('/api/v1/restaurants', async (req, res) => {
  const results = await query('SELECT * FROM restaurants');
  console.log(results);
  res.send(results);
});

app.post('/api/v1/restaurants', (req, res) => {
  console.log(req.body);
});

app.get('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: 'SUCCESS',
    data: {
      restaurant: 'chicken',
    },
  });
});

app.put('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id);

  res.status(200).json({
    status: 'SUCCESS',
    data: {
      restaurant: 'bread',
    },
  });
});

app.delete('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id);
  res.status(204).send('DELETED');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
