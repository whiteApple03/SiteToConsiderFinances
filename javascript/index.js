// import '../Buttons/EventsOfButton/addNewSystem.js';

import express from 'express';
import path from 'path';

const app = express();


const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000;



app.listen(PORT, (err) => {
    if (err) throw err
    console.log("Server is OK")
})




















