import  express  from 'express';
import { appendFile } from 'fs';
import path from 'path';

import { app } from '../Express/StartingApp/initializationApp.js'

// import '../Buttons/EventsOfButton/addNewSystem.js';


const __dirname = path.resolve();

app.use(express.static(path.resolve(__dirname, 'PagesHTML')));

app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server is OK');
});

// add.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'PagesHTML', 'index.html'));
// });























