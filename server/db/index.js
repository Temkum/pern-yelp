import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'yelp_clone',
  password: 'postgres@24',
  port: 5432,
});

export const query = async (text, params) => {
  try {
    const res = await pool.query(text, params);
    return res.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};
