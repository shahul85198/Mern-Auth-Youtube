import express from "express";
import dotenv from 'dotenv';
dotenv.config()
const  port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes'
import { erorHandler, notFound } from "./middleware/errorMiddleware";

const app = express()

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Serve is Ready'))

app.use(notFound);
app.use(erorHandler);

app.listen(port, () => console.log(`server started on port ${port}`))