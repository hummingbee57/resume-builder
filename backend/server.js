import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

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

app.listen(3000);