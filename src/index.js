const db = require('./db');
const router = require('./router');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', router)

app.listen(PORT, () => {console.log(`Server started on port ${ PORT }`);});