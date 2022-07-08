
import assert from 'assert';
import {getNextTableElement} from '../../passiveFunctions/getNextTableElement.js'; 
import { sortRovNumber } from '../../passiveFunctions/sortRovNumber.js';

import GlobalVars from '../../Vars/GlobalVars.json' assert {type: "json"};


let n = GlobalVars.n;
let limitOfSystem = GlobalVars.limitOfSystem;


export function addNewSystem(button) {
    
    let system = document.createElement('tr');
    system.id = `row${n}`;
    
    system.innerHTML = "<tr id=`row${n}`></tr>";
    document.querySelector("#placeForNewSystem").append(system);
    rowId = document.querySelector(`#row${n}`);


    for (let i = 0; i < 6; i++) {
        let contentOfSystem = ""
        let now = new Date();
        contentOfSystem = getNextTableElement(i, now);

        rowId.insertAdjacentHTML('beforeend', contentOfSystem);
    }




    n += 1; 
    let AlertAboutNoActiveSystem = document.querySelector("#noActiveSystem");

    if (n > 0) {

        AlertAboutNoActiveSystem.style.display = "none";        

    }
    if (n >= limitOfSystem) {
        button.style.display = "none";
        
        let limit = document.createElement('span');
        limit.id = 'AlertAboutLimit';
        limit.textContent = 'Достигнут лимит систем';
        button.after(limit);
    } 
    const DeleteButton = document.querySelector(`#buttrow${n-1}`)
    DeleteButton.addEventListener('click', () => deleteSystem(DeleteButton));



}

export function deleteSystem(deletedSystem) {


    let parant = document.querySelector("#placeForNewSystem");
    let IdOflineToDelete = document.querySelector(`#${deletedSystem.id.slice(4)}`);

    parant.removeChild(IdOflineToDelete);
    n--;
    if (n < limitOfSystem && document.querySelector("#AlertAboutLimit")) {
        buttonAddNewSystem = document.querySelector('.bottom-add-new-system');
        buttonAddNewSystem.style.display = 'flex';
        document.querySelector(".table-foot").removeChild(document.querySelector("#AlertAboutLimit"))
        
    }


    if (n != 0)  
        sortRovNumber();
    else
        document.querySelector('#noActiveSystem').style.display = "block";
}
