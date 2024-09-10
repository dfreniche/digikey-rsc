require('dotenv').config();

const express = require('express');
const app = express();
const port = 5000;

const addRoutesTo = require("./routes.js");

const cors = require('cors');

app.use(express.json());
app.use(cors());

addRoutesTo(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});