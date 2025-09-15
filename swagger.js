const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'A simple API to manage contacts'
  },
  host: 'localhost:3000',
  schemes: ['http', 'https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

// This will generate the swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);
