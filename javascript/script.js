import { assert } from 'console';
import  express, { json }  from 'express';
import path from 'path';

import { app } from '../Express/StartingApp/initializationApp.js';
import '../Buttons/EventsOfButton/addNewSystem.js';
console.log(GlobalVars.n)
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;




app.use(express.static(path.resolve(__dirname, 'static')));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/table', (req, res) => {
    res.render('table');
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('Server is OK');
});




























