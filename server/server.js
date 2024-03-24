import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = new express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from server!');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
