import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})