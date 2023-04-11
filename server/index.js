// main server side app

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from "./routes/posts.js";

const hostname = "127.0.0.1";

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
// we have to specify the cors above the routes 
app.use(cors());

//localhost:5000/posts
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://first:muhammadpbuh@cluster0.yqxtgf2.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running at http://${hostname}:${PORT}/posts`) )) // if connection successfull
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);