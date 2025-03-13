const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('File System Service is running!');
});

const PORT = 3004;
app.listen(PORT, () => {
    console.log(`File System Service running on port ${PORT}`);
});

