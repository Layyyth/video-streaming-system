const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Auth Service is running!');
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});

