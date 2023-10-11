import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/db.js'
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";
const port = process.env.PORT || 5000;
import useRoutes from "./routes/userRoute.js";

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', useRoutes);

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`));
