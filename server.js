const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/ext', (req, res) => {
    fetch('http://google.com')
        .then(response => response.text())
        .then(data => {
            res.send("if you see this, it means the external resource is reachable");
            console.log(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error fetching external resource');
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});