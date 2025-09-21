const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./data/database');
const app = express();

app.use(express.json()); // parsing json in body

const port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Accept, Content-Type, Z-Key'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/', require('./routes'));

// Error handling CATCH ALL
process.on('uncaughtException', (err) => {
  console.error(process.stderr.fd, `Uncaught Exception: ${err}\n` * `Exception origin: ${origin} `);
});

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and server is running on port ${port}`);
    });
  }
});
