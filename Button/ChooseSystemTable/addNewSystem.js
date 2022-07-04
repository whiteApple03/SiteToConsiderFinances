
import globVars from "./globalVars.json";

export const addNewSystem = (botton) => {

    let system = document.createElement('tr');
    system.id = `row${globalVars.n}`;
    
    system.innerHTML = "<tr id=`row${globalVars.n}`></tr>";
    console.log(system);
    document.querySelector("#placeForNewSystem").append(system);
    let rowId = document.querySelector(`#row${globalVars.n}`);
    console.log(rowId);

    for (let i = 0; i < 6; i++) {
        let contentOfSystem = ""
        let now = new Date();
        contentOfSystem = getNextTableElement(i, now);
        console.log(getNextTableElement);


        rowId.insertAdjacentHTML('beforeend', contentOfSystem);
    }

    globalVars.n += 1; 
    let AlertAboutNoActiveSystem = document.querySelector("#noActiveSystem");

    if (globalVars.n > 0) {

        AlertAboutNoActiveSystem.style.display = "none";        

    }
    if (globalVars.n >= limitOfSystem) {
        botton.style.display = "none";
        
        let limit = document.createElement('span');
        limit.id = 'AlertAboutLimit';
        limit.textContent = 'Достигнут лимит систем';
        botton.after(limit);
        
    } 


}

export const getNextTableElement = (numberOfRow, now) => {
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