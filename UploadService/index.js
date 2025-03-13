const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Upload Service is running!');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Upload Service running on port ${PORT}`);
});

