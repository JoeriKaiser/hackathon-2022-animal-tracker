const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();
const app = express();
app.use(cors());
const port = 5000;
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const corsOptions = {
  origin: 'http://localhost:3000',
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

app.get('/api/animals', (req, res) => {
  connection.query('SELECT * FROM petsdata', (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('error to display the datas from the databases');
    } else {
      res.status(200).json(result);
    }
  });
});

app.post('/api/animals', (request, response) => {
  const { nom, poids, anniversaire, photo, type, uuid } = request.body;
  connection.query(
    "INSERT INTO petsdata (nom, poids, anniversaire, photo, type, uuid) VALUES (?, ?, ?, ?, ?, ?)",
    [nom, poids, anniversaire, photo, type, uuid],
    (err, result) => {
      if (err) {
        console.error(err);
        response.status(500).send("Error saving animal");
      } else {
        response.status(200).send('Animal successfully saved');
      }
    }
  );
});



