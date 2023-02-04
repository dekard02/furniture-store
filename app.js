const express = require('express');

const app = express();
app.use('/public', express.static('./public'));

const port = 8000;
app.listen(port);
