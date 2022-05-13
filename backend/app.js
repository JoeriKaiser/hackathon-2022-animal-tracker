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

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM data', (err, result) => {
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
    'INSERT INTO petsdata (nom, poids, anniversaire, photo, type, uuid) VALUES (?, ?, ?, ?, ?, ?)',
    [nom, poids, anniversaire, photo, type, uuid],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Impossible to POST datas');
      } else {
        response.status(200).send('Animal successfully saved, welcome !');
      }
    }
  );
});

app.post('/api/datas', cors(corsOptions), (req, res) => {
  const { datas, uuid } = req.body;
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
  const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const actualDate = `${now.getDate()}-${
    now.getMonth() + 1
  }-${now.getFullYear()}`;
  console.log(actualDate);
  connection.query(
    `INSERT INTO data (datas, uuid, timestamp, date_record ) VALUES (?,?,?,?)`,
    [datas, uuid, time, actualDate],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Impossible to POST datas');
      } else {
        console.log('datas recues');
        res.status(200).send('Your datas are posted');
      }
    }
  );
});
