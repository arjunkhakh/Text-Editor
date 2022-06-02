const path = require('path');
<<<<<<< HEAD
// console.log(path.join(__dirname, '../../client/dist/index.html'))
=======

>>>>>>> ce73710081bf607f4df864f70a1a8f0e21262eb0
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
<<<<<<< HEAD


=======
>>>>>>> ce73710081bf607f4df864f70a1a8f0e21262eb0
