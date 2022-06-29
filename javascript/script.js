// import addNewSystem from "../Events/Botton/ChooseSystem/addNewSystem.js"

const limitOfSystem = 9
let n = 0

function getNextTableElement(numberOfRow, now) {
    switch(numberOfRow) {
        case 0:
            return `<td id="number">${n+1}</td>`;
            break;
        case 1:
            return `<td><a href="financialSystems.html">${prompt("Введите название новой системы", `Система №${n+1}`)}</a></td>`;
            break;
        case 2:
            return '<td style="min-width: 70px"><a href="#">цель</a></td>';
            break;
        case 3:
            return `<td>${(now.getDate() < 10) ? '0':''}${now.getDate()}-${(now.getMonth()+1 < 10) ? '0':''}${now.getMonth()+1}-${now.getFullYear()}</td>`;
            break;
        case 4:
            return `<td>${(now.getDate() < 10) ? '0':''}${now.getDate()}-${(now.getMonth()+1 < 10) ? '0':''}${now.getMonth()+1}-${now.getFullYear()}</td>`;
            break;
        case 5:
            return `<td class="delete-system"><bottom id="buttrow${n}" class="bottom-delete-system" onclick="deleteSystem(this)"><img class="icon-delete" src="icon/deleteElement.png" alt="Удалить Систему"></bottom></td>`;

    }   
}




function deleteSystem(obj) {


    let parant = document.querySelector("#placeForNewSystem");


    let IdOflineToDelete = document.querySelector(`#${obj.id.slice(4)}`);
    console.log(`#${obj.id.slice(4)}`)

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
    console.log(listNumberRow);
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





acceptChangeBotton.addEventListener('click', TochangeSystem)



