import cors from '@koa/cors';
import dotenv from 'dotenv';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import connectDB from './config/db.js';
import applicationRoutes from './routes/applicationRoutes.js';

dotenv.config();

const app = new Koa();
const PORT = process.env.PORT || 5001;

// Enable CORS
// Enable CORS with dynamic origin
app.use(
  cors({
      origin: (ctx) => {
          const allowedOrigins = [
              'http://localhost:3000', // Local development
              'https://fsvacancies-production.up.railway.app', // Deployed frontend
          ];

          const requestOrigin = ctx.request.header.origin;

          if (allowedOrigins.includes(requestOrigin)) {
              return requestOrigin; // Allow this origin
          }

          return ''; // Block other origins
      },
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowHeaders: ['Content-Type'],
  })
);
// Middleware
app.use(bodyParser());

// Routes
app.use(applicationRoutes.routes()).use(applicationRoutes.allowedMethods());

// Database Connection
connectDB();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
