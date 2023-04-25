import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carsRoute from './Routes/carsRoute';

const app = express();
app.use(express.json());
app.use(carsRoute);
app.use(ErrorHandler.handle);

export default app;
