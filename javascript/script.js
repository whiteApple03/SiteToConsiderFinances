import { assert } from 'console';
import  express, { json }  from 'express';
import path from 'path';

import { app } from '../Express/StartingApp/initializationApp.js';
import GlobalVars from '../Vars/GlobalVars.json' assert {type: "json"};
console.log();
// import '../Buttons/EventsOfButton/addNewSystem.js';

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000;




app.use(express.static(path.resolve(__dirname, 'PagesHTML')));
app.set('view engine', 'ejs');



app.get('/statistick', (req, res) => {
    res.send(`${JSON.stringify(GlobalVars)}`)
    res.sendFile(__dirname, 'Vars/GlobalVars.json')
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('Server is OK');
});




























