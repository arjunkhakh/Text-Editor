const express = require('express');
<<<<<<< HEAD
const path = require('path')
=======

>>>>>>> ce73710081bf607f4df864f70a1a8f0e21262eb0
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
// console.log(path.join(__dirname, '../client/dist/index.html'))
require('./routes/htmlRoutes')(app);


=======

require('./routes/htmlRoutes')(app);

>>>>>>> ce73710081bf607f4df864f70a1a8f0e21262eb0
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
