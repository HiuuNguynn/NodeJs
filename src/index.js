import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public'))); // ✅ Cross-platform path
// Handlebars setup
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views')); // ✅ Cross-platform path


app.get('/', (req, res) => res.render('home'));
app.get('/news', (req, res) => res.render('news'));

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
