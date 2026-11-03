// import express, { Request, Response } from 'express';
// import userRoutes from './routes/user.routes.js'

// const app = express();

// // Middleware para parsear JSON
// app.use(express.json());

// // Ruta de prueba/salud
// app.get('/api/status', (req: Request, res: Response) => {
//   res.json({ status: 'OK', message: 'API funcionando correctamente' });

// app.use(express.json());
// app.use('/api', userRoutes);
// });

// export default app;

import express from 'express';
import userRoutes from './routes/user.routes.js';
import productoRoutes from './routes/producto.routes.js'

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api',productoRoutes);

export default app;
