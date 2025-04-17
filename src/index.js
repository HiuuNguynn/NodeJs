import express from 'express';
import path from 'path';
import morgan from 'morgan';
import handlebars from 'express-handlebars';
import route from './routes/index.route.js';
import { fileURLToPath } from 'url';
import db from './config/db/index.js';

//Connect to DB
db.connect();

// Import routes
const app = express();
const port = 3000;

// Middleware
// app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes
route(app);

// Start server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
