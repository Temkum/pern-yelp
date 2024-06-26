import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

// import query from index.js
import { query } from './db/index.js';

dotenv.config();

const app = new express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

app.get('/api/v1/restaurants', async (req, res) => {
  try {
    // const results = await query('SELECT * FROM restaurants');

    const restaurantRatingData = await query(
      'SELECT * from restaurants left join (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id'
    );

    res.status(200).json({
      results: restaurantRatingData.length,
      ratingsData: restaurantRatingData,
    });
    console.log(restaurantRatingData.length);
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

    const reviews = await query(
      'SELECT * FROM reviews WHERE restaurant_id = $1',
      [req.params.id]
    );

    const rating = await query(
      'SELECT * from restaurants left join (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1',
      [req.params.id]
    );

    res
      .status(200)
      .json({ restaurant: results[0], reviews: reviews, rating: rating[0] });
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

app.post('/api/v1/restaurants/:id/add-review', async (req, res) => {
  try {
    const results = await query(
      'INSERT INTO reviews(restaurant_id, name, review, rating) VALUES($1, $2, $3, $4) RETURNING *',
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    res.status(201).send(results);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
