const express = require('express');
const app = express();

const home = require('./home');

app.use('/home', home);

app.listen(3006, () => {
    console.log('Server is running on port 3000');
});