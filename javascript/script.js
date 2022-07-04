
// import * as TableChooseSystemController from '../Button/ChooseSystemTable/addNewSystem.js';

import globVars from "./ControllerJSON/Controller.js";

console.log(globVars);


const limitOfSystem = 9;





function deleteSystem(obj) {


    let parant = document.querySelector("#placeForNewSystem");


    let IdOflineToDelete = document.querySelector(`#${obj.id.slice(4)}`);

    parant.removeChild(IdOflineToDelete);
    n--;
    if (n < limitOfSystem && document.querySelector("#AlertAboutLimit")) {
        buttonAddNewSystem = document.querySelector('.bottom-add-new-system')
        buttonAddNewSystem.style.display = 'flex';
        document.querySelector(".table-foot").removeChild(document.querySelector("#AlertAboutLimit"))
        
    }


    if (n != 0)  
        sortRovNumber();
    else
        document.querySelector('#noActiveSystem').style.display = "block";






}

function sortRovNumber() {
    tbody = document.querySelector("#placeForNewSystem");

    for(let i = 0; i < tbody.childNodes.length; i++) {
        tbody.childNodes[i].id[tbody.childNodes[i].id.length-1];
        Bottom = document.querySelector(`#buttrow${tbody.childNodes[i].id[tbody.childNodes[i].id.length-1]}`);
        Bottom.id = `buttrow${i}`;
        tbody.childNodes[i].id = `row${i}`;


    }

    listNumberRow = document.querySelectorAll("#number")

    for (let i = 0; i < listNumberRow.length; i++) {
        listNumberRow[i].innerHTML = `${i+1}`;
    }
}

// let acceptChangeBotton = systemManagement.acceptChange;

// function TochangeSystem() {
//     formValue = systemManagement.changeSystem.options[0];

//     switch(formValue.text) {
//         case "Добавить новую категорию":
//             financialSystem.addNewSystem();
//             break;
//     }
// }





// acceptChangeBotton.addEventListener('click', TochangeSystem)



