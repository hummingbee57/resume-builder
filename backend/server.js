import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { mongourl } from './config.js';
import { User } from '../models/userModel.js'

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

app.post("/personal_details", async (req, res) => {
    if (
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.email ||
        !req.body.number
    ) {
        return res.status(400).send({message: 'Missing required fields (name, email, phone)'});
    };

    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        number: req.body.number,
        website: req.body.website ? req.body.website : null,
        github: req.body.github ? req.body.github : null,
        linkedin: req.body.linkedin ? req.body.linkedin : null
    }

    const user = await User.create(newUser);

    return response.status(201).send(user);
  
});

// connect mongodb database
mongoose
    .connect(mongourl)
    .then(() => {
        app.listen(3000, () => {
            console.log("App is listening to port 3000")
        });
    });