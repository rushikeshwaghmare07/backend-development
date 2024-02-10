import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// excepting json files
app.use(express.json({limit: "10kb"})) // limit: Controls the maximum request body size.

// excepting data from URL
app.use(express.urlencoded({extended: true, limit: "10kb"}))

// public assets for own server(img, files, folder)
app.use(express.static("public"))

app.use(cookieParser())


export { app };