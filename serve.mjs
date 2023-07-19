import express from 'express';
import compression from 'compression'

const app = express();

app.use(compression());

app.use(express.static('dist'));
app.use(express.static('public'));


app.get('/favicon.ico', (req, res) => res.status(204).end());

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});