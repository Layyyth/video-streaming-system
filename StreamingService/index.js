const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Streaming Service is running!');
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Streaming Service running on port ${PORT}`);
});

