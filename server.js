const express = require('express');
// const axios = require('axios');

const app = express();

app.use('/', express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));