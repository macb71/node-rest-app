import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world from node REST API test!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});