const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, my name is Comfort Ngwenya and this is a basic node server, to deploy. ');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});