import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carsRoute from './Routes/carsRoute';
import motorcycleRoute from './Routes/motorcycleRoute';

const app = express();
app.use(express.json());
app.use(carsRoute);
app.use(motorcycleRoute);
app.use(ErrorHandler.handle);

export default app;
