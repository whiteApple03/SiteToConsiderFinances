import { app } from '../Express/StartingApp/initializationApp.js';


export const GetJson = (url) => {
    const result = app.get(url);
}