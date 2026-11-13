import express from 'express';
import envioRoutes from './routes/endpoints.routes.js';

const app = express();

app.use(express.json());
app.use('/api', envioRoutes);

export default app;