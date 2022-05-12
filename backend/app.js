const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

connection.connect((err) => {
  if (err) {
    console.log('error connecting : ' + err.stack);
  } else {
    console.log('connected to database with threadId:' + connection.threadId);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Chou Pets app !');
});

app.get('/api/datas', (req, res) => {});
