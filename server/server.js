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
  try {
    const results = await query('SELECT * FROM restaurants');

    console.log(results);
    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.post('/api/v1/restaurants', async (req, res) => {
  try {
    const results = await query(
      'INSERT INTO restaurants(name, location, price_range) VALUES($1, $2, $3) RETURNING *',
      [req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);
    res.status(201).send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const results = await query('SELECT * FROM restaurants WHERE id = $1', [
      req.params.id,
    ]);

    res.send(results[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.put('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const results = await query(
      'UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    console.log(results[0]);
    res.send(results[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.delete('/api/v1/restaurants/:id', async (req, res) => {
  try {
    const results = await query('DELETE FROM restaurants WHERE id = $1', [
      req.params.id,
    ]);

    res.status(204);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
