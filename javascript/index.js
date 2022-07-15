import  express  from 'express';
import path from 'path';

// import '../Buttons/EventsOfButton/addNewSystem.js';


const PORT = process.env.PORT ?? 3000;
const __dirname = path.resolve();

const app = express();
app.use(express.static(path.resolve(__dirname, "static")));


app.get('/', (req, res) => {
    res.render('index');
});



app.listen(3000, (err) => {
    if (err) throw err;
    else console.log("Server is OK");
});
























