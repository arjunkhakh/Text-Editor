const express = require('express');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(path.join(__dirname, '../client/dist/index.html'))
// require('./routes/htmlRoutes')(app);
app.get('/', (req, res) =>
    // res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    res.sendFile('../client/dist/index.html', {root: __dirname})
);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));