import express from 'express';
import routes from './routes.js';

const app = express();

// Settings
app.set('port', process.env.PORT || 8090);

// Middlewares
app.use(express.json({ limit: '500mb', extended: true }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use(express.text());

// Routes
routes(app);

// Listen
app.listen(app.get('port'), () => {
  console.log(`Local Server run on port ${app.get('port')}`);
});