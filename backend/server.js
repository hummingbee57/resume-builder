import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { mongourl } from 'config.js';

// create express instance called app
const app = express();

app.use(express.json);

// allows frontend to access backend API
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
);

app.get("/", (req, res) => {
    console.log("Here")
    res.send("Hi")
});

// connect mongodb database
mongoose
    .connect(mongourl)
    .then(() => {
        app.listen(3000, () => {
            console.log("App is listening to port 3000")
        });
    });