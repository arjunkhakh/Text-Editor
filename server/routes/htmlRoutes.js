const path = require('path');
// console.log(path.join(__dirname, '../../client/dist/index.html'))
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );


