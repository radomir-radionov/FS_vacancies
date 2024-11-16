import dotenv from 'dotenv';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import connectDB from './config/db.js';
import applicationRoutes from './routes/applicationRoutes.js';

dotenv.config();

const app = new Koa();
const PORT = process.env.PORT || 5001; // Use port 5001 instead of 5000


// Middleware
app.use(bodyParser());

// Routes
app.use(applicationRoutes.routes()).use(applicationRoutes.allowedMethods());

// Database Connection
connectDB();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
